document.addEventListener('keydown', function(event) {

  // Skip when text area is focused.
  if (event.target.tagName.toLowerCase() === 'textarea') {
    return;
  }

  if (event.key === ' ') {
    event.preventDefault();
    window.scrollBy(0, window.innerHeight / 2);
  }
});
