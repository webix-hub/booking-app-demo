import {JetView} from "webix-jet";
import {cities} from "models/cities";

export default class BookingFlight extends JetView {
	config(){
		return {
			view:"form", elementsConfig:{ labelWidth:120, labelAlign:"right" },
			elements:[
				{
					view:"radio",
					label:"Trip",
					value:1,
					options:[
						{ id:1, value:"One-Way" },
						{ id:2, value:"Return" }
					],
					on:{
						onChange:newv => {
							if (newv === 2)
								this.$$("datepicker2").show();
							else
								this.$$("datepicker2").hide();
						}
					}
				},
				{
					view:"combo", label:"From", 
					suggest:cities, placeholder:"Select departure point"
				},
				{
					view:"combo", label:"To",
					suggest:cities, placeholder:"Select destination"
				},
				{
					view:"datepicker", label:"Departure Date",
					value:new Date(), format:"%d  %M %Y"
				},
				{
					view:"datepicker", localId:"datepicker2",
					label:"Return Date", value:new Date(), format:"%d  %M %Y",
					hidden:true
				},
				{
					view:"counter",
					label:"Adults", value:1, min:1
				},
				{ view:"counter", label:"Children" },
				{
					view:"button", type:"form", value:"Book Now"		
				}
			]
		};
	}
}
	