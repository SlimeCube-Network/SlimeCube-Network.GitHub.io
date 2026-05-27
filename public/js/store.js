let selectedRank = null;

const usernameInput = document.getElementById('minecraft-username');
const purchaseBtn = document.getElementById('purchase-btn');

function updateBuyButton() {
    const username = usernameInput.value.trim();
    if (selectedRank && username.length > 0) {
        purchaseBtn.disabled = false;
        const rankName = document.querySelector('.rank-card.selected-rank .rank-name').innerText;
        purchaseBtn.innerHTML = `<i class="mdi mdi-credit-card" style="margin-right: 0.5rem;"></i>Buy ${rankName}`;
    } else {
        purchaseBtn.disabled = true;
        purchaseBtn.innerHTML = `<i class="mdi mdi-credit-card" style="margin-right: 0.5rem;"></i>Fill your Username and Select a Badge to Continue`;
    }
}

usernameInput.addEventListener('input', updateBuyButton);

document.querySelectorAll('.rank-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.rank-card').forEach(c => c.classList.remove('selected-rank'));
        card.classList.add('selected-rank');
        selectedRank = card.getAttribute('data-rank');
        updateBuyButton();
    });
});

function redirectToWhatsApp() {
    const username = usernameInput.value.trim();
    if (!selectedRank || username.length === 0) {
        alert('Please select a rank and enter your Minecraft username.');
        return;
    }
    const rankName = document.querySelector('.rank-card.selected-rank .rank-name').innerText;
    const rankPrice = document.querySelector('.rank-card.selected-rank .rank-price').innerText;
    const message = `Halo, saya ingin membeli Badge ${rankName}, dengan harga ${rankPrice}. Username saya: ${username}.`;
    const phoneNumber = '6281460939427';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}