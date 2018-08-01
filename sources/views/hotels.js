import {JetView} from "webix-jet";

export default class Hotels extends JetView {
	config(){
		return {
			header:"Hotels", collapsed:true,
			body:{
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
										value:new Date(), format:"%d  %M %Y"
									},
									{
										view:"datepicker", label:"Check Out",
										labelPosition:"top",
										value:webix.Date.add(new Date(),1,"day"),
										format:"%d  %M %Y"
									}
								]
							}
						],
						elementsConfig:{ labelAlign:"left" }
					},
					{
						padding:20,
						css:"blue_row",
						rows:[
							{
								view:"button", type:"form", value:"Search",
								align:"center", css:"blue_row", height:50
							}
						]
					}
				]
			}
		};
	}
}
