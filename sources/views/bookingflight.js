import {JetView} from "webix-jet";
import {cities} from "models/cities";

export default class BookingFlight extends JetView {
	config(){
		return {
			rows:[
				{
					view:"form", elements:[
						{
							view:"radio", labelWidth:120, localId:"radio1", value:1,
							options:[
								{ id:1, value:"One-Way"},
								{ id:2, value:"Return"}
							],
							label:"Trip",
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
							view:"combo", labelWidth:120, label:"From", 
							suggest:cities, placeholder:"Select departure point"
						},
						{
							view:"combo", labelWidth:120, label:"To",
							suggest:cities, placeholder:"Select destination"
						},
						{
							view:"datepicker", labelWidth:120, label:"Departure Date",
							value:new Date(), format:"%d  %M %Y"
						},
						{
							view:"datepicker", labelWidth:120, localId:"datepicker2",
							label:"Return Date", value:new Date(), format:"%d  %M %Y",
							hidden:true
						},
						{
							view:"checkbox", labelWidth:120, localId:"flexible",
							value:0, label:"Flexible dates"
						},
						{
							cols:[
								{ view:"label", value:"Passengers", labelWidth:130},
								{ view:"counter", labelPosition:"top", label:"Adults", value:1, min:1},
								{ view:"counter", labelPosition:"top", label:"Children"}
							]
						}
					]
				},
				{
					padding:20, css:"blue_row",
					rows:[
						{
							view:"button", type:"form", value:"Book Now",
							align:"center", css:"blue_row", height:50
						}
					]
				}
			],
			elementsConfig:{
				labelWidth:100, labelAlign:"left"
			}
		};
	}
}
	