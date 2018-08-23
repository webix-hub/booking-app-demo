import {JetView} from "webix-jet";

export default class Cars extends JetView {
	config(){

		const _ = this.app.getService("locale")._;
		
		let hours = [];
		for (let i = 0; i < 24; i++){
			hours.push(i < 10 ? ("0" + i) : "" + i);
		}
		let minutes = [];
		for (let c = 0; c < 60; c += 15){
			minutes.push( c < 10 ? ("0" + c) : "" + c);
		}
		
		return {
			rows:[
				{
					view:"form", elementsConfig:{ labelAlign:"right", labelWidth:85 },
					elements:[
						{
							view:"text", label:_("Where"),
							placeholder:_("Location e.g. country, city")
						},
						{
							cols:[
								{
									view:"datepicker", label:_("Pick up car"),
									value:new Date(), format:"%d %M %Y"
								},
								{ width:5 },
								{
									view:"richselect",
									value:"09", options:hours, width:70
								},
								{
									view:"richselect",
									value:"00", options:minutes, width:70
								}
							]
						},
						{
							cols:[
								{
									view:"datepicker", label:_("Return car"),
									value:new Date(), format:"%d %M %Y"
								},
								{ width:5 },
								{
									view:"richselect",
									value:"09", options:hours, width:70
								},
								{
									view:"richselect",
									value:"00", options:minutes, width:70
								}
							]
						},
						{
							view:"button", type:"form",
							value:_("Search")
						}
					]
				}
			]
		};
	}
}
