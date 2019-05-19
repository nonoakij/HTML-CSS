document.addEventListener('DOMContentLoaded', () => {
  new PopUp();
});

class PopUp {
  constructor(){
    this.popup;
    this.glayBg;
    this.closeBtn;
    this.header;
    this.inner;
    this.init();
  }
  init(){
    this.popup = document.querySelector(".PopUp");
    if(!this.popup) return;
    //console.log(this.popup);
    this.header = document.getElementsByClassName('Header__menu');
    this.openPopUp(this.header[2]);

    this.glayBg = document.getElementsByClassName('PopUp');

    //console.log(this.glayBg);
    this.closeBtn = this.popup.getElementsByClassName('PopUp__closeBtn');
    //console.log(this.closeBtn);
    this.closePopUp(this.glayBg[0]);
    this.closePopUp(this.closeBtn[0]);
    this.inner = this.popup.getElementsByClassName('PopUp__inner');
    this.stop(this.inner[0]);
  }
  closePopUp(elem){
    if(!elem) return;
    //console.log(elem);
    elem.addEventListener('click', () => {
      //console.log(event.target.tagName );
      this.glayBg[0].classList.remove('PopUp--show');
      //toggle っていうのもあるらしいがハブリングのせいで使えない＞＜。。
    })
  }
  openPopUp(elem){
    if(!elem) return;
    elem.addEventListener('click', () => {
      this.glayBg[0].classList.add('PopUp--show');;
    })
  }
  stop(elem) {
    elem.addEventListener('click', () =>{
      event.stopPropagation();
      //非推奨らしい
    })
  }
}

// export default PopUp;
