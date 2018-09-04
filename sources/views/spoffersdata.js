import {JetView} from "webix-jet";
import {offers} from "models/offers";
import "webix/pager";

export default class SpOffersData extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[
				{
					view:"datatable",
					localId:"special",
					select:true,
					pager:"special:pager",
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
							template: obj => {
								let st = "";
								if (obj.status === "Open")
									st = "open";
								else if (obj.status === "Last deals")
									st = "last";
								else
									st = "soon";
								return `<span class="${st}">&#9679;&nbsp;&nbsp;${_(obj.status)}`;
							}
						},
						{
							id:"book", header:_("Booking"),
							template: () => `<a href='javascript:void(0)'>${_("Book now")}</a>`
						}
					],
					onClick:{
						"check_flight":() => false
					}
				},
				{
					cols:[
						{},
						{
							view:"pager", id:"special:pager",
							size:24, width:330,
							template:"{common.prev()} {common.pages()} {common.next()}"
						},
						{}
					]
				}
			]
		};
	}
	init(){
		this.$$("special").parse(offers);
	}
}
