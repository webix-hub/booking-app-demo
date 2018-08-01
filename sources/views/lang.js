import {JetView} from "webix-jet";

export default class LanguagesPopup extends JetView {
	config(){
		return {
			view:"popup",
			head:false,
			width: 100,
			body:{
				view:"list",
				scroll:false,
				yCount:4,
				select:true,
				borderless:true,
				template:"#lang#",
				data:[
					{ id:1, lang:"English" },
					{ id:2, lang:"French" },
					{ id:3, lang:"German" },
					{ id:4, lang:"Russian" }
				],
				on:{
					onAfterSelect:() => this.getRoot().hide()
				}
			}
		};
	}
}
