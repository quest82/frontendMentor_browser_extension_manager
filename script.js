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
const label = Array.from(
	document.querySelectorAll(".extensions__app__type__action__toggle"),
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
