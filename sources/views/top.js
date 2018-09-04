import {JetView} from "webix-jet";
import FlightSelector from "views/flightselector";
import SpecialOffers from "views/specialoffers";
import LanguagesPopup from "views/lang";
import NotificationView from "views/notifications";

export default class TopView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		
		return {
			rows:[
				{
					view:"toolbar",
					elements:[
						{
							view:"label",
							template:"Webix Booking App"
						},
						{},
						{
							view:"icon", localId:"themes",
							icon:"theme-light-dark",
							tooltip:_("Click to change the theme"),
							color:"light",
							click:function(){
								let color = this.config.color;
								color = (color === "light") ? "dark" : "light";
								webix.storage.local.put("theme_color",color);
								this.$scope.app.callEvent("change:theme",[color]);
							}
						},
						{
							view:"icon", icon:"bell",
							tooltip:_("Latest notifications"),
							click:function(){
								this.$scope.notifications.showLatest(this.$view);
							}
						},
						{
							view:"icon", icon:"earth",
							tooltip:_("Change the language"),
							click:function(){
								this.$scope.languages.showLangs(this.$view);
							}
						}
					]
				},
				{
					type:"space",
					cols:[
						FlightSelector,
						SpecialOffers
					]
				}
			]
		};
	}
	init(){
		this.languages = this.ui(LanguagesPopup);
		this.notifications = this.ui(NotificationView);

		const ccolor = webix.storage.local.get("theme_color");
		if (ccolor) this.toggleThemes(ccolor);

		this.on(this.app,"change:theme",color => this.toggleThemes(color));
	}
	toggleThemes(color){
		const toolbar = this.getRoot().queryView({ view:"toolbar" });
		if (color === "dark"){
			toolbar.define("css","webix_dark");
		}
		else {
			webix.html.removeCss(toolbar.$view,"webix_dark");
		}
		this.$$("themes").config.color = color;
	}
}
