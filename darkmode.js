let body = document.body;
let info = document.getElementById("info");
let dark = document.getElementById("dark");
let rainbow = document.getElementById("rainbow");
let navbar = document.getElementById("navbar");

const darkLimit = 5;
let darkCounter = 0;
dark.textContent = "DARK MODE";

function darkMode() {
	info.style.display = "block";

	if (darkCounter == darkLimit) {
		info.textContent = "Habis COY, RENDER untuk RELOAD";
		dark.style.display = "none";
		return;
	}

	if (dark.textContent == "DARK MODE") {
		dark.textContent = "LIGHT MODE";
	} else {
		dark.textContent = "DARK MODE";
	}

	darkCounter += 1;
	let darkRemainingLeft = darkLimit - darkCounter;
	info.textContent = `Dipakai: ${darkCounter}x, tersisa: ${darkRemainingLeft}`;

	body.classList.toggle("dark");
}

let rainbowCounter = 0;
rainbow.textContent = "INFINITE MODE ON";

function rainbowMode() {
	info.style.display = "none";

	if (rainbow.textContent == "INFINITE MODE ON") {
		rainbow.textContent = "INFINITE MODE OFF";
	} else {
		rainbow.textContent = "INFINITE MODE ON";
	}

	rainbowCounter += 1;

	body.classList.toggle("rainbow");
}

function reRender() {
	location.reload();
}
