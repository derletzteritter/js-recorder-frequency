function record() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        chunk = [];

        mediaRecorder.addEventListener("dataavailable", e => {
            chunk.push(e.data)
        });
        mediaRecorder.addEventListener("stop", e => {
            blob = new Blob(chunk)
            audio_url = URL.createObjectURL(blob)
            audio = new Audio(audio_url)
            audio.setAttribute("controls", 1)
            var ok = document.getElementById("ok");
            ok.appendChild(audio)
        });
    });
}

function play() {
    mediaRecorder.stop()
}