document.addEventListener('DOMContentLoaded', () => {
  new PopUp();
});

class PopUp {
  constructor(){
    this.popUp;
    this.header;
    this.shadow;
    this.closeBtn;
    this.init();
  }
  init(){
    this.popUp = document.querySelector('.PopUp');
    //console.log(this.popUp.classList);
    this.header = document.getElementsByClassName('Header__menu');
    this.openPopUp(this.header[2]);
    //console.log(this.header[2]);
    this.shadow = this.popUp.querySelector('.PopUp__shadow');
    this.togglePopUp(this.shadow);
    //console.log(this.shadow);
    this.closeBtn = this.popUp.querySelector('.PopUp__closeBtn');
    this.togglePopUp(this.closeBtn);
    //console.log(this.closeBtn);
  }
  togglePopUp(elem){
    if(!elem) return;
    console.log(elem);
    elem.addEventListener('click', () => {
      this.popUp.classList.toggle('PopUp--show');
    })
  }
  openPopUp(elem){
    if(!elem) return;
    elem.addEventListener('click', () => {
      this.popUp.classList.add('PopUp--show');;
    })
  }
}

// export default PopUp;
