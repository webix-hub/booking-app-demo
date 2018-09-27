import {JetView} from "webix-jet";
import FlightSelectorView from "views/flightselector";
import AllFlightsView from "views/allflights";
import LanguagesPopup from "views/lang";
import NotificationsPopup from "views/notifications";

export default class TopView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		const theme = this.app.config.theme;
		return {
			rows:[
				{
					view:"toolbar",
					height:56,
					localId:"toolbar",
					css:theme,
					elements:[
						{
							paddingY:7,
							rows:[
								{
									cols:[
										{
											view:"label",
											template:"Webix Booking App"
										},
										{},
										{
											view:"icon",
											icon:"mdi mdi-theme-light-dark",
											tooltip:_("Click to change the theme"),
											color:theme,
											click:function(){
												let color = this.config.color;
												color = !color ? "webix_dark" : "";
												webix.storage.local.put("theme_color",color);
												this.$scope.app.config.theme = color;
												this.$scope.app.refresh();
											}
										},
										{
											view:"icon", icon:"mdi mdi-bell",
											localId:"bell",
											badge:2, tooltip:_("Latest notifications"),
											click:function(){
												this.$scope.notifications.showPopup(this.$view);
											}
										},
										{
											view:"icon", icon:"mdi mdi-earth",
											tooltip:_("Change the language"),
											click:function(){
												this.$scope.languages.showPopup(this.$view);
											}
										}
									]
								}
							]
						},
						{ width:6 }
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

		this.on(this.app,"read:notifications",() => {
			this.$$("bell").config.badge = 0;
			this.$$("bell").refresh();

			setTimeout(() => {
				this.$$("bell").config.badge += 1;
				this.$$("bell").refresh();
				this.app.callEvent("new:notification");
			},10000);
		});
	}
}
