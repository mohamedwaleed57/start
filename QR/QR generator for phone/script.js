const generateBtn = document.getElementById('generateBtn');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    if (!phoneNumber) {
        alert('Please enter a phone number.');
        return;
    }

    const telUrl = `tel:${phoneNumber}`;

    const qrCode = new QRCodeStyling({
        width: 400,
        height: 400,
        data: telUrl,
        dotsOptions: {
            color: "#000000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#ffffff",
        }
    });

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';
    qrCode.append(qrcodeContainer);
});
