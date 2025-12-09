export class MobileMenu {
  constructor(buttonElement, sidebarElement) {
    this.button = buttonElement;
    this.sidebar = sidebarElement;

    this.isMenuOpen = false;
    this.scrollPosition = 0;

    this.button.addEventListener('click', () => this.toggleMenu());
  }

  lockBody() {
    this.scrollPosition = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  unlockBody() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';

    window.scrollTo(0, this.scrollPosition);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    this.button.classList.toggle('menu-toggle--active');
    this.sidebar.classList.toggle('nav--open');

    if (this.isMenuOpen) {
      this.button.setAttribute('aria-expanded', 'true');
      this.lockBody();
    } else {
      this.button.setAttribute('aria-expanded', 'false');
      this.unlockBody();
    }
  }
}
