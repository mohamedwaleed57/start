let map;
let marker;

function initMap() {
    const initialLocation = { lat: -34.397, lng: 150.644 }; // Default location
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialLocation,
        zoom: 8,
    });

    map.addListener("click", (event) => {
        const clickedLocation = event.latLng;

        // Place or move marker
        if (marker) {
            marker.setPosition(clickedLocation);
        } else {
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
            });
        }

        // Set latitude and longitude inputs
        document.getElementById("latitude").value = clickedLocation.lat();
        document.getElementById("longitude").value = clickedLocation.lng();
    });
}

const generateBtn = document.getElementById('generateBtn');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const latitude = document.getElementById('latitude').value.trim();
    const longitude = document.getElementById('longitude').value.trim();

    if (!latitude || !longitude) {
        alert('Please select a location on the map.');
        return;
    }

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=AIzaSyAZg0rEdha7PPB-5lxy-2HDqPECs-sZp7s,${latitude},${longitude}`;

    const qrCode = new QRCodeStyling({
        width: 400,
        height: 400,
        data: googleMapsUrl,
        dotsOptions: {
            color: "#000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#fff",
        }
    });

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';
    qrCode.append(qrcodeContainer);
});
function downloadQRCode() {
    let container = document.getElementById("qrcode").getElementsByTagName("canvas")[0];
    let link = document.createElement("a");
    link.href = container.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
}