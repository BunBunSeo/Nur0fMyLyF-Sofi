function createDancers() {
  const danceContainer = document.createElement('div');
  danceContainer.className = 'chuttamalle-dance';

  // Add animated sprites here (use a sprite sheet)
  document.body.appendChild(danceContainer);

  // Play Chuttamalle song
  const sound = new Howl({ src: ['assets/chuttamalle-song.mp3'] });
  sound.play();
}

createDancers();
