// Update time counter
const startDate = new Date('2024-02-14');
setInterval(() => {
  const diff = Date.now() - startDate;
  document.querySelector('.seconds').textContent = Math.floor(diff / 1000);
}, 1000);

// Music toggle
const music = new Howl({ src: ['assets/music.mp3'], loop: true });
document.getElementById('music-toggle').addEventListener('click', () => {
  if (music.playing()) {
    music.pause();
  } else {
    music.play();
  }
});
