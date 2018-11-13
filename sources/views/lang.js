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
					{ id:"en", code:"US", lang:"English" },
					{ id:"ko", code:"KR", lang:"한국어" },
					{ id:"de", code:"DE", lang:"Deutsch" },
					{ id:"zh", code:"CN", lang:"漢語" },
					{ id:"es", code:"ES", lang:"Español" },
					{ id:"ru", code:"RU", lang:"Русский" }
				],
				on:{
					onAfterSelect:id => {
						const code = this.getRoot().getBody().getItem(id).code;
						this.toggleLanguage(id,code);
						this.getRoot().hide();
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
