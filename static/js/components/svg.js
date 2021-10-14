import {ScrollableElem} from './scrollable.js';

export {ScrollableSVG, MorphPath};

class ScrollableSVG extends ScrollableElem {
    constructor() {
        super();
        this.path = {};
        /*
            USAGE :

            les ID des balises "MorphPath" à utiliser dans l'ordre
            sous la forme :
                paths="id0 id1 id2 id3"

            les étapes de transitions entre les path
            sous la forme :
                steps=".3 .5"
            cette list est de longueur len(paths)-2 les étapes 0.0 et 1.0
            étant implicites
        */
    }

    connectedCallback() {
        super.connectedCallback();
    }

    // disconnectedCallback() {
    //     super.disconnectedCallback();
    // }

    attributeChangedCallback(name, oldvalue, newvalue) {
        // elt.nodeName == "DIV"
        super.attributeChangedCallback(name, oldvalue, newvalue);

        switch(name) {
            case 'paths':
                let lsPathTag = newvalue.split(' ').map(tagID => {
                    return document.getElementById(tagID);
                }).filter(tag => (tag != null && tag.nodeName == "M-PATH"));
                
                let lsSteps = Object.keys(this.path);

                lsPathTag.slice(0, lsSteps.length);
                lsSteps.slice

                break;

            case 'steps':
                break;
        }
    }

    update() {
        super.update();
    }

    setMorphing(paths, steps) {
        
    }

    static get observedAttributes() {return ['start', 'stop', 'horizontal', 'paths', 'steps']}
}

class MorphPath extends HTMLElement {
    constructor() {
        super();
        this.path = '';
        this.isValid = false;
    }

    connectedCallback() {
        this.path = this.hasAttribute('p') ? this.getAttribute('p') : '';
        this.isValid = this.hasAttribute('p');
    }
}