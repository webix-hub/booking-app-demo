import {JetView} from "webix-jet";

export default class LanguagesPopup extends JetView {
	config(){
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
					const clang = webix.storage.local.get("clang");
					this.select(clang||"en");
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
			webix.storage.local.put("clang",value);
			langs.setLang(value);
		}
	}
}
