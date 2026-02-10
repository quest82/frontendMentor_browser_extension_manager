// DOM QUERIES
const body = document.querySelector("body");
const header = document.querySelector(".extensions__header");
const theme_btn = document.querySelector(".extensions__header__theme");
const logo_light = document.querySelector(".extensions__header__img--light");
const logo_dark = document.querySelector(".extensions__header__img--dark");
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
const extension_description = Array.from(
	document.querySelectorAll(".extensions__app__type__info__box__desc"),
);
const remove_btn = Array.from(
	document.querySelectorAll(".extensions__app__type__action__removeBtn"),
);
const label = Array.from(
	document.querySelectorAll(".extensions__app__type__action__toggle"),
);
const slider_box = Array.from(
	document.querySelectorAll(".extensions__app__type__action__toggle__slider"),
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
	addOrRemoveExtensions(inactive_checkbox);
});

action_inactive.addEventListener("click", () => {
	addOrRemoveExtensions(active_checkbox);
});

// Removes app from display when extension state is changed

// Changes Themes

theme_btn.addEventListener("click", () => {
	body.classList.toggle("body--dark");
	extension_app.forEach((extension) => {
		extension.classList.toggle("extensions__app__type--dark");
	});
	extension_description.forEach((desc) => {
		desc.classList.toggle("extensions__app__type__info__box__desc--dark");
	});
	remove_btn.forEach((btn) => {
		btn.classList.toggle("extensions__app__type__action__removeBtn--dark");
	});
	action_btn.forEach((btn) => {
		btn.classList.toggle("extensions__actionBar__state__btn--dark");
	});
	slider_box.forEach((box) => {
		box.classList.toggle("extensions__app__type__action__toggle__slider--dark");
	});
	header.classList.toggle("dark");
	if (header.classList.contains("dark")) {
		logo_light.style.display = "none";
		logo_dark.style.display = "block";
	} else {
		logo_light.style.display = "block";
		logo_dark.style.display = "none";
	}
});

// Helper Functions

function getCheckBoxState() {
	// Saves the state of the checkboxes within two arrays, active and inactive dependent on the state
	all_checkbox.forEach((checkbox) => {
		if (checkbox.checked) {
			active_checkbox.push(checkbox);
		} else {
			inactive_checkbox.push(checkbox);
		}
	});
}

function restoreAllExtensions() {
	// Resets the extensions that get displayed
	extension_app.forEach((app) => {
		app.style.display = "block";
	});
}

function addOrRemoveExtensions(arr) {
	// Adds or removes the extension that is displayed
	getCheckBoxState();
	restoreAllExtensions();

	arr.forEach((active) => {
		extension_app.forEach((app) => {
			if (active.name === app.id) {
				app.style.display = "none";
			}
		});
	});
}

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
