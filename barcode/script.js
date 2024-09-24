        
        function generatebarcode(){
            var barcodeData = document.getElementById("inp").value;
        var bDa = document.getElementById("in").value;
            JsBarcode("#barcode", barcodeData, {
                    format: "CODE128",
                    lineColor: bDa,
                    width: 2,
                    height: 100,
                    displayValue: true
                });
        }
        var baDa = document.getElementById("inp");
        baDa.onkeydown = function(){
            setInterval(generatebarcode, 1)
        }
        document.getElementById("printbtn").addEventListener("click", downloadCanvas);
        const canvas = document.getElementById("barcode")
        function downloadCanvas() {
            const link = document.createElement('a');
            link.download = 'barcode.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }