import {JetView} from "webix-jet";
import {getCities} from "models/cities";

export default class BookingFlightView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		const cities = getCities();
		const date_format = "%d %M %Y";
		return {
			view:"form",
			borderless:true,
			elementsConfig:{ labelWidth:100, labelAlign:"right" },
			elements:[
				{
					view:"radio",
					label:_("Trip"),
					value:1,
					options:[
						{ id:1, value:_("One-Way") },
						{ id:2, value:_("Return") }
					],
					on:{
						onChange:newv => {
							if (newv == 2)
								this.$$("return:date").show();
							else
								this.$$("return:date").hide();
						}
					}
				},
				{
					view:"combo", label:_("From"), 
					suggest:cities, placeholder:_("Select departure point")
				},
				{
					view:"combo", label:_("To"),
					suggest:cities, placeholder:_("Select destination")
				},
				{
					view:"datepicker", label:_("Departure"),
					value:new Date(), format:date_format
				},
				{
					view:"datepicker", localId:"return:date",
					label:_("Return"), value:new Date(), format:date_format,
					hidden:true
				},
				{ view:"counter", label:_("Adults"), value:1, min:1 },
				{ view:"counter", label:_("Children") },
				{
					view:"button", type:"form", value:_("Book Now")
				}
			]
		};
	}
}
	