import {JetView} from "webix-jet";

export default class HotelsView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		const date_format = "%d %M %Y";
		return {
			rows:[
				{
					view:"form", elementsConfig:{ labelAlign:"right", labelWidth:100 },
					elements:[
						{
							view:"text", label:_("Where"),
							placeholder:_("Destination e.g. city, hotel name")
						},
						{
							
							view:"datepicker", label:_("Check In"),
							value:new Date(), format:date_format
						},
						{
							view:"datepicker", label:_("Check Out"),
							value:webix.Date.add(new Date(),1,"day"),
							format:date_format
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
