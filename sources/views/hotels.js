import {JetView} from "webix-jet";

export default class Hotels extends JetView {
	config(){
		return {
			rows:[
				{
					view:"form", elements:[
						{
							view:"text", label:"Where", labelPosition:"top",
							placeholder:"Destination e.g. city, hotel name"
						},
						{
							cols:[
								{
									view:"datepicker", label:"Check In",
									labelPosition:"top",
									value:new Date(), format:"%d %M %Y"
								},
								{
									view:"datepicker", label:"Check Out",
									labelPosition:"top",
									value:webix.Date.add(new Date(),1,"day"),
									format:"%d %M %Y"
								}
							]
						}
					],
					elementsConfig:{ labelAlign:"left" }
				},
				{
					padding:20,
					rows:[
						{
							view:"button", type:"form", value:"Search",
							align:"center", height:50
						}
					]
				}
			]
		};
	}
}
