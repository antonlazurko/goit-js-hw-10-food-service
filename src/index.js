import menuItemTpl from './templates/menu-item.hbs'
import menuItemArr from './menu.json'
function createMenuItem(menuItemArr){
    return menuItemTpl(menuItemArr);

}
const menuConteiner = document.querySelector('.js-menu')
const menuMarkup = createMenuItem(menuItemArr);
menuConteiner.insertAdjacentHTML("beforeend", menuMarkup)

