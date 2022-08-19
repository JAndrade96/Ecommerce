import { preloader } from './componets/preloader.js'
import { theme } from './componets/theme.js'
import { nav } from './componets/nav.js'
import { navscroll } from './componets/navscroll.js'
import { cart, addItem } from './componets/cart.js'
import { products, filterControl } from './componets/products.js'


window.addEventListener('load', ()=>{
    preloader()
})

document.addEventListener('DOMContentLoaded', () => {
    theme()
    nav()
    navscroll()
    cart()
    products()
    filterControl()
})