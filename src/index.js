//импорт данных
import menuItemTpl from './templates/menu-item.hbs';
import menuItemArr from './menu.json';

//----создание верстки по шаблону
function createMenuItem(menuItemArr) {
  return menuItemTpl(menuItemArr);
}

const menuConteiner = document.querySelector('.js-menu');

const menuMarkup = createMenuItem(menuItemArr);

menuConteiner.insertAdjacentHTML('beforeend', menuMarkup);

//----сохранение актуальной темы и положение чекбокса в Local Storage
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');

const body = document.querySelector('body');

checkbox.addEventListener('click', onCheckboxClick);

const savedData = localStorage.getItem('my-data');

const parsedData = JSON.parse(savedData);

function storageChecked() {
  if (parsedData) {
    checkbox.checked = parsedData.checked;
  }
}

storageChecked();

function storageTheme() {
  if (parsedData) {
    body.classList.add(parsedData.theme);
  }
}

storageTheme();

function onCheckboxClick() {
  body.classList.toggle(Theme.DARK);

  if (checkbox.checked) {
    localStorage.setItem(
      'my-data',
      JSON.stringify({ theme: body.classList.value, checked: true }),
    );
  } else if (!checkbox.checked) {
    localStorage.setItem(
      'my-data',
      JSON.stringify({ theme: body.classList.value, checked: false }),
    );
  }
}
