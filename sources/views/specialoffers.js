import {JetView, plugins} from "webix-jet";

export default class SpecialOffers extends JetView {
	config(){
		return {
			gravity:3,
			type:"clean",
			rows:[
				{
					view:"toolbar", cols:[
						{ view:"label", template:"Payments" },
						{},
						{
							view:"segmented", localId:"offers",
							width:300,
							options:[
								{ id:"spoffersdata", value:"Offers" },
								{ id:"regular", value:"Regular" },
								{ id:"flightinfo", value:"Info" }
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
