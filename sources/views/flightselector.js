import {JetView} from "webix-jet";
import BookingFlight from "views/bookingflight";
import Hotels from "views/hotels";
import Cars from "views/cars";
import Registration from "views/registration";
		
export default class FlightSelectorView extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		const theme = this.app.config.theme;

		return {
			width:400,
			multi:false,
			margin:1,
			css:theme,
			rows:[
				{
					header:_("Book a Flight"),
					body:BookingFlight
				},
				{
					header:_("Hotels"),
					collapsed:true,
					body:Hotels
				},
				{
					header:_("Cars"),
					collapsed:true,
					body:Cars
				},
				{
					header:_("Register"),
					css:"registration",
					collapsed:true,
					body:Registration
				},
				{}
			]
		};
	}
}
