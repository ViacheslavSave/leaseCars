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
 
const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.menu__list')
// const body= document.querySelector('body')
menuBtn.addEventListener('click',(e)=>{
	
	menuBtn.classList.toggle('menu__btn--active')
	menuList.classList.toggle('menu__list--active')
	document.body.classList.toggle('ovh')
console.log(document.body);
	}
)