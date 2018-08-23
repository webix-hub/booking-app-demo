import {JetView} from "webix-jet";
import {offers} from "models/offers";

export default class SpOffersData extends JetView {
	config(){
		webix.locale.pager = {
			next: "Next >", // the next button
			prev: "< Previous"  // the previous button
		};
		return {
			rows:[
				{
					view:"datatable",
					select:true,
					pager:"pager",
					columns:[
						{ id:"id", header:"#", width:60, sort:"int" },
						{ id:"direction", header:"Direction", fillspace:5 },
						{
							id:"date", header:"Date", fillspace:3, sort:"date",
							format:webix.i18n.longDateFormatStr
						},
						{
							id:"price", header:"Price", sort:"int", fillspace:2,
							format:webix.i18n.priceFormat
						},
						{
							id:"save", header:"You save", sort:"int", fillspace:2,
							format:webix.i18n.priceFormat
						},
						{ id:"places", header:"Tickets", sort:"int", fillspace:1 },
						{
							id:"status", header:"Status", sort:"text", fillspace:2,
							template: obj => {
								let st = "";
								if (obj.status === "Open")
									st = "open";
								else if (obj.status === "Last deals")
									st = "last";
								else
									st = "soon";
								return `<span class="${st}">&#9679;&nbsp;&nbsp;${obj.status}`;
							}
						},
						{
							id:"book", header:"Booking",
							template: obj => {
								return "<a href='javascript:void(0)' class='check_flight'>Book now</a>"
							}
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
							view:"pager", id:"pager", size:24,
							template:"{common.prev()} {common.pages()} {common.next()}"
						},
						{}
					]
				}
			]
		};
	}
	init(view){
		view.queryView({view:"datatable"}).parse(offers);
	}
}
