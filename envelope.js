document.getElementById('tear-target').addEventListener('dragstart', (e) => {
  anime({
    targets: '.envelope',
    rotate: '-15deg',
    scale: 1.2,
    complete: () => {
      document.getElementById('main-content').classList.remove('hidden');
    }
  });
});
