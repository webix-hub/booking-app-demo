import {JetView} from "webix-jet";
// import BookingFlight from "views/bookingflight";
// import Hotels from "views/hotels";
// import Cars from "views/cars";
// import Registration from "views/registration";
		
export default class FlightSelector extends JetView {
	config(){
		return {
			width:400,
			rows:[
			  	BookingFlight,
				Hotels,
				Cars,
				Registration,
				{}
			]
		};
	}
}
