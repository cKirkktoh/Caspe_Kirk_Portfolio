console.log('Script loaded!');

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

//burger menu 


(()=>{
	const form = document.querySelector("#contactForm");
    const feedBack = document.querySelector("#feedback");

    function regForm(event) {
        //console.log("called");
        event.preventDefault();
        // calling to the php file on the server. We can do this because HTML and JS, run client-side. This also works becasue we have enabled CORS in the PHP file. This allows any domain to access our php file. This is okay for testing but not for production.
        const url = "http://localhost/Caspe_Kirk_Portfolio/adduser.php";
        const thisform = event.currentTarget;
        //console.log(thisform.elements.lname.value);
        const formdata = 
        "fullname=" + thisform.elements.fullname.value +
        "&email=" + thisform.elements.email.value +
        "message=" + thisform.elements.message.value;
        console.log(formdata);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formdata
        })
        .then(response => response.json())
        .then(responseText => {
            console.log(responseText);
            feedBack.innerHTML = "";

            if(responseText.errors) {
                responseText.errors.forEach(error => {
                    const errorElement = document.createElement("p");
                    errorElement.textContent = error;
                    feedBack.appendChild(errorElement);
                })
            } else {
                form.reset();
                const messageElement = document.createElement("p");
                messageElement.textContent = responseText.message;
                feedBack.appendChild(messageElement);
            }
        })
        .catch(error => {
            console.log(error);
            feedBack.innerHTML = "";
            const messageElement = document.createElement("p");
            messageElement.textContent = "Oops something went wrong."
            feedBack.appendChild(messageElement);
        })
    }
    form.addEventListener("submit", regForm);
})();