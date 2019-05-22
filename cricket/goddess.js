document.addEventListener('DOMContentLoaded', () => {
  new Goddess();
});

class Goddess {
  constructor(){
    this.goddess;
    this.goddessImg;
    this.pinkBtn;
    this.i = 0;
    this.init();
  }
  init(){
    this.goddess = document.querySelector('.Goddess')
    this.goddessImg = this.goddess.getElementsByClassName('Goddess__img');
    console.log(this.goddessImg );
    this.pinkBtn = this.goddess.getElementsByClassName('PinkBtn');
    console.log(this.pinkBtn[0]);
    this.openGoddess(this.pinkBtn[0]);
    //console.log(this.pinkBtn[0]);
  }
  openGoddess(elem){
    if(!elem) return;
    elem.addEventListener('click', () => {
      if(this.i < this.goddessImg.length){
        console.log(this.goddessImg.length);
        this.goddessImg[this.i].classList.add('Goddess__img--show');
        this.i++;
      } else {
        alert("もう女神はいません");
        this.pinkBtn[0].insertAdjacentHTML('beforeend','<div class="Goddess"><div class="Goddess__img Goddess__img--show"><img src="img/honda1.jpg" alt="ばっさー"></div></div>');
      }
    })
  }
}

// export default PopUp;
