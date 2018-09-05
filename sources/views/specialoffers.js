import {JetView, plugins} from "webix-jet";
import {getCities} from "models/cities";

export default class SpecialOffers extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		const cities = getCities();
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
							id:"depart:combo",
							placeholder:_("Select departure point"),
							options:cities,
							on:{
								onChange:newv => {
									newv ? this.$$("to").enable() : this.$$("to").disable();
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
										let from = $$("depart:combo").getValue();
										if (from){
											this.getList().filter(obj => obj.id !== from)
										}
									}
								}
							}							
						},
						{
							width:100, view:"button", type:"form", batch:"search",
							value:_("Search"), align:"left",
							click:() => {
								const id_from = $$("depart:combo").getValue();
								const id_to = this.$$("to").getValue();
								if (id_from && id_to){
									const from = cities[id_from-1].value;
									const to = cities[id_to-1].value;
									this.app.callEvent("search:flight",[from,to]);
								}
								else
									this.app.callEvent("search:flight");
							}
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

		const ccolor = webix.storage.local.get("theme_color");
		if (ccolor) this.toggleThemes(ccolor);

		this.on(this.app,"change:theme",color => this.toggleThemes(color));
	}
	urlChange(ui,url){
		const toolbar = ui.queryView({ view:"toolbar" });
		if (url[1].page === "flightinfo")
			toolbar.showBatch("search");
		else
			toolbar.showBatch("default");
	}
	toggleThemes(color){
		const toolbar = this.getRoot().queryView({ view:"toolbar" });
		if (color === "dark"){
			toolbar.define("css","webix_dark");
		}
		else {
			webix.html.removeCss(toolbar.$view,"webix_dark");
		}
	}
}
