

const hamburger = document.querySelector('.header__hamburger')
const menu = document.querySelector('.header__nav')

console.log(hamburger)

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	menu.classList.toggle('active')
})