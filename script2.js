window.addEventListener("load", function() {
    var blink = document.getElementById('blink');
    setInterval(function() {
        blink.style.display = (blink.style.display == 'none' ? '' : 'none');
    }, 650);
}, false);

	var hidden = true;
	var target = document.getElementById('collapse');
	var btn = document.getElementById('btn');

function collapse(){
	if(hidden){
		target.style.height = 'auto';
		btn.innerHTML = 'View Less(spoilers)';
			hidden = false;
	}
	else {
		target.style.height = '0px';
		btn.innerHTML = 'View More(spoilers)';
		hidden = true;
	}
}