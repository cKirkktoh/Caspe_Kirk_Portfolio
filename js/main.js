(() => {
const elements = document.querySelectorAll('.fade-in');

function checkVisibility() {
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.75) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Initial check on page load
checkVisibility();
})();

