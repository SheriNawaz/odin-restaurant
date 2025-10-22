import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'
import './styles.css'

// initial page
home()

// wire navbar buttons (ensure your HTML has these IDs)
const navHome = document.getElementById('nav-home')
const navMenu = document.getElementById('nav-menu')
const navContact = document.getElementById('nav-contact')

navHome?.addEventListener('click', (e) => { e.preventDefault(); home(); })
navMenu?.addEventListener('click', (e) => { e.preventDefault(); menu(); })
navContact?.addEventListener('click', (e) => { e.preventDefault(); contact(); })
