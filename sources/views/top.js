import {JetView} from "webix-jet";
import {FlightSelector} from "views/flightselector";
import {SpecialOffers} from "views/specialoffers";
import LanguagesPopup from "views/lang";
import {cities} from "models/cities";

export default class TopView extends JetView{
	config(){
		return {
			view:"scrollview",
			body:{
				type:"space",
				rows:[
					{
						view:"toolbar",
						height:55,
						elements:[
							{
								view:"label",
								template:"<span class='main_title'>Webix Airlines Manager</span>"
							},
							{},
							{ view:"icon", width:40, icon:"info-circle" },
							{ view:"icon", width:40, icon:"comments" },
							{ view:"icon", width:40, icon:"cog", popup:LanguagesPopup }
						]
					},
					{
						autoheight:true,
						type:"wide",
						cols:[
							FlightSelector,
							SpecialOffers
						]
					}
				]
			}
		};
	}
	init(){
		// webix.ui({
		// 	id:"cities",
		// 	view:"suggest",
		// 	body:{
		// 		view:"list",
		// 		yCount:5,
		// 		scroll:true,
		// 		data:cities
		// 	}
		// });
		// this.$$("radio1").attachEvent("onChange", function(newv){
		// 	if(newv == 2)
		// 	 	$$("datepicker2").show();
		// 	else
		// 	  	$$("datepicker2").hide();
		// });
	}
}
