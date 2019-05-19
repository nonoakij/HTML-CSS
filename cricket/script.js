window.onload = () => {
  tab.init();
}

const tab = {
  init: () => {
    const tabBox = document.getElementsByClassName('Tab');

    let menu = [];
    Array.from(tabBox).forEach( tab => {
      menu.push(tab.getElementsByClassName('TabHead__item'));
    });
    console.log(menu);

    for(let i = 0; tabBox.length > i; i++){
      let tabContents0 = tabBox[i].getElementsByClassName('TabContents');
      Array.from(menu[i]).forEach( item => {
        item.addEventListener("click", event => {
          tab.showpage(event.target, menu[i], Array.from(tabContents0));
          return false;
        })
      });
    }
  },

  showpage: (obj, itemes, tabContents) => {
    let num;
    Array.from(itemes).forEach( item => {
      num = Array.from(itemes).findIndex( item => {
        return item === obj;
      });
    })

    for(let i = 0; i < tabContents.length; i++) {
      if(i === num) {
        itemes[i].classList.add('TabHead__item--selected');
        tabContents[i].classList.add('TabContents--selected');
      } else {
        itemes[i].classList.remove('TabHead__item--selected');
        tabContents[i].classList.remove('TabContents--selected');
      }
    }
  }
}
