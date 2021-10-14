import { ScrollableElem } from "./components/scrollable.js";
import { ScrollableSVG, MorphPath } from "./components/svg.js"

customElements.define('s-scroll', ScrollableElem);

customElements.define('s-svg', ScrollableSVG);
customElements.define('m-path', MorphPath);