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
    //this.closeHamburger(this.hamburgerButton);
    this.shadow = this.hamburger.querySelector('.Hamburger__shadow');
    this.closeHamburger(this.shadow);
  }
  // closeHamburger(elem){
  //   if(!elem) return;
  //   elem.addEventListener('click', () => {
  //     //this.hamburgerButton.classList.remove('Hamburger__button--hide');
  //     this.shadow.classList.remove('Hamburger__shadow--show');
  //     this.list.classList.remove('List--show');
  //   })
  // }
  // openHamburger(elem){
  //   if(!elem) return;
  //   elem.addEventListener('click', () => {
  //     //this.hamburgerButton.classList.add('Hamburger__button--hide');
  //     this.shadow.classList.add('Hamburger__shadow--show');
  //     this.list.classList.add('List--show');
  //     Array.from(this.hamburgerIcon).forEach(span => {
  //       console.log(span);
  //       span.classList.toggle('open');
  //     });
  //   })
  // }
  togleHamburger(elem){
    if(!elem) return;
    elem.addEventListener('click', () => {
      this.hamburgerButton.classList.add('Hamburger__button--hide');
      this.shadow.classList.toggle('Hamburger__shadow--show');
      this.list.classList.toggle('List--show');
      Array.from(this.hamburgerIcon).forEach(span => {
        console.log(span);
        span.classList.toggle('open');
      });
    })
  }
}
