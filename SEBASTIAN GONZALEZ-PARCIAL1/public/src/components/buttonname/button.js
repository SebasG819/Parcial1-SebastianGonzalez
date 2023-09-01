class ButtonChange extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    mount(){
        this.render();
        this.addListeners();
    }
     
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.mount();

    }


    static get observedAttributes(){
        return"alternate_names"
    }

    connectedCallback(){
        this.mount();
    }

    addListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click", this.onButtonClicked);
    }

    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <h1>${this.alternate_names}</h1>
        <button> Change name</button>
        </section>
        `
    }
    onButtonClicked(){

    }
}

customElements.define("my-button", ButtonChange)
export default ButtonChange