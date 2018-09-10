import {JetView, plugins} from "webix-jet";
import {getCities} from "models/cities";

export default class AllFlightsView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		const cities = getCities();
		return {
			gravity:3,
			rows:[
				{
					view:"toolbar",
					localId:"toolbar",
					visibleBatch:"default",
					cols:[
						{ view:"label", template:_("Flights"), autowidth:true },
						{ width:30 },
						{ batch:"default" },
						{
							view:"combo", batch:"search",
							id:"depart:combo",
							placeholder:_("Select departure point"),
							options:cities,
							on:{
								onChange:newv => {
									if (newv)
										this.$$("to").enable();
									else {
										this.$$("to").disable();
										this.app.callEvent("search:flight");
									}
									this.$$("to").setValue("");
								}
							}
						},
						{
							view:"combo", batch:"search",
							localId:"to", disabled:true,
							placeholder:_("Select destination"),
							options:{
								data:cities,
								on:{
									onShow(){
										let from = webix.$$("depart:combo").getValue();
										if (from){
											this.getList().filter(obj => obj.id !== from);
										}
									}
								}
							}
						},
						{
							width:100, view:"button", type:"form", batch:"search",
							value:_("Search"), align:"left",
							click:() => {
								const id_from = webix.$$("depart:combo").getValue();
								const id_to = this.$$("to").getValue();
								if (id_from && id_to){
									const from = cities[id_from-1].value;
									const to = cities[id_to-1].value;
									this.app.callEvent("search:flight",[from,to]);
								}
							}
						},
						{ width:30 },
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

		const ccolor = this.app.config.theme;
		if (ccolor) this.toggleThemes(ccolor);
	}
	urlChange(ui,url){
		const toolbar = this.$$("toolbar");
		toolbar.showBatch(url[1].page === "flightinfo" ? "search" : "default");
	}
	toggleThemes(color){
		const toolbar = this.$$("toolbar").$view;
		if (color === "dark")
			webix.html.addCss(toolbar,"webix_dark");
		else
			webix.html.removeCss(toolbar,"webix_dark");
	}
}
