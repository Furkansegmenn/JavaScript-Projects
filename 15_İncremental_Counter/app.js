const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";

	const updateCounter = () => {
		const target = Number(counter.getAttribute("data-target"));

		const c = +counter.innerText;

		const increament = target / 300;

		if (c < target) {
			counter.innerText = `${Math.ceil(c + increament)}`;
			setTimeout(updateCounter, 3);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});
