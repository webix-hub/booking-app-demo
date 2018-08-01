import {JetView} from "webix-jet";
import BookingFlight from "views/bookingflight";
import Hotels from "views/hotels";
import Cars from "views/cars";
import Registration from "views/registration";
		
export default class FlightSelector extends JetView {
	config(){
		return {
			width:400,
			multi:false,
			rows:[
				{
					header:"Book a Flight",
					body:BookingFlight
				},
				{
					header:"Hotels",
					collapsed:true,
					body:Hotels
				},
				{
					header:"Cars",
					collapsed:true,
					body:Cars
				},
				{
					header:"Register",
					css:"registration",
					collapsed:true,
					body:Registration
				},
				{
					header:"Special offers",
					collapsed:true,
					body:{
						template:"Something here soon"
					}
				},
				{}
			]
		};
	}
}
