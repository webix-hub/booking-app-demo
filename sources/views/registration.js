import {JetView} from "webix-jet";

export default class Registration extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[
				{
					view:"form", elementsConfig:{ labelAlign:"right", labelWidth:140 },
					elements:[
						{ view:"text", label:_("First Name"), placeholder:"Matthew" },
						{ view:"text", label:_("Last Name"), placeholder:"Clark" },
						{ view:"text", label:_("Email"), placeholder:"mattclark@some.com" },
						{ view:"text", label:_("Login"), placeholder:"Matt" },
						{
							view:"text", label:_("Password"), type:"password",
							placeholder:"********"
						},
						{
							view:"text", label:_("Confirm Password"),
							type:"password", placeholder:"********"
						},
						{
							view:"button", type:"form", value:_("Register"),
						}
					]
				}
			]
		};
	}
}
