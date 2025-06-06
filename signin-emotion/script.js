const video = document.getElementById('video');
const emoji = document.getElementById('emoji');
const snapButton = document.getElementById('snap');
const resetButton = document.getElementById('reset');
const passwordInput = document.getElementById('password');

// Load face-api.js models
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(startVideo);

// Start webcam
function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => console.error('Camera error:', err));
}

// Map expressions to emojis
const expressionToEmoji = {
  happy: "😄",
  sad: "😢",
  angry: "😠",
  surprised: "😲",
  fearful: "😨",
  disgusted: "🤢",
  neutral: "😐"
};

// Take a snap and append emoji to password
snapButton.addEventListener('click', async () => {
  const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceExpressions();

  if (detections.length > 0) {
    const expressions = detections[0].expressions;
    const maxExp = Object.keys(expressions).reduce((a, b) =>
      expressions[a] > expressions[b] ? a : b
    );
    const detectedEmoji = expressionToEmoji[maxExp];

    // Update live preview and append emoji
    emoji.innerText = detectedEmoji;
    passwordInput.value += detectedEmoji;
  } else {
    emoji.innerText = "❌";
  }
});

// Reset password and emoji preview
resetButton.addEventListener('click', () => {
  passwordInput.value = '';
  emoji.innerText = '🙂';
});
