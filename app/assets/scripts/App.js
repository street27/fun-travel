import '../styles/styles.css'
import MobleMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

let mobleMenu = new MobleMenu()

if (module.hot) {
	module.hot.accept()
}
