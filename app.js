const content = document.getElementById("content");
const speedEl = document.getElementById("speed");
const text = "I am computer engineer student and Front-End developer";
let x = 1;
let speed = 200 / speedEl.value;

writeText();

function writeText() {
	content.innerText = text.slice(0, x);
	x++;

	if (x > text.length) {
		x = 1;
	}
	setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 200 / e.target.value));
