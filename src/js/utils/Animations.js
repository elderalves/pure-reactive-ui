import { TweenLite, TimelineMax } from "gsap";

class Animations {
    constructor() {
        this.start = new TimelineMax();

        let posts = document.querySelectorAll('.post-item');

        this.start.add( TweenLite.from( posts[0], 1, {opacity: 0, top: 100, ease: Back.easeOut.config(1.7)}));
        this.start.add( TweenLite.from( posts[1], .7, {opacity: 0, top: 100, ease: Back.easeOut.config(1.7)}));
        this.start.add( TweenLite.from( posts[2], .7, {opacity: 0, top: 100, ease: Back.easeOut.config(1.7)}));

        this.start.add( TweenLite.from( posts[0].querySelector('.btn-edit'), .5, {
            opacity: 0, scale: 1.5
        }));
        this.start.add( TweenLite.from( posts[1].querySelector('.btn-edit'), .5, {
            opacity: 0, scale: 1.5
        }));
        this.start.add( TweenLite.from( posts[2].querySelector('.btn-edit'), .5, {
            opacity: 0, scale: 1.5
        }));
    }
}

export default Animations;