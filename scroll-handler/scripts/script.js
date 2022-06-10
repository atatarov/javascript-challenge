const mastheadElement = document.querySelector('#masthead');

window.addEventListener('scroll', (event) => {
  // The same window.scrollY
  const isScrolled = mastheadElement.classList.contains('scrolled');
  if (event.currentTarget.scrollY >= 200) {
    if (!isScrolled) {
      mastheadElement.classList.add('scrolled');
    }
  } else {
    if (isScrolled) {
      mastheadElement.classList.remove('scrolled');
    }
  }
});
