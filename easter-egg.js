const typedLetters = [];
const secretCode = "sofi";

window.addEventListener('keydown', (e) => {
  typedLetters.push(e.key.toLowerCase());
  if (typedLetters.slice(-secretCode.length).join('') === secretCode) {
    createHeartPetals();
    typedLetters.length = 0; // Reset
  }
});

function createHeartPetals() {
  const petalCount = 50;
  for (let i = 0; i < petalCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-petal';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);
  }
}
