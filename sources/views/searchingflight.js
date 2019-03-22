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
					localId:"dprt:combo",
					name:"departure_point",
					label:_("From"),
					placeholder:_("Select departure point"),
					options:{
						data:cities,
						on:{
							onShow:() => this.filterDepartures()
						}
					}
				},
				{
					view:"combo",
					localId:"to:combo",
					name:"destination",
					label:_("To"),
					placeholder:_("Select destination"),
					options:{
						data:cities,
						on:{
							onShow:() => this.filterDestinations()
						}
					}
				},
				{
					view:"datepicker",
					localId:"depart:date",
					name:"departure_date",
					label:_("Departure"),
					value:webix.Date.datePart(new Date()),
					format:date_format
				},
				{
					view:"datepicker",
					localId:"return:date",
					name:"return_date",
					label:_("Return"),
					value:webix.Date.datePart(new Date()),
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
	filterDepartures(){
		const options = this.$$("dprt:combo").getList();
		const to = this.$$("to:combo").getValue();

		options.filter(obj => obj.id != 3);

		if (to == 2)
			options.filter(obj => obj.id == 1 || obj.id == "$empty");
		else if (to == 10)
			options.filter(obj => obj.id == 2 || obj.id == "$empty");
		else if (to == 3)
			options.filter(obj => obj.id == 4 || obj.id == "$empty");
		else if (to == 7)
			options.filter(obj => obj.id == 5 || obj.id == "$empty");
		else if (to == 9)
			options.filter(obj => obj.id == 6 || obj.id == "$empty");
		else if (to == 3 || to == 8)
			options.filter(obj => obj.id == 7 || obj.id == "$empty");
		else if (to == 5)
			options.filter(obj => obj.id == 8 || obj.id == "$empty");
		else if (to == 4)
			options.filter(obj => obj.id == 9 || obj.id == "$empty");
		else if (to == 3)
			options.filter(obj => obj.id == 10 || obj.id == "$empty");
	}
	filterDestinations(){
		const from = this.$$("dprt:combo").getValue();
		const options = this.$$("to:combo").getList();
		if (from == 1)
			options.filter(obj => obj.id == 2 || obj.id == "$empty");
		else if (from == 2)
			options.filter(obj => obj.id == 10 || obj.id == "$empty");
		else if (from == 4)
			options.filter(obj => obj.id == 3 || obj.id == "$empty");
		else if (from == 5)
			options.filter(obj => obj.id == 7 || obj.id == "$empty");
		else if (from == 6)
			options.filter(obj => obj.id == 9 || obj.id == "$empty");
		else if (from == 7)
			options.filter(obj => obj.id == 3 || obj.id == 8 || obj.id == "$empty");
		else if (from == 8)
			options.filter(obj => obj.id == 5 || obj.id == "$empty");
		else if (from == 9)
			options.filter(obj => obj.id == 4 || obj.id == "$empty");
		else if (from == 10)
			options.filter(obj => obj.id == 3 || obj.id == "$empty");
	}
}
