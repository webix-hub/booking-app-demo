import {JetView} from "webix-jet";
import {offers} from "models/offers";

export default class SpOffersData extends JetView {
	config(){
		return {
			view:"datatable",
			select:true,
			columns:[
				{ id:"id", header:"#", width:40},
				{ id:"direction", header:"Direction", fillspace:true},
				{
					id:"date", header:"Date", width:150, sort:"date",
					format:webix.i18n.longDateFormatStr
				},
				{
					id:"price", header:"Price", width:95, sort:"int",
					format:webix.i18n.priceFormat
				},
				{
					id:"save", header:"You save", width:95, sort:"int",
					format:webix.i18n.priceFormat
				},
				{ id:"places", header:"Tickets", width:65, sort:"int"},
				{
					//судя по коду тут пытались кнопку вставить, но что-то пошло не так
					id:"book", header:"Booking", css:"webix_el_button", width:100,
					template:"<a href='javascript:void(0)' class='check_flight'>Book now</a>"
				}
			],
			onClick:{
				"check_flight":() => false
			}
		};
	}
	init(view){
		view.parse(offers);
	}
}
