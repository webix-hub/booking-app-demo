import {JetView} from "webix-jet";
import FlightSelector from "views/flightselector";
import SpecialOffers from "views/specialoffers";
import LanguagesPopup from "views/lang";

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
							{
								view:"icon", width:40, icon:"cog",
								click:function(){
									this.$scope.languages.showLangs(this.$view);
								}
							}
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
		this.languages = this.ui(LanguagesPopup);
	}
}
