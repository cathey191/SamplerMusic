(function() {
	var container = document.querySelector('.container');
	var noise = {
	 	rainLow : new Audio('audio/lightRain.mp3'),
		rainMiddle : new Audio('audio/mediumRain.mp3'),
	 	rainStrong : new Audio('audio/heavyRain.mp3'),
	 	thunderLow : new Audio('audio/lightThunder.wav'),
		thunderMiddle : new Audio('audio/mediumThunder.wav'),
		thunderStrong : new Audio('audio/heavyThunder.wav'),
		hailLow : new Audio('audio/lightHail.mp3'),
		hailMiddle : new Audio('audio/mediumHail.mp3'),
		hailStrong : new Audio('audio/heavyHail.wav'),
		windLow : new Audio('audio/lightWind.wav'),
		windMiddle : new Audio('audio/mediumWind.wav'),
		windStrong : new Audio('audio/heavyWind.wav')
	}

	container.addEventListener('click', sounds, false);

	function sounds(e) {
		var buttonVar = e.target.parentNode;
		var buttonClass = buttonVar.className;
		var nextSibling = buttonVar.nextElementSibling;
		var previousSibling = buttonVar.previousElementSibling;
		var section = buttonVar.parentElement;
		var weather = section.classList[0];
		var current = weather+buttonClass;
		var strong = weather+"Strong";
		var middle = weather+"Middle";
		var low = weather+"Low"
		console.dir(typeof e.target.tagName);

		noise[strong].pause();
		noise[middle].pause();
		noise[low].pause();

		noise[current].play();

		if (buttonClass === 'Strong') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			nextSibling.style.border = '2px solid #b2bec3';
			nextSibling.nextElementSibling.style.border = '2px solid #b2bec3';

		} else if (buttonClass === 'Middle') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			nextSibling.style.border = '2px solid #b2bec3';

		} else if (buttonClass === 'Low') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			previousSibling.previousElementSibling.style.border = '2px solid #b2bec3';

		}

	}

})();
