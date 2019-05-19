document.addEventListener('DOMContentLoaded', () => {
  new Hamburger();
}) ;

class Hamburger {
  constructor() {
    this.hamburger;
    this.HamburgerButton;
    this.list;
    this.init();
  }
  init(){
    this.hamburger = document.querySelector(".Hamburger");
    if(!this.hamburger ) return;

    this.hamburgerButton = this.hamburger.getElementsByClassName('Hamburger__button');
    this.openHamburger(this.hamburgerButton[0]);
    this.list = this.hamburger.getElementsByClassName('List');
    this.closeHamburger(this.list[0]);
  }
  closeHamburger(elem){
    if(!elem) return;
    //console.log(elem);
    elem.addEventListener('click', event => {
      if(event.target.tagName != 'DIV'){
        return;
      }
      this.hamburgerButton[0].classList.remove('Hamburger__button--hide');
      elem.classList.remove('List--show');
      event.stopPropagation();
      // console.log(event.target.tagName );
    })
  }
  openHamburger(elem){
    if(!elem) return;
    elem.addEventListener('click', () => {
      elem.classList.add('Hamburger__button--hide');
      this.list[0].classList.add('List--show');
    })
  }
}
