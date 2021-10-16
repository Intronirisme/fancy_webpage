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
            cette list est de longueur len(paths)-2
            les étapes 0.0 et 1.0 étant implicites
        */
    }

    connectedCallback() {
        super.connectedCallback();
    }

    // disconnectedCallback() {
    //     super.disconnectedCallback();
    // }

    attributeChangedCallback(name, oldvalue, newvalue) {
        super.attributeChangedCallback(name, oldvalue, newvalue);

        switch(name) {
            case 'paths':
            case 'steps':
                this.setMorphing();
                break;
        }
    }

    update() {
        super.update();
    }

    setMorphing() {
        let paths = this.hasAttribute('paths') ? this.getAttribute('paths') : '';
        let steps = this.hasAttribute('steps') ? this.getAttribute('steps') : '';

        //GET VALID MorphPath TAG BY ID
        let lsPathTag = paths.split(' ').map(tagID => {
            return document.getElementById(tagID);
        }).filter(tag => (tag != null && tag.nodeName == "M-PATH"));
        
        let test = lsPathTag[0];
        setTimeout(()=>{console.log(test.path);}, 100);

        //MAKE VALID STEP ARRAY
        let lsSteps = steps.split(' ').filter(step => (!isNaN(+step) && 0.<+step && +step<1.));
        lsSteps = lsSteps.map(step => +step).slice(0, lsPathTag.length-2);
        lsSteps.splice(0, 0, 0.0);
        lsSteps.push(1.0);


        //ENSURE THAT BOTH ARRAY ARE EQUAL NOW
        lsPathTag.slice(0, lsSteps.length);

        //ASSOCIATE THEM
        this.path = {};
        for(let i=0; i<lsSteps.length; i++) {
            this.path[lsSteps[i]] = lsPathTag[i];
        }
        console.log(this.path);
    }

    static get observedAttributes() {return ['start', 'stop', 'horizontal', 'paths', 'steps']}
}

class MorphPath extends HTMLElement {
    constructor() {
        super();
        this.path = 'kek';
    }

    connectedCallback() {
        this.path = this.hasAttribute('p') ? this.getAttribute('p') : '';
    }

    test() {
        console.log(this.path);
    }
}