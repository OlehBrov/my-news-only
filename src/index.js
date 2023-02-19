import myFunc from './js/onLigthButtonClick';
import onResize from './js/resize';
import getNews from './js/filter';
const screen = {
  mobile : window.matchMedia( '(min-width: 480px)' ),
  tablet: window.matchMedia('(min-width: 768px)'),
  desktop: window.matchMedia('(min-width: 1200px)'),
};

for (let [scr, mq] of Object.entries(screen)) {
  if (mq) mq.addEventListener('change', mqHandler);
}

function mqHandler() {
  let size = null;
  let toRemove = [];
  for (let [scr, mq] of Object.entries(screen)) {
    if (!mq || mq.matches) {
      size = scr;
    } else if (scr !== size) toRemove.push(scr);
  }

  onResize(size, toRemove);
  
}

