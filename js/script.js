(function() {
	var container = document.querySelector('.container');
	var rainSound = new Audio('audio/rainFalling.wav');
	var thunderSound = new Audio('audio/thunderstorm.wav');

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
				rainSound.play();
				console.dir(rainSound);
			} else if (section.className === 'hail section') {

			} else if (section.className === 'wind section') {

			} else if (section.className === 'thunder section') {

			}


		} else if (buttonClass === 'middle') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			nextSibling.style.border = '2px solid #b2bec3';

			// play sound
			if (section.className === 'rain section') {
				// rainSound.play();
			} else if (section.className === 'hail section') {

			} else if (section.className === 'wind section') {

			} else if (section.className === 'thunder section') {

			}


		} else if (buttonClass === 'low') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			previousSibling.previousElementSibling.style.border = '2px solid #b2bec3';

			// play sound
			if (section.className === 'rain section') {

			} else if (section.className === 'hail section') {

			} else if (section.className === 'wind section') {

			} else if (section.className === 'thunder section') {
				thunderSound.play();
			}

		}
	} // sounds function close

	// iffee close
})();
