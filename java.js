// JavaScript
const menuContainer = document.getElementById('menu-container');
const menu = document.getElementById('menu');

menuContainer.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
