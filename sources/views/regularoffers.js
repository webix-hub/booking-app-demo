import {JetView} from "webix-jet";
import {getOffers} from "models/offers";
import PagerView from "views/pager";

export default class RegularOffersView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[
				{
					view:"datatable",
					localId:"all:flights",
					select:true,
					pager:"flight:pager",
					columns:[
						{ id:"id", header:"#", width:80, sort:"int" },
						{ id:"no", header:_("Number"), fillspace:1, sort:"string" },
						{ id:"direction", header:_("Direction"), fillspace:3, sort:"string" },
						{
							id:"date", header:_("Date"), fillspace:2, sort:"date",
							format:webix.i18n.longDateFormatStr
						},
						{ id:"deptime", header:_("Departs"), width:100 },
						{ id:"arrtime", header:_("Arrives"), width:100 },
						{
							id:"comments", header:_("Comments"), adjust:"width", sort:"string",
							template:obj => {
								if (obj.comments === 1)
									return `<span class="status ontime">&#9679;&nbsp;&nbsp;${_("On Time")}</span>`;
								else
									return `<span class="status landed">&#9679;&nbsp;&nbsp;${_("Landed")}</span>`;
							}
						}
					]
				},
				PagerView
			]
		};
	}
	init(){
		this.$$("all:flights").sync(getOffers());
	}
}
