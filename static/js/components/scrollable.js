import {clamp} from '../utils/utils.js';

export class ScrollableElem extends HTMLElement {
    constructor() {
        super();
        this.start = 0;
        this.stop = 0;
        this.horizontal = false;
    }

    connectedCallback() {
        window.addEventListener('scroll', this.update.bind(this));
    }

    disconnectedCallback() {
        document.removeEventListener('scroll', this.update.bind(this));
    }

    attributeChangedCallback(name, oldvalue, newvalue) {
        switch(name) {
            case 'start':
                this.start = isNaN(+newvalue) ? this.start : +newvalue;
                break;
            
            case 'stop':
                this.stop = isNaN(+newvalue) ? this.stop : +newvalue;
                break;

            case 'horizontal':
                this.horizontal = true;
                console.log
                break;
        }
        this.update();
    }

    update() {
        if(this.horizontal) {
            this.style.setProperty('--p', this.computePos(window.scrollX));
        } else {
            this.style.setProperty('--p', this.computePos(window.scrollY));
        }
    }

    computePos(pos) {
        return clamp((pos - this.start)/(this.stop - this.start), 0, 1);
    }

    static get observedAttributes() {return ['start', 'stop', 'horizontal']}
}