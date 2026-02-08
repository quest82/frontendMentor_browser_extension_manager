// DOM QUERIES
const action_btn = Array.from(
	document.querySelectorAll(".extensions__actionBar__state__btn"),
);
const action_all = document.querySelector(".all");
const action_active = document.querySelector(".active");
const action_inactive = document.querySelector(".inactive");
const all_checkbox = Array.from(
	document.querySelectorAll("input[type='checkbox']"),
);
const extension_app = Array.from(
	document.querySelectorAll(".extensions__app__type"),
);

let active_checkbox = [];
let inactive_checkbox = [];

// Changes the color of action button upon clicking
action_btn.forEach((btn) => {
	btn.addEventListener("click", () => {
		action_btn.forEach((btn) => btn.classList.remove("clicked"));
		btn.classList.add("clicked");
	});
});

// Changes app displayed based on action clicked

action_all.addEventListener("click", () => {
	restoreAllExtensions();
});

action_active.addEventListener("click", () => {
	getCheckBoxState();
	restoreAllExtensions();

	inactive_checkbox.forEach((active) => {
		extension_app.forEach((app) => {
			if (active.name === app.id) {
				app.style.display = "none";
			}
		});
	});
});

action_inactive.addEventListener("click", () => {
	getCheckBoxState();
	restoreAllExtensions();

	active_checkbox.forEach((active) => {
		extension_app.forEach((app) => {
			if (active.name === app.id) {
				app.style.display = "none";
			}
		});
	});
});

function getCheckBoxState() {
	all_checkbox.forEach((checkbox) => {
		if (checkbox.checked) {
			active_checkbox.push(checkbox);
		} else {
			inactive_checkbox.push(checkbox);
		}
	});
}

function restoreAllExtensions() {
	extension_app.forEach((app) => {
		app.style.display = "block";
	});
}

// const extensionBox = Array.from(document.querySelectorAll(".extensions__app__type"));
// const label = Array.from(document.querySelectorAll(".extensions__app__type__action__toggle"));

// Activity Bar

// function toggleControl() {
// 	checkbox.forEach((checkbox) => {
// 		let inputId = checkbox.id;
// 		extensionBox.forEach((extension) => {
// 			if (!checkbox.checked) {
// 				if (inputId && extension.classList.contains(inputId)) {
// 					extension.remove();
// 				}
// 			}
// 		});
// 	});
// }
