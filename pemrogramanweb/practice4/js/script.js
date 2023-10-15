const changeTextButton = document.getElementById('changeTextButton');
const displayText = document.getElementById('displayText');
const checkIpLocationButton = document.getElementById('checkIpLocationButton');
const ipLocationInfo = document.getElementById('ipLocationInfo');

checkIpLocationButton.addEventListener('click', async function() {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        ipLocationInfo.textContent = `IP: ${data.ip}, Lokasi: ${data.city}, ${data.region}, ${data.country}`;
    } catch (error) {
        console.error('Gagal mengambil data lokasi.');
    }
});

// Hanya satu deklarasi variabel changeTextButton
changeTextButton.addEventListener('click', function() {
    tampilkanPopupAuthor();
});

function tampilkanPopupAuthor() {
    const authorInfo = "Mini Web Sederhana\nDibuat oleh Mansur Julianto, TI 1, Pemrograman Web";
    alert(authorInfo);
}
