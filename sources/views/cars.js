import {JetView} from "webix-jet";

export default class Cars extends JetView {
	config(){
		
		var hours = [];
		for (var i = 0; i < 24; i++){
			hours.push(i < 10 ? ("0" + i) : "" + i);
		}
		var minutes = [];
		for (var i = 0; i < 60; i += 15){
			minutes.push( i < 10 ? ("0" + i) : "" + i);
		}
		
		return {
			header:"Cars", collapsed:true,
			body:{
				rows:[
					{
						view:"form",
						elements:[
							{
								view:"text", label:"Where", labelPosition:"top",
								placeholder:"Location e.g. country, city"
							},
							{
								cols:[
									{
										view:"datepicker", label:"I'm picking up the car on",
										labelPosition:"top", value:new Date(), format:"%d  %M %Y"
									},
									{width:20},
									{
										view:"richselect", label:"&nbsp;", labelPosition:"top",
										value:"09", options:hours, width:75
									},
									{
										view:"richselect", label:"&nbsp;", labelPosition:"top",
										value:"00", options:minutes, width:75
									}
								]
							},
							{
								cols:[
									{
										view:"datepicker", label:"I'm returning the car on",
										labelPosition:"top", value:new Date(), format:"%d  %M %Y"
									},
									{width:20},
									{
										view:"richselect", label:"&nbsp;", labelPosition:"top",
										value:"09", options:hours, width:75
									},
									{
										view:"richselect", label:"&nbsp;", labelPosition:"top",
										value:"00", options:minutes, width:75
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
								view:"button", type:"form",
								value:"Search", align:"center",
								css:"blue_row", height:50
							},
							{ css:"blue_row" }
						]
					}
				]
			}
		};
	}
}
