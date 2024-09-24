function generateQRCode() {
    // Get the input value
    let inputData = document.getElementById("data-input").value;
    // Check if input is empty
    if (!inputData) {
        alert("Please enter text or URL");
        return;
    }
    
    // Get the container element
    var container = document.getElementById("qrcode");
    
    // Clear the container content
    container.innerHTML = "";
    // Display the input data
    var dataDisplay = document.getElementById("data-display");
    dataDisplay.textContent = "Data: " + inputData;
    const i = document.getElementById("inp");
    container.oncontextmenu = function(){
        i.style.display = "block";
    }
    const w = document.getElementById("wew").innerHTML += `<option>${inputData}</option>`;
    const t = document.getElementById("titlePage").innerHTML = `QR Code Generator : QR = ${inputData}`
    // Create a new QR code instance
    var canvas = new QRCode(container, {
        text: inputData,
        width: 400,
        height: 400,
        title: container,
    });
    }

    function downloadQRCode() {
        let container = document.getElementById("qrcode").getElementsByTagName("canvas")[0];
        let link = document.createElement("a");
        link.href = container.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
    }