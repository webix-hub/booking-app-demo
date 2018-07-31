import {offers} from "models/offers";
import {cities} from "models/cities";
import {info} from "models/info";

export const special_offers = {
			gravity:3,
			type: "clean",
			rows:[
			  {view: "tabbar", multiview: true, selected: "sOffers", options:[
				{id: "sOffers", value: "Special offers", width: 150},
				{id: "regular", value: "Regular", width: 150},
				{id: "flightInfo", value: "Flight Info", width: 150}
			  ]},
			  {view: "multiview", id: "multiview",
			   cells:[
				 {id: "sOffers",
				  view: "datatable", select:true,
				  columns:[
					{id:"id", header:"#", width:40},
					{id:"direction", header:"Direction", fillspace:true},
					{id:"date", header:"Date", width:150, sort:"date", format:webix.i18n.longDateFormatStr},
					{id:"price", header:"Price", width:95, sort:"int", format:webix.i18n.priceFormat},
					{id:"save", header:"You save", width:95, sort:"int", format:webix.i18n.priceFormat},
					{id:"places", header:"Tickets", width:65, sort:"int"},
					{id:"book", header:"Booking", css:"webix_el_button", width:100, template:"<a href='javascript:void(0)' class='check_flight'>Book now</a>"}
				  ],
				  data:offers,
				  onClick:{
					"check_flight":function(){
					  return false;
					}
				  }
				 },
				 {id: "regular",
				  view: "list",
				  select:true,
				  template: "#id#. #direction#",
				  data:offers,
				  onClick:{
					"check_flight":function(){
					  return false;
					}
				  }
				 },
				 {id: "flightInfo",
				  rows:[
					{view: "form",
					 cols:[{
					   type: "form",
					   borderless: true,
					   width: 550,
					   rows:[
						 {cols:[
						   { view:"text", labelPosition: "top", label: "Flight number", placeholder: "Enter flight No."},
						   {width: 40},
						   {}
						 ]},
						 {view: "label",
						  label: "-- or --",
						  align: "left"
						 },
						 {cols:[
						   { view:"combo", labelPosition: "top", label:"From", suggest:cities, placeholder:"Select departure point"},
						   {width: 40},
						   {view:"combo", labelPosition: "top", label:"To",  suggest:cities, placeholder:"Select destination"}
						 ]},
						 {inputWidth: 100,view:"button", type:"form", value:"Search", align: "left"}
					   ]
					 },
						   {}
						  ]
					},
					{view: "datatable", select:true,
					 columns:[
					   {id:"from", header:"From", width:150, sort:"string"},
					   {id:"to", header:"To", width:150, sort:"string"},
					   {id:"depart", header:"Depart", width:110, sort:"int"},
					   {id:"arrive", header:"Arrive", width:110, sort:"int"},
					   {id:"status", header:"Status", fillspace: true, sort:"string"}
					 ],
					 data:info
					}
				  ]
				 }
			   ]
			  }
			]
		  };