import '../styles/main.scss';
import { MobileMenu } from '../js/mobile-menu.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Sidebar
  const menuButton = document.querySelector('#menu-toggle');
  const sidebarMenu = document.querySelector('#main-navigation');
  requestAnimationFrame(() => {
    sidebarMenu.classList.add('nav--ready');
  });

  new MobileMenu(menuButton, sidebarMenu);
});
