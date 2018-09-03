import {JetView} from "webix-jet";
import {info} from "models/info";

export default class FlightInfo extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			rows:[{
					view:"datatable",
					select:true,
					columns:[
						{ id:"no", header:_("Flight No."), sort:"string" },
						{ id:"from", header:_("From"), fillspace:1, sort:"string" },
						{ id:"to", header:_("To"), fillspace:1, sort:"string" },
						{ id:"depart", header:_("Departs"), fillspace:1, sort:"int" },
						{ id:"arrive", header:_("Arrives"), fillspace:1, sort:"int" },
						{
							id:"status", header:_("Status"), fillspace:1, sort:"string",
							template:obj => {
								if (obj.status === "On Time")
									return `<span class='ontime'>&#9679;&nbsp;&nbsp;${_(obj.status)}</span>`;
								else
									return `<span class='landed'>&#9679;&nbsp;&nbsp;${_(obj.status)}</span>`;
							}
						}
					]
				}
			]
		};
	}
	init(view){
		view.queryView({ view:"datatable" }).parse(info);
	}
}
