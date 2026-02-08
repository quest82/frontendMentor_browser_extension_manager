const actionBtn = Array.from(document.querySelectorAll(".extensions__actionBar__state__btn"));
const checkbox = Array.from(document.querySelectorAll("input[type='checkbox']"));
const extensionBox = Array.from(document.querySelectorAll(".extensions__app__type"));
const label = Array.from(document.querySelectorAll(".extensions__app__type__action__toggle"));

// Activity Bar -- Color
actionBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		actionBtn.forEach((btn) => btn.classList.remove("clicked"));
		btn.classList.add("clicked");
	});
});

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
