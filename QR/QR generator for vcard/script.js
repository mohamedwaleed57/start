const generateBtn = document.getElementById('generateBtn');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!firstName || !lastName || !phone || !email || !address) {
        alert('Please fill in all fields.');
        return;
    }

    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
TEL:${phone}
EMAIL:${email}
ADR:${address}
END:VCARD`;

    const qrCode = new QRCodeStyling({
        width: 400,
        height: 400,
        data: vCardData,
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
