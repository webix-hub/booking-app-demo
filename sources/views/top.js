import {JetView} from "webix-jet";
import FlightSelector from "views/flightselector";
import SpecialOffers from "views/specialoffers";
import LanguagesPopup from "views/lang";

export default class TopView extends JetView{
	config(){
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
						{ view:"icon", icon:"information" },
						{ view:"icon", icon:"bell" },
						{
							view:"icon", icon:"settings",
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
	}
}
