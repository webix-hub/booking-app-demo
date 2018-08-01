import {JetView} from "webix-jet";
import SpOffersData from "views/spoffersdata";
import RegularOffers from "views/regular";
import FlightInfo from "views/flightinfo";

export class SpecialOffers extends JetView {
	config(){
		return {
			gravity:3,
			type:"clean",
			rows:[
				{
					view:"tabbar",
					multiview:true,
					options:[
						{ id:"sOffers", value:"Special offers", width:150 },
						{ id:"regular", value:"Regular", width:150 },
						{ id:"flightInfo", value:"Flight Info", width:150 }
					]
				},
			  	{
					view:"multiview",
					localId:"multiview",
			   		cells:[
				 		{ id:"sOffers", $subview:SpOffersData },
						{ id:"regular", $subview:RegularOffers },
						{ id:"flightInfo", $subview:FlightInfo }
			   		]
			  	}
			]
		}
	};
}
