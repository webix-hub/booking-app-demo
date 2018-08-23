import {JetView} from "webix-jet";
import {cities} from "models/cities";

export default class FlightForm extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			view:"form",
			cols:[
				{
					view:"combo", labelWidth:50,
					label:_("From"), suggest:cities,
					placeholder:_("Select departure point")
				},
				{
					view:"combo", labelWidth:30, label:_("To"),
					suggest:cities, placeholder:_("Select destination")
				},
				{
					inputWidth:100, view:"button", type:"form",
					value:_("Search"), align:"left"
				}
			]
		};
	}
}
