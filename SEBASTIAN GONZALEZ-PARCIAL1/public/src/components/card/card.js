
class Card extends HTMLElement {

    static get observedAttributes(){
        return ["name", "species", "gender", "house", "yearofbirth"]

    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        
        <section>
        <link rel="stylesheet" href="./src/components/card/card.css">
        <h1>${this.name}</h1>
        <h2>${this.species}</h2>
        <h2>${this.gender}</h2>
        <h2>${this.house}</h2>
        <h2>${this.yearofbirth}</h2>
        </section>
        `
    }
}


customElements.define("my-card", Card);
export default Card;