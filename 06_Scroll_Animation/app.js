const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

checkboxes();

function checkboxes() {
	const triggerBottom = (window.innerHeight / 6) * 4;
	console.log(triggerBottom);

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}
