import {JetView} from "webix-jet";
import FlightSelectorView from "views/flightselector";
import AllFlightsView from "views/allflights";
import LanguagesPopup from "views/lang";
import NotificationsPopup from "views/notifications";

export default class TopView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		
		return {
			rows:[
				{
					view:"toolbar",
					localId:"toolbar",
					elements:[
						{
							view:"label",
							template:"Webix Booking App"
						},
						{},
						{
							view:"icon",
							localId:"themes",
							icon:"theme-light-dark",
							tooltip:_("Click to change the theme"),
							click:function(){
								let color = this.config.color;
								color = (color === "light") ? "dark" : "light";
								webix.storage.local.put("theme_color",color);
								this.$scope.app.config.theme = color;
								this.$scope.app.refresh();
							}
						},
						{
							view:"icon", icon:"bell",
							badge:2, tooltip:_("Latest notifications"),
							click:function(){
								this.$scope.notifications.showPopup(this.$view);
							}
						},
						{
							view:"icon", icon:"earth",
							tooltip:_("Change the language"),
							click:function(){
								this.$scope.languages.showPopup(this.$view);
							}
						}
					]
				},
				{
					type:"space",
					cols:[
						FlightSelectorView, AllFlightsView
					]
				}
			]
		};
	}
	init(){
		this.languages = this.ui(LanguagesPopup);
		this.notifications = this.ui(NotificationsPopup);

		const ccolor = this.app.config.theme;
		if (ccolor) this.toggleThemes(ccolor);
	}
	toggleThemes(color){
		const toolbar = this.$$("toolbar").$view;
		if (color === "dark")
			webix.html.addCss(toolbar,"webix_dark");
		else
			webix.html.removeCss(toolbar,"webix_dark");
		this.$$("themes").config.color = color;
	}
}
