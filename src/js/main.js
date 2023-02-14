const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.hamburger')
const navItems = document.querySelectorAll('.nav__item')
const navLogo = document.querySelector('.nav__logo')
const footerYear = document.querySelector('.footer__year')

window.addEventListener('load', function () {
	const arrowBtn = document.querySelector('.button')

	window.addEventListener('scroll', function () {
		if (window.scrollY >= 230) {
			arrowBtn.style.display = 'block'
		} else {
			arrowBtn.style.display = 'none'
		}
	})
})

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	if (navBtn.classList.contains('is-active')) {
		nav.classList.add('nav--active')
		navItems.forEach(x => x.classList.add('nav__item--active'))
		navLogo.style.display = 'none'
	} else {
		nav.classList.remove('nav--active')
		navItems.forEach(x => x.classList.remove('nav__item--active'))
		navLogo.removeAttribute('style')
	}
}

const hideNav = () => {
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.forEach(x => x.classList.remove('nav__item--active'))
			nav.classList.remove('nav--active')
			navBtn.classList.remove('is-active')
			navLogo.style.display = 'block'
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}



navBtn.addEventListener('click', handleNav)
handleCurrentYear()
hideNav()
