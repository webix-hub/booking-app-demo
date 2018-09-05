import {JetView} from "webix-jet";

export default class PagerView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		webix.locale.pager = {
			next:_("Next >"),
			prev:_("< Previous")
		};
		return {
			cols:[
				{},
				{
					view:"pager",
					id:"flight:pager",
					size:24, width:420,
					template:"{common.prev()} {common.pages()} {common.next()}"
				},
				{}
			]
		};
	}
}
