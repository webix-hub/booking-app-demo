import {JetView} from "webix-jet";
import BookingFlight from "views/bookingflight";
import Hotels from "views/hotels";
import Cars from "views/cars";
import Registration from "views/registration";
import BestOffers from "views/best";
		
export default class FlightSelector extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			width:400,
			multi:false,
			margin:1,
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
				{
					header:_("Special offers"),
					collapsed:true,
					body:BestOffers
				},
				{}
			]
		};
	}
	// init(){
	// 	const ccolor = webix.storage.local.get("theme_color");
	// 	this.toggleThemes(ccolor);

	// 	this.on(this.app,"change:theme",color => this.toggleThemes(color));
	// }
	// toggleThemes(color){
	// 	const ui = this.getRoot().getChildViews();
		// if (color === "dark"){
		// 	for (let i = 0; i < ui.length; i++)
		// 		ui[i].define("css","webix_dark");
		// }
		// else {
		// 	for (let i = 0; i < ui.length; i++)
		// 		webix.html.removeCss(ui[i].$view,"webix_dark");
		// }
	// }
}
