const tabsBtn = document.querySelectorAll(".tabs-btn__item");
const chooseItem = document.querySelectorAll(".choose__item");

tabsBtn.forEach((element) => {
	element.addEventListener("click", open);
});

function open(e) {
	const activeBtn = e.currentTarget;
	const activeTab = activeBtn.dataset.button;
	console.log(activeTab);

	tabsBtn.forEach((element) => {
		element.classList.remove("tabs-btn__item--active");
		activeBtn.classList.add("tabs-btn__item--active");
	});
	chooseItem.forEach((element) => {
		element.classList.remove("choose__item--active");
		// activeTab.classList.add("choose__item--active");
	});
	document.querySelector(`#${activeTab}`).classList.add("choose__item--active");
}
