import {JetView, plugins} from "webix-jet";

export default class SpecialOffers extends JetView {
	config(){
		return {
			gravity:3,
			type:"clean",
			rows:[
				{
					view:"toolbar", cols:[
						{},
						{
							view:"segmented", localId:"offers",
							options:[
								{ id:"spoffersdata", value:"Special offers" },
								{ id:"regular", value:"Regular" },
								{ id:"flightinfo", value:"Flight Info" }
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
