(function() {
	var container = document.querySelector('.container');
	var rainLow = new Audio('audio/lightRain.mp3');
	var rainMiddle = new Audio('audio/mediumRain.mp3');
	var rainStrong = new Audio('audio/heavyRain.mp3');
	var thunderLow = new Audio('audio/lightThunder.wav');
	var thunderMiddle = new Audio('audio/mediumThunder.wav');
	var thunderStrong = new Audio('audio/heavyThunder.wav');
	var hailLow = new Audio('audio/lightHail.mp3');
	var hailMiddle = new Audio('audio/mediumHail.mp3');
	var hailStrong = new Audio('audio/heavyHail.wav');
	var windLow = new Audio('audio/lightWind.wav');
	var windMiddle = new Audio('audio/mediumWind.wav');
	var windStrong = new Audio('audio/heavyWind.wav');

	container.addEventListener('click', sounds, false);

	function sounds(e) {
		var buttonVar = e.target.parentNode;
		var buttonClass = buttonVar.className;
		var nextSibling = buttonVar.nextElementSibling;
		var previousSibling = buttonVar.previousElementSibling;
		var section = buttonVar.parentElement;

		if (buttonClass === 'strong') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			nextSibling.style.border = '2px solid #b2bec3';
			nextSibling.nextElementSibling.style.border = '2px solid #b2bec3';

			// play sound
			if (section.className === 'rain section') {
				rainStrong.play();
				rainMiddle.pause();
				rainLow.pause();
			} else if (section.className === 'hail section') {
				hailStrong.play();
				hailMiddle.pause();
				hailLow.pause();
			} else if (section.className === 'wind section') {
				windStrong.play();
				windMiddle.pause();
				windLow.pause();
			} else if (section.className === 'thunder section') {
				thunderStrong.play();
				thunderMiddle.pause();
				thunderLow.pause();
			}

			//-----------------------------------------------------------------
			// END OF STRONG
			//-----------------------------------------------------------------
		} else if (buttonClass === 'middle') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			nextSibling.style.border = '2px solid #b2bec3';

			// play sound
			if (section.className === 'rain section') {
				rainMiddle.play();
				rainStrong.pause();
				rainLow.pause();
			} else if (section.className === 'hail section') {
				hailMiddle.play();
				hailStrong.pause();
				hailLow.pause();
			} else if (section.className === 'wind section') {
				windMiddle.play();
				windStrong.pause();
				windLow.pause();
			} else if (section.className === 'thunder section') {
				thunderMiddle.play();
				thunderStrong.pause();
				thunderLow.pause();
			}
			//-----------------------------------------------------------------
			// END OF MIDDLE
			//-----------------------------------------------------------------
		} else if (buttonClass === 'low') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			previousSibling.previousElementSibling.style.border = '2px solid #b2bec3';

			// play sound
			if (section.className === 'rain section') {
				rainLow.play();
				rainMiddle.pause();
				rainStrong.pause();
			} else if (section.className === 'hail section') {
				hailLow.play();
				hailMiddle.pause();
				hailStrong.pause();
			} else if (section.className === 'wind section') {
				windLow.play();
				windMiddle.pause();
				windStrong.pause();
			} else if (section.className === 'thunder section') {
				thunderLow.play();
				thunderMiddle.pause();
				thunderStrong.pause();
			}
		}
		//-----------------------------------------------------------------
		// END OF LOW
		//-----------------------------------------------------------------
	} // sounds function close

	// iffee close
})();
