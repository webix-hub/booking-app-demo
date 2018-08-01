import {JetView} from "webix-jet";
import FlightForm from "views/flightform";
import {info} from "models/info";

export default class FlightInfo extends JetView {
	config(){
		return {
			rows:[
				FlightForm,
				{
					view:"datatable",
					select:true,
					columns:[
						{ id:"from", header:"From", width:150, sort:"string" },
						{ id:"to", header:"To", width:150, sort:"string" },
						{ id:"depart", header:"Depart", width:110, sort:"int" },
						{ id:"arrive", header:"Arrive", width:110, sort:"int" },
						{ id:"status", header:"Status", fillspace:true, sort:"string" }
					]
				}
			]
		};
	}
	init(view){
		view.queryView({view:"datatable"}).parse(info);
	}
}
