(function() {
	var container = document.querySelector('.container');

	container.addEventListener('click', sounds, false);

	function sounds(e) {
		var buttonVar = e.target.parentNode;
		var buttonClass = buttonVar.className;
		var nextSibling = buttonVar.nextElementSibling;
		var previousSibling = buttonVar.previousElementSibling;

		if (buttonClass === 'strong') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			nextSibling.style.border = '2px solid #b2bec3';
			nextSibling.nextElementSibling.style.border = '2px solid #b2bec3';
		} else if (buttonClass === 'middle') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			nextSibling.style.border = '2px solid #b2bec3';
		} else if (buttonClass === 'low') {
			buttonVar.style.border = '2px solid #05c46b';
			// reset siblings
			previousSibling.style.border = '2px solid #b2bec3';
			previousSibling.previousElementSibling.style.border = '2px solid #b2bec3';
		}
	} // sounds function close

	// iffee close
})();
