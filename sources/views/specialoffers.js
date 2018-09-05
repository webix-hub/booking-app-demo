import {JetView} from "webix-jet";
import {getOffers} from "models/offers";
import PagerView from "views/pager";

export default class SpecialOffersView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[
				{
					view:"datatable",
					localId:"datatable",
					select:true,
					pager:"flight:pager",
					columns:[
						{ id:"id", header:"#", width:60, sort:"int" },
						{ id:"direction", header:_("Direction"), fillspace:5 },
						{
							id:"date", header:_("Date"), fillspace:3, sort:"date",
							format:webix.i18n.longDateFormatStr
						},
						{
							id:"price", header:_("Price"), sort:"int", fillspace:2,
							format:webix.i18n.priceFormat
						},
						{
							id:"save", header:_("You save"), sort:"int", fillspace:2,
							format:webix.i18n.priceFormat
						},
						{ id:"places", header:_("Tickets"), sort:"int", fillspace:1 },
						{
							id:"status", header:_("Status"), sort:"text", fillspace:2,
							template:obj => {
								let st = "";
								if (obj.status === "Open")
									st = "open";
								else
									st = (obj.status === "Last deals") ? "last" : "soon";
								return `<span class="status ${st}">&#9679;&nbsp;&nbsp;${_(obj.status)}</span>`;
							}
						},
						{
							id:"book", header:_("Booking"),
							template:() => `<a class="book_flight" href="javascript:void(0)">${_("Book now")}</a>`
						}
					],
					onClick:{
						"book_flight":() => false
					}
				},
				PagerView
			]
		};
	}
	init(){
		this.$$("datatable").sync(getOffers());
	}
}
