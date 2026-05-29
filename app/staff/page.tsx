'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

interface StaffMember {
  name: string;
  img: string;
}

interface StaffGroup {
  group: string;
  members: StaffMember[];
}

const STAFF_GROUPS: StaffGroup[] = [
  {
    group: 'Owner',
    members: [
      {
        name: 'ItzArzzu',
        img: '/images/staff/ItzArzzu.png',
      },
    ],
  },
  {
    group: 'Admin',
    members: [
      {
        name: 'Cherienyx',
        img: '/images/staff/Cherienyx.png',
      },
      {
        name: '69Hanszx',
        img: '/images/staff/69Hanszx.png',
      },
    ],
  },
];

export default function StaffPage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <div className="slimecube-staff-page">
            <div className="panel groups">
              <h1 className="panel-title">Staff Members</h1>
              {STAFF_GROUPS.map((group, groupIdx) => (
                <div key={groupIdx} className="group mb-8 last:mb-0">
                  <h2>
                    <i className="mdi mdi-badge-account-outline"></i>
                    <span>{group.group}</span>
                  </h2>
                  <div className="list">
                    {group.members.map((member, memberIdx) => (
                      <div key={memberIdx} className="member">
                        <img src={member.img} alt={member.name} />
                        <p>{member.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
