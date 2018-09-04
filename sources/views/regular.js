import {JetView} from "webix-jet";
import {offers} from "models/offers";
import "webix/pager";

export default class RegularOffers extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[
				{
					view:"datatable",
					localId:"all:flights",
					select:true,
					pager:"list:pager",
					onClick:{
						"check_flight":() => false
					},
					columns:[
						{
							id:"id", header:"#", width:80, sort:"int"
						},
						{
							id:"no", header:_("Number"), fillspace:1, sort:"string"
						},
						{
							id:"direction", header:_("Direction"), fillspace:3, sort:"string"
						},
						{
							id:"date", header:_("Date"), fillspace:2, sort:"date",
							format:webix.i18n.longDateFormatStr
						},
						{
							id:"deptime", header:_("Departs"), width:100
						},
						{
							id:"arrtime", header:_("Arrives"), width:100
						},
						{
							id:"comments", header:_("Comments"), fillspace:1, sort:"string",
							template:obj => {
								if (obj.comments === 1)
									return `<span class='ontime'>&#9679;&nbsp;&nbsp;${_("On Time")}</span>`;
								else
									return `<span class='landed'>&#9679;&nbsp;&nbsp;${_("Landed")}</span>`;
							}
						}
					]
				},
				{
					cols:[
						{},
						{
							view:"pager", id:"list:pager",
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
		this.$$("all:flights").parse(offers);
	}
}
