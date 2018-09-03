import {JetView, plugins} from "webix-jet";
import {cities} from "models/cities";

export default class SpecialOffers extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			gravity:3,
			type:"clean",
			rows:[
				{
					view:"toolbar",
					visibleBatch:"default",
					cols:[
						{ view:"label", template:_("Flights"), autowidth:true },
						{ width:30 },
						{ batch:"default" },
						{
							view:"combo", batch:"search",
							suggest:cities,
							placeholder:_("Select departure point")
						},
						{
							view:"combo", batch:"search",
							suggest:cities, placeholder:_("Select destination")
						},
						{
							width:100, view:"button", type:"form", batch:"search",
							value:_("Search"), align:"left"
						},
						{ width:30 },
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
	urlChange(ui,url){
		const toolbar = ui.queryView({ view:"toolbar" });
		if (url[1].page === "flightinfo")
			toolbar.showBatch("search");
		else
			toolbar.showBatch("default");
	}
}
