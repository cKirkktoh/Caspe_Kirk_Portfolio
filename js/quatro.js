// main.js

// Define an array to hold the bio information for each team member
const teamMembers = [
  {
    name: 'Kirk Caspe',
    image: 'images/kirk.jpg',
    bio: 'Kirk is a talented developer with a passion for creating beautiful and intuitive user experiences. When he\'s not coding, he can be found playing basketball, football and video games with his friends.',
  },
  {
    name: 'Nikolai Meijer',
    image: 'images/nik.jpg',
    bio: 'Nik is a designer, artist, car-guy who loves to create things that are visually stunning. One catch though, he is a master procrastinator...',
  },
  {
    name: 'Quatro',
    image: 'images/quatro-team-logo.jpg',
    bio: 'Hi, We are Quatro! back from the past, and fresher than ever. Want to learn about our awesome team? Click a button to get started!',
  }
];

// Get references to the name, bio, and image elements
const nameElement = document.querySelector('.team-member-name');
const bioElement = document.querySelector('.team-member-bio');
const imageElement = document.querySelector('.team-member-image');

// Get references to the buttons and add click event listeners to each one
const buttons = document.querySelectorAll('.team-member-button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the index of the clicked button from its data-member attribute
    const index = button.dataset.member;
    
    // Update the name, bio, and image elements with the data for the clicked team member
    nameElement.textContent = teamMembers[index].name;
    bioElement.textContent = teamMembers[index].bio;
    imageElement.src = teamMembers[index].image;
  });
});

(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();
