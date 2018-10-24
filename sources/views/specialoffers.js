import {JetView} from "webix-jet";
import {getOffers} from "models/offers";

export default class SpecialOffersView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[
				{
					view:"datatable",
					localId:"datatable",
					select:true,
					columns:[
						{ id:"id", header:"#", width:40, sort:"int" },
						{ id:"direction", header:_("Direction"), fillspace:6, sort:"string" },
						{
							id:"date", header:_("Date"), fillspace:3, sort:"date",
							format:webix.i18n.longDateFormatStr
						},
						{
							id:"time", header:"Time", fillspace:3, minWidth:126,
							template:obj => obj.deptime + " <span class='webix_icon mdi mdi-arrow-right'></span> " + obj.arrtime
						},
						{
							id:"price", header:_("Price"), sort:"int", fillspace:2,
							format:webix.i18n.priceFormat
						},
						{
							id:"save", header:_("You save"), sort:"int", fillspace:2,
							format:webix.i18n.priceFormat
						},
						{ id:"places", header:_("Tickets"), sort:"int", fillspace:1.5 },
						{
							id:"status", header:_("Status"), sort:"text", adjust:"data",
							template:obj => {
								let st = "";
								if (obj.status === "Open")
									st = "open";
								else
									st = (obj.status === "Last deals") ? "last" : "soon";
								return `<span class="status ${st}">&#9679;&nbsp;&nbsp;${_(obj.status)}</span>`;
							}
						}
					],
					on:{
						onResize(w){
							if (w < 940 && this.getColumnIndex("time") !== -1 && this.getColumnIndex("places") !== -1){
								this.hideColumn("time");
								this.hideColumn("places");
							}
							else if (w >= 940 && this.getColumnIndex("time") === -1 && this.getColumnIndex("places") === -1){
								this.showColumn("time");
								this.showColumn("places");
							}
							if (w < 743 && this.getColumnIndex("save") !== -1){
								this.hideColumn("save");
							}
							else if (w >= 743 && this.getColumnIndex("save") === -1){
								this.showColumn("save");
							}
						}
					}
				}
			]
		};
	}
	init(){
		const grid = this.$$("datatable");
		grid.sync(getOffers());

		this.on(this.app,"search:flight", (from,to,date) => {
			grid.hideOverlay();
			if (from || to || date)
				grid.filter(obj => {
					const data_from = from ? obj.direction.indexOf(from) : 0;
					const data_to = to ? obj.direction.indexOf(to) : 100;
					const date_f = date ? obj.date.toString().slice(0,14) === date.toString().slice(0,14) : 1;
					return data_from !== -1 && data_to !== -1 && data_from < data_to && date_f;
				});
			else
				grid.filter();
			if (grid.count() === 0)
				grid.showOverlay("Sorry, there are no flights for this route");
		});
	}
}
