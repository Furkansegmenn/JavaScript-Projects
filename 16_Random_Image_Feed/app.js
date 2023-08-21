//Aynı fotoğrafların gelmesini nasıl engelleriz ?

const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";

const row = 9;

for (let i = 0; i < row; i++) {
	const img = document.createElement("img");
	img.src = `${unsplashURL} ${getRandomSize()}`;
	container.appendChild(img);
}

function getRandomNNumber() {
	return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
	return `${getRandomNNumber()}x${getRandomNNumber()}`;
}
