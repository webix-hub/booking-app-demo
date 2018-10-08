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
					options:{
						data:cities,
						on:{
							onShow(){
								this.getList().filter(obj => obj.id != 3);
								let to = webix.$$("to:combo").getValue();
								if (to == 2)
									this.getList().filter(obj => obj.id == 1);
								else if (to == 10)
									this.getList().filter(obj => obj.id == 2);
								else if (to == 3)
									this.getList().filter(obj => obj.id == 4);
								else if (to == 7)
									this.getList().filter(obj => obj.id == 5);
								else if (to == 9)
									this.getList().filter(obj => obj.id == 6);
								else if (to == 3 || to == 8)
									this.getList().filter(obj => obj.id == 7);
								else if (to == 5)
									this.getList().filter(obj => obj.id == 8);
								else if (to == 4)
									this.getList().filter(obj => obj.id == 9);
								else if (to == 3)
									this.getList().filter(obj => obj.id == 10);
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
								if (from == 1)
									this.getList().filter(obj => obj.id == 2);
								else if (from == 2)
									this.getList().filter(obj => obj.id == 10);
								else if (from == 4)
									this.getList().filter(obj => obj.id == 3);
								else if (from == 5)
									this.getList().filter(obj => obj.id == 7);
								else if (from == 6)
									this.getList().filter(obj => obj.id == 9);
								else if (from == 7)
									this.getList().filter(obj => obj.id == 3 || obj.id == 8);
								else if (from == 8)
									this.getList().filter(obj => obj.id == 5);
								else if (from == 9)
									this.getList().filter(obj => obj.id == 4);
								else if (from == 10)
									this.getList().filter(obj => obj.id == 3);
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
						if (data.departure_point || data.destination || data.departure_date){
							const from = data.departure_point ? cities[data.departure_point].value : "";
							const to = data.destination ? cities[data.destination].value : "";
							this.$scope.app.callEvent("search:flight",[from,to,data.departure_date]);
						}
						else
							this.$scope.app.callEvent("search:flight");
					}
				}
			]
		};
	}
}
	