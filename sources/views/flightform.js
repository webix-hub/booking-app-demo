import {JetView} from "webix-jet";
import {cities} from "models/cities";

export default class FlightForm extends JetView {
	config(){
		return {
			view:"form",
			cols:[
				{
					type:"form",
					borderless:true,
					width:550,
					rows:[
						{
							cols:[
								{
									view:"text", labelPosition:"top",
									label:"Flight number",
									placeholder:"Enter flight No."
								},
								{}
							]
						},
						{
							view:"label", label:"-- or --", align:"left"
						},
						{
							cols:[
								{
									view:"combo", labelPosition:"top",
									label:"From", suggest:cities,
									placeholder:"Select departure point"
								},
								{ width:40 },
								{
									view:"combo", labelPosition:"top", label:"To",
									suggest:cities, placeholder:"Select destination"
								}
							]
						},
						{
							inputWidth:100, view:"button", type:"form",
							value:"Search", align:"left"
						}
					]
				},
				{}
			]
		};
	}
}