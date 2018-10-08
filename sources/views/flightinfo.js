import {JetView} from "webix-jet";
import {getInfo} from "models/info";

export default class FlightInfoView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			view:"datatable",
			select:true,
			columns:[
				{ id:"no", header:_("Flight No."), fillspace:1, sort:"string" },
				{ id:"from", header:_("From"), fillspace:1, sort:"string" },
				{ id:"to", header:_("To"), fillspace:1, sort:"string" },
				{ id:"depart", header:_("Departs"), fillspace:1, sort:"int" },
				{ id:"arrive", header:_("Arrives"), fillspace:1, sort:"int" },
				{
					id:"status", header:_("Status"), fillspace:1, sort:"string",
					template:obj => {
						if (obj.status === "On Time")
							return `<span class="status ontime">&#9679;&nbsp;&nbsp;${_(obj.status)}</span>`;
						else
							return `<span class="status landed">&#9679;&nbsp;&nbsp;${_(obj.status)}</span>`;
					}
				}
			]
		};
	}
	init(view){
		view.parse(getInfo());

		this.on(this.app,"search:flight", (from,to) => {
			view.hideOverlay();
			if (from && to)
				view.filter(obj => {
					return obj.from === from && obj.to === to;
				});
			else
				view.filter();
			if (view.count() === 0)
				view.showOverlay("Sorry, there are no flights for this route");
		});
	}
}
