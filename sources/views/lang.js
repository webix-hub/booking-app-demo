import {JetView} from "webix-jet";

export default class LanguagesPopup extends JetView {
	config(){
		return {
			view:"popup",
			width:100,
			body:{
				view:"list",
				localId:"lang",
				scroll:false,
				yCount:4,
				select:true,
				borderless:true,
				template:"#lang#",
				data:[
					{ id:"en", lang:"English" },
					{ id:"kr", lang:"Korean" },
					{ id:"de", lang:"German" },
					{ id:"ru", lang:"Russian" }
				],
				on:{
					onAfterSelect:id => {
						this.toggleLanguage(id);
						this.getRoot().hide();
					}
				}
			}
		};
	}
	showLangs(pos){
		this.getRoot().show(pos);
	}
	toggleLanguage(value){
		const langs = this.app.getService("locale");
        langs.setLang(value);
	}
}
