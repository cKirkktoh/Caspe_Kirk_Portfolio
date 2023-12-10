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

(() => {

  const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

  tl.to(".slider", {y: "-100%", duration: 1.2})
  tl.to(".introduction-content", {y: "0%", duration: 2.1}, "-=1")
  tl.to(".circle-shape", {y: "0%", duration: 1.5}, "-=1")
  tl.to(".about-me-text", {y: "0%", duration: 1.5}, "-=1")
  tl.to(".skills-image", {y: "0%", duration: 0.2}, "-=1")

})();

// hotspot script
(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  function modelLoaded() {
      hotspots.forEach(hotspot => {
          hotspot.style.display = "block";
      });
  }

  function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
  }

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
  });
})();