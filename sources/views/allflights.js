import {JetView, plugins} from "webix-jet";

export default class AllFlightsView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		const theme = this.app.config.theme;

		return {
			gravity:3,
			rows:[
				{
					view:"toolbar",
					localId:"toolbar",
					css:theme,
					cols:[
						{ view:"label", template:_("Flights"), autowidth:true },
						{},
						{
							view:"segmented", localId:"offers",
							width:300,
							options:[
								{ id:"specialoffers", value:_("Offers") },
								{ id:"regularoffers", value:_("Regular") },
								{ id:"flightinfo", value:_("Info") }
							]
						},
						{ width:6 }
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
