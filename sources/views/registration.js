import {JetView} from "webix-jet";

export default class Registration extends JetView {
	config(){
		return {
			rows:[
				{
					view:"form", elementsConfig:{ labelAlign:"right", labelWidth:140 },
					elements:[
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
						},
						{
							view:"button", type:"form", value:"Register",
						}
					]
				}
			]
		};
	}
}
