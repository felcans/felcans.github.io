(function() {
	var backdrop = document.getElementById('backdrop');
	var header = document.getElementById('header')
	document.body.style.minHeight = window.innerHeight * 2 + 'px';
	function position(ev) {
	    var target = 1 - ((document.documentElement.scrollTop || window.scrollY) / (window.innerHeight * 0.5));
	    if (target < 0.1) target = 0.1;
	    else if (target > 1) target = 1;
	   backdrop.style.opacity = target;
	   header.style.opacity = target;
	}
	window.addEventListener('scroll', position);
	position();
})();