import * as components from "./components/card/card.js"


import { data  } from "./data.js";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((user)=>{
            this.shadowRoot.innerHTML += `
                <my-button></my-button>
                <my-card name="${user.name}" species="${user.species}" gender="${user.gender}" house="${user.house}" yearofbirth="${user.yearOfBirth}"></my-card>
                
            `
        })
    }
}

customElements.define("app-container", AppContainer)