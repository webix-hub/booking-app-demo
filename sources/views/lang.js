import {JetView} from "webix-jet";

import "locales/webix/de.js";
import "locales/webix/es.js";
import "locales/webix/ko.js";
import "locales/webix/ru.js";
import "locales/webix/zh.js";

export default class LanguagesPopup extends JetView {
	config(){
		const clang = this.app.getService("locale").getLang();

		return {
			view:"popup",
			width:100,
			body:{
				view:"list",
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
					}
				},
				ready(){
					this.select(clang);
				}
			}
		};
	}
	showPopup(pos){
		this.getRoot().show(pos);
	}
	toggleLanguage(value,country){
		webix.i18n.setLocale(value+"-"+country);
		const langs = this.app.getService("locale");
		const clang = langs.getLang();
		if (value !== clang){
			try{
				webix.storage.local.put("clang",value);
			}
			catch(err){/* if cookies are blocked */}
			langs.setLang(value);
		}
	}
}
