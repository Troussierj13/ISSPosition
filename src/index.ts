// here you put all the js you want.
import LocomotiveScroll from 'locomotive-scroll';

const limitScroll = 1200
const minPercentProgress = 15;

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

let centerProgress = document.querySelector('#progress-bar-center');
let containerProgress = document.querySelector('#container-progress');

centerProgress.style.width = minPercentProgress + '%';

scroll.on('scroll', (args) => {
    let perc = args.scroll.y/limitScroll;
    if (centerProgress.style.display != 'none') {
        if (perc > 1 - minPercentProgress/100) {
            containerProgress.style.position = 'static';
            containerProgress.style.display = 'none';
        } else {
            centerProgress.style.width = perc * 100 + minPercentProgress + '%';
        }
    }
});


