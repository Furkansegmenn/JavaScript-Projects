const loadText = document.querySelector(".load-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(bluring, 40);
function bluring() {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
