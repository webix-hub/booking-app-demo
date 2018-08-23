import {JetView, plugins} from "webix-jet";

export default class SpecialOffers extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			gravity:3,
			type:"clean",
			rows:[
				{
					view:"toolbar", cols:[
						{ view:"label", template:_("Flights") },
						{},
						{
							view:"segmented", localId:"offers",
							width:300,
							options:[
								{ id:"spoffersdata", value:_("Offers") },
								{ id:"regular", value:_("Regular") },
								{ id:"flightinfo", value:_("Info") }
							]
						}
					]
				},
				{ $subview:true }
			]
		};
	}
	init(){
		this.use(plugins.Menu,"offers");
	}
}
