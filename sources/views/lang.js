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
				yCount:6,
				select:true,
				borderless:true,
				template:"#lang#",
				data:[
					{ id:"en", lang:"English" },
					{ id:"ko", lang:"한국어" },
					{ id:"de", lang:"Deutsch" },
					{ id:"zh", lang:"漢語" },
					{ id:"es", lang:"Español" },
					{ id:"ru", lang:"Русский" }
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
