// To enable the scroll event through clickable button

let section2 = document.getElementById("scrollable");
section2.addEventListener('click',() =>{
	window.scroll({
		top:730,
		left:0,
		behavior: 'smooth'
	});
});

// For clickable Actor's images, so that they change to the icons
// If statements added so if the user clicks on the pictures again the icons are changed back to the Actor's photos

let bio = document.getElementById('Suman1');
bio.addEventListener('click',() => {
	if (bio.src.match("Suman.png")) {
		bio.src="SumanW.png";
	}
	else{
		bio.src="Suman.png";
	}
})

let bio2 = document.getElementById('Fatima1');
bio2.addEventListener('click',() => {
	if (bio2.src.match("Fatima.png")) {
		bio2.src="FatimaW.png";
	}
	else{
		bio2.src="Fatima.png";
	}
})
