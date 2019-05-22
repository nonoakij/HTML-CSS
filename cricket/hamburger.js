document.addEventListener('DOMContentLoaded', () => {
  new Hamburger();
}) ;

class Hamburger {
  constructor() {
    this.hamburger;
    this.list;
    this.hamburgerIcon;
    this.hamburgerButton;
    this.shadow;
    this.init();
  }
  init(){
    this.hamburger = document.querySelector(".Hamburger");
    if(!this.hamburger ) return;
    this.list = this.hamburger.querySelector('.List');
    this.hamburgerButton = this.hamburger.querySelector('.Hamburger__button');

    this.toggleHamburger(this.hamburgerButton);
    this.shadow = this.hamburger.querySelector('.Hamburger__shadow');

    this.shadow.addEventListener('click', () =>{
      alert("私は影");
    });
      this.toggleHamburger(this.shadow);
  }
  toggleHamburger(elem){
    if(!elem) return;
    elem.addEventListener('click', () => {
      this.hamburger.classList.toggle('Hamburger--open');
    });
  }
}
