document.addEventListener('DOMContentLoaded', async () => {
    const stopButton = document.getElementById('stopButton');

    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true
        });
        
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.ondataavailable = e => {
            chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { 'type' : 'video/webm' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'screen-recording.webm';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        };

        stopButton.style.display = 'block';
        stopButton.onclick = () => {
            mediaRecorder.stop();
            stopButton.style.display = 'none';
        };

        mediaRecorder.start();
    } catch (err) {
        console.error("Error: " + err);
    }
});
