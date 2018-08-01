import {JetView} from "webix-jet";
import {offers} from "models/offers";

export default class RegularOffers extends JetView {
	config(){
		return {
			view:"list",
			select:true,
			template:"#id#. #direction#",
			onClick:{
				"check_flight":() => false
			}
		};
	}
	init(view){
		view.parse(offers);
	}
}
