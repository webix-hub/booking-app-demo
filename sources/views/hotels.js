import {JetView} from "webix-jet";

export default class Hotels extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[
				{
					view:"form", elementsConfig:{ labelAlign:"right" },
					elements:[
						{
							view:"text", label:_("Where"),
							placeholder:_("Destination e.g. city, hotel name")
						},
						{
							
							view:"datepicker", label:_("Check In"),
							value:new Date(), format:"%d %M %Y"
						},
						{
							view:"datepicker", label:_("Check Out"),
							value:webix.Date.add(new Date(),1,"day"),
							format:"%d %M %Y"
						},
						{
							view:"button", type:"form", value:_("Search")
						}
					]
				}
			]
		};
	}
}
