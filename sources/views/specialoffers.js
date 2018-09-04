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
							id:"depart:combo",
							placeholder:_("Select departure point"),
							options:cities,
							on:{
								onChange:newv => {
									if (newv){
										this.$$("to").enable();
										this.$$("to").setValue("");
									}
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
								const route = this.getRoot().queryView({ view:"combo" });
								if (route[0].getValue() && route[1].getValue() )
									webix.message("searching (to be implemented tomorrow");
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
