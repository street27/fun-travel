import '../styles/styles.css'
import MobleMenu from './modules/MobileMenu'

let mobleMenu = new MobleMenu()

if (module.hot) {
	module.hot.accept()
}
