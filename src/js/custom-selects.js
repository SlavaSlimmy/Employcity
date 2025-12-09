export class CustomSelect {
  constructor(selectElements) {
    this.instances = [];

    selectElements.forEach((el) => {
      this.instances.push(new CustomSelectInstance(el));
    });
  }
}

class CustomSelectInstance {
  constructor(root) {
    this.root = root;
    this.button = root.querySelector('.custom-select__trigger');
    this.list = root.querySelector('.custom-select__options');
    this.options = Array.from(root.querySelectorAll('[role=option]'));
    this.native = root.querySelector('.custom-select__native');

    this.open = false;
    this.activeIndex = -1;

    this.init();
  }

  init() {
    this.button.addEventListener('click', () => this.toggle());
    this.options.forEach((opt, i) => opt.addEventListener('click', () => this.selectOption(i)));

    this.list.addEventListener('keydown', (e) => this.onKeyDown(e));

    document.addEventListener('click', (e) => {
      if (!this.root.contains(e.target)) {
        this.close();
      }
    });
  }

  toggle() {
    this.open ? this.close() : this.openList();
  }

  openList() {
    this.list.hidden = false;
    this.button.setAttribute('aria-expanded', 'true');
    this.list.focus();
    this.open = true;
  }

  close() {
    this.list.hidden = true;
    this.button.setAttribute('aria-expanded', 'false');
    this.activeIndex = -1;
    this.open = false;
  }

  setActive(i) {
    if (i < 0 || i >= this.options.length) {
      return;
    }

    this.options.forEach((o) => o.removeAttribute('aria-selected'));
    this.options[i].setAttribute('aria-selected', 'true');
    this.list.setAttribute('aria-activedescendant', this.options[i].id);
    this.activeIndex = i;
  }

  selectOption(i) {
    const opt = this.options[i];
    if (!opt) {
      return;
    }

    this.button.querySelector('span').textContent = opt.textContent;
    this.native.value = opt.dataset.value;
    this.close();
    this.button.focus();
  }

  onKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.setActive(this.activeIndex + 1);
        break;

      case 'ArrowUp':
        e.preventDefault();
        this.setActive(this.activeIndex - 1);
        break;

      case 'Enter':
        if (this.activeIndex >= 0) {
          this.selectOption(this.activeIndex);
        }
        break;

      case 'Escape':
        this.close();
        this.button.focus();
        break;
    }
  }
}
