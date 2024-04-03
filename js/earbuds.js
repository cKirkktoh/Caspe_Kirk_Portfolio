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

// burger menu script
(() => {
  // Your second script code goes here
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.querySelector('.nav ul');

  burgerMenu.addEventListener('click', () => {
      if (window.innerWidth <= 475) {
          if (navLinks.style.display === 'block') {
              navLinks.style.display = 'none';
              burgerMenu.classList.remove('active');
          } else {
              navLinks.style.display = 'block';
              burgerMenu.classList.add('active');
          }
      }
  });
})();

// Xray slider script
(() => {
    (function(){
        "use strict";
    
    
    var imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;
  
    
    function onDown() {
      dragging = true;
    }
    
    function onUp() {
      dragging = false;
    }
    
    function onMove(event) {
      if(dragging===true) {
        var x = event.clientX - imageCon.getBoundingClientRect().left;
        console.log(event.clientX);
        console.log(imageCon.getBoundingClientRect().left);
        if(x < min) { 
          x = min; 
        }
       else if(x > max) {
          x = max-4;
        }
        drag.style.left = x + 'px';
        left.style.width = x + 'px';
      }
    }
    
    drag.addEventListener('mousedown', onDown, false); 
    document.body.addEventListener('mouseup', onUp, false);
    document.body.addEventListener('mousemove', onMove, false);
    
    })();
    
  
})();


//Scroll Animation Script
(() => {

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 144;
  const images = [];

  const buds = {
      frame: 0
  }

  for(let i=0; i<frameCount; i++) {
      //console.log(i);
    const img = new Image();
  img.src = `images/sq/sequence_${(i+1)}.webp`;  
  images.push(img);
  }

  //console.table(images);

  gsap.to(buds, {
      frame: 143,
      snap: "frame",
      scrollTrigger: {
          trigger: "#explode-view",
          pin: true,
          scrub: 1,
          markers: true,
          start: "top top"
      },
      onUpdate: render
  })

  images[0].addEventListener("onload", render);

  function render() {
      console.log(buds.frame);
      console.log(images[buds.frame]);
      context.clearRect(0,0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame],0,0);
  }


})();