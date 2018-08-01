import {JetView} from "webix-jet";

export default class Registration extends JetView {
	config(){
		return {
			rows:[
				{
					view:"form", elements:[
						{ view:"text", label:"First Name", placeholder:"Matthew" },
						{ view:"text", label:"Last Name", placeholder:"Clark" },
						{ view:"text", label:"Email", placeholder:"mattclark@some.com" },
						{ view:"text", label:"Login", placeholder:"Matt" },
						{
							view:"text", label:"Password", type:"password",
							placeholder:"********"
						},
						{
							view:"text", label:"Confirm Password",
							type:"password", placeholder:"********"
						}
					],
					elementsConfig:{ labelAlign:"left", labelWidth:140 }
				},
				{
					padding:20,
					css:"blue_row",
					rows:[
						{
							view:"button", type:"form", value:"Register",
							align:"center", css:"blue_row", height:50
						},
						{ css:"blue_row" }
					]
				}
			]
		};
	}
}
