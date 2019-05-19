document.addEventListener('DOMContentLoaded', () => {
  new Tab();
}) ;

class Tab {
  constructor() {
    this.tabBoxes = [];
    this.menus = [];
    this.contents = [];
    this.something();
  }
  something() {
    this.tabBoxes = Array.from(document.getElementsByClassName('Tab'));
    this.tabBoxes.forEach((tabBox, index) => {
      this.menus.push(Array.from(tabBox.getElementsByClassName('TabHead__item')));
      this.contents.push(Array.from(tabBox.getElementsByClassName('TabContents')));
      this.menus[index].forEach( menu => {
        menu.addEventListener("click", event => {
          this.showpage(event.target, index);
        });
      });
    });
  }
  showpage(obj, i) {
    let num = this.getArrayIndex(this.menus[i], obj);
    for(let j = 0; j < this.contents.length; j++) {
      if(j === num) {
        this.menus[i][j].classList.add('TabHead__item--selected');
        this.contents[i][j].classList.add('TabContents--selected');
      } else {
        this.menus[i][j].classList.remove('TabHead__item--selected');
        this.contents[i][j].classList.remove('TabContents--selected');
      }
    }
  }
  getArrayIndex(lists, target){
    return lists.findIndex( list => list === target);
  }
}
// export default Tab;
