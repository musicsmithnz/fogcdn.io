import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./materialize-navbar-left.html"

export class MaterializeNavbarLeft extends PolymerElement {
	static get observers(){}
	static get template(){
            return template_string
	}
	static get properties() {
	return {
	name: String
	}
	}
}

customElements.define("materialize-navbar-left", MaterializeNavbarLeft)
