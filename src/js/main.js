import '../styles/main.scss';
import { MobileMenu } from '../js/mobile-menu.js';
import { CustomSelect } from '../js/custom-selects.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Sidebar
  const menuButton = document.querySelector('#menu-toggle');
  const sidebarMenu = document.querySelector('#main-navigation');
  requestAnimationFrame(() => {
    sidebarMenu.classList.add('nav--ready');
  });

  new MobileMenu(menuButton, sidebarMenu);

  // Custom Selects
  const selects = document.querySelectorAll('[data-select]');
  new CustomSelect(selects);

  // Upload button behavior
  const uploadBtn = document.querySelector('#upload-btn');
  const fileInput = document.querySelector('#file-input');
  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });

  // Progress bar behavior
  const range = document.querySelector('#progress-range');
  const valueLabel = document.querySelector('#progress-value');

  range.addEventListener('input', () => {
    valueLabel.textContent = `${range.value}%`;
  });
});
