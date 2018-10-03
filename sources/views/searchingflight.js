import {JetView} from "webix-jet";
import {getCities} from "models/cities";

export default class SearchingFlightView extends JetView {
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
					name:"trip_type",
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
					view:"combo",
					id:"dprt:combo",
					name:"departure_point",
					label:_("From"), 
					placeholder:_("Select departure point"),
					on:{
						onChange:newv => {
							if (!newv)
								this.app.callEvent("search:flight");
						}
					},
					options:{
						data:cities,
						on:{
							onShow(){
								let to = webix.$$("to:combo").getValue();
								if (to){
									this.getList().filter(obj => obj.id !== to);
								}
							}
						}
					}
				},
				{
					view:"combo",
					id:"to:combo",
					name:"destination",
					label:_("To"),
					placeholder:_("Select destination"),
					options:{
						data:cities,
						on:{
							onShow(){
								let from = webix.$$("dprt:combo").getValue();
								if (from){
									this.getList().filter(obj => obj.id !== from);
								}
							}
						}
					}
				},
				{
					view:"datepicker",
					localId:"depart:date",
					name:"departure_date",
					label:_("Departure"),
					value:new Date(),
					format:date_format
				},
				{
					view:"datepicker",
					localId:"return:date",
					name:"return_date",
					label:_("Return"),
					value:new Date(),
					format:date_format,
					hidden:true
				},
				{ view:"counter", name:"adults", label:_("Adults"), value:1, min:1 },
				{ view:"counter", name:"children", label:_("Children") },
				{
					view:"button",
					type:"form",
					value:_("Search Now"),
					click:function(){
						const data = this.getFormView().getValues();
						if (data.departure_point && data.destination){
							const from = cities[data.departure_point].value;
							const to = cities[data.destination].value;
							this.$scope.app.callEvent("search:flight",[from,to,data.departure_date]);
						}
					}
				}
			]
		};
	}
}
	