'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';
import { supabase } from '@/lib/supabase';
import NotFound from '../not-found';

export default function PrivacyPolicyPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        await fetchTableData();
      } else {
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchTableData = async () => {
    try {
      setLoading(true);
      const { data: tableData, error: fetchError } = await supabase
        .from('Purchase_Records')
        .select('*')
        .order('Purchase Time', { ascending: true });

      if (fetchError) throw fetchError;
      setData(tableData || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatIDR = (value) => {
    if (!value && value !== 0) return '-';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const calculateTotal = () => {
    return data.reduce((sum, row) => sum + (Number(row.Cost) || 0), 0);
  };

  const handleCellEdit = (rowIndex, columnName, currentValue) => {
    if (!user) return;
    setEditingCell({ rowIndex, columnName });
    setEditValue(currentValue);
  };

  const saveEdit = async (rowIndex, columnName) => {
    try {
      const row = data[rowIndex];
      const updateData = { [columnName]: editValue };

      // Update the row using all columns as identifiers
      const { error: updateError } = await supabase
        .from('Purchase_Records')
        .update(updateData)
        .match(row); // Match the entire row

      if (updateError) throw updateError;

      // Update local state
      const newData = [...data];
      newData[rowIndex][columnName] = editValue;
      setData(newData);
      setEditingCell(null);
    } catch (err) {
      alert('Error saving: ' + err.message);
    }
  };

  const cancelEdit = () => {
    setEditingCell(null);
  };

  const addNewRow = async () => {
    try {
      const newRow = {
        'Purchase Time': new Date().toISOString(),
        'Username': '',
        'Category': '',
        'Item': '',
        'Amount': 0,
        'Cost': 0,
      };

      const {
        error: insertError,
        data: insertedData
      } = await supabase
        .from('Purchase_Records')
        .insert([newRow])
        .select();

      if (insertError) throw insertError;

      setData([...data, insertedData[0]]);
    } catch (err) {
      alert('Error adding row: ' + err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <NotFound />;
  if (!data.length) return <div>No data found</div>;

  const total = calculateTotal();
  const hiddenColumns = ['Purchase Time']; // Hide Purchase Time column
  const visibleKeys = Object.keys(data[0]).filter(key => !hiddenColumns.includes(key));

  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage">
            <h1 className="section-title"><span>Purchase Records</span></h1>
            <div className="panel slimecube-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <div className="table-wrapper">
                      <table className="data-table">
                        <thead>
                          <tr>
                            {visibleKeys.map((key) => (
                              <th key={key}>{key}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, idx) => (
                            <tr key={idx}>
                              {visibleKeys.map((key) => {
                                const isEditing = editingCell?.rowIndex === idx && editingCell?.columnName === key;
                                return (
                                  <td 
                                    key={key}
                                    onClick={() => handleCellEdit(idx, key, row[key])}
                                    style={{ cursor: 'pointer', minWidth: '100px' }}
                                    className="editable-cell"
                                  >
                                    {isEditing ? (
                                      <div style={{ display: 'flex', gap: '5px' }}>
                                        <input
                                          type={key === 'Cost' ? 'number' : 'text'}
                                          value={editValue}
                                          onChange={(e) => setEditValue(e.target.value)}
                                          autoFocus
                                          style={{ flex: 1, padding: '5px' }}
                                        />
                                        <button 
                                          onClick={() => saveEdit(idx, key)}
                                          style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
                                        >
                                          ✓
                                        </button>
                                        <button 
                                          onClick={cancelEdit}
                                          style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}
                                        >
                                          ✗
                                        </button>
                                      </div>
                                    ) : (
                                      key === 'Cost' ? formatIDR(row[key]) : String(row[key] || '')
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                          <tr className="total-row">
                            <td colSpan={visibleKeys.length - 1} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                              Total:
                            </td>
                            <td style={{ fontWeight: 'bold' }}>
                              {formatIDR(total)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p></p>
                    <button 
                      onClick={addNewRow}
                      style={{ 
                        marginBottom: '20px', 
                        padding: '10px 20px', 
                        backgroundColor: '#E1661C', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                      }}
                    >
                      + Add New Row
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}