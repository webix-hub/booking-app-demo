import {JetView} from "webix-jet";
import {cities} from "models/cities";

export default class BookingFlight extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			view:"form",
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
								this.$$("datepicker2").show();
							else
								this.$$("datepicker2").hide();
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
					value:new Date(), format:"%d %M %Y"
				},
				{
					view:"datepicker", localId:"datepicker2",
					label:_("Return"), value:new Date(), format:"%d %M %Y",
					hidden:true
				},
				{
					view:"counter", label:_("Adults"), value:1, min:1
				},
				{ view:"counter", label:_("Children") },
				{
					view:"button", type:"form", value:_("Book Now")
				}
			]
		};
	}
}
	