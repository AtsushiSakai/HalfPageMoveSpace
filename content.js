document.addEventListener('keydown', function(event) {
  if (event.key === ' ') {
    event.preventDefault();
    window.scrollBy(0, window.innerHeight / 2);
  }
});
