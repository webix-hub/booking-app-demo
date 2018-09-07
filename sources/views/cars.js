import {JetView} from "webix-jet";

export default class CarsView extends JetView {
	config(){

		const _ = this.app.getService("locale")._;

		const date_format = "%d %M %Y";

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
					view:"form", borderless:true,
					elementsConfig:{ labelAlign:"right", labelWidth:115 },
					elements:[
						{
							view:"text", label:_("Where"),
							placeholder:_("Location e.g. country, city")
						},
						{
							cols:[
								{
									view:"datepicker", label:_("Pick up car"),
									value:new Date(), format:date_format
								},
								{ width:5 },
								{
									view:"richselect",
									value:"09", options:hours, width:60
								},
								{
									view:"richselect",
									value:"00", options:minutes, width:60
								}
							]
						},
						{
							cols:[
								{
									view:"datepicker", label:_("Return car"),
									value:new Date(), format:date_format
								},
								{ width:5 },
								{
									view:"richselect",
									value:"09", options:hours, width:60
								},
								{
									view:"richselect",
									value:"00", options:minutes, width:60
								}
							]
						},
						{ view:"button", type:"form", value:_("Search") }
					]
				}
			]
		};
	}
}
