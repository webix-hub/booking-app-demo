import {JetView} from "webix-jet";

export default class Hotels extends JetView {
	config(){
		return {
			rows:[
				{
					view:"form", elementsConfig:{ labelAlign:"right" },
					elements:[
						{
							view:"text", label:"Where",
							placeholder:"Destination e.g. city, hotel name"
						},
						{
							
							view:"datepicker", label:"Check In",
							value:new Date(), format:"%d %M %Y"
						},
						{
							view:"datepicker", label:"Check Out",
							value:webix.Date.add(new Date(),1,"day"),
							format:"%d %M %Y"
						},
						{
							view:"button", type:"form", value:"Search"
						}
					]
				}
			]
		};
	}
}
