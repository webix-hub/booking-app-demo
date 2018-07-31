import {cities} from "models/cities";

var hours = [];
		for(var i=0; i< 24;i++){
			hours.push(i<10?("0"+i):""+i);
		}
		var minutes = [];
		for(var i=0; i< 60;i += 15){
			minutes.push(i<10?("0"+i):""+i);
		}
		
export const flight_selector = {
			width: 400,
			multi:false, rows:[
			  {header:"Book a Flight", body:{
				rows:[
				  {view:"form", elements:[
					{view:"radio", labelWidth: 120, id:"radio1", value:1, options:[{id:1, value:"One-Way"}, {id:2, value:"Return"}], label:"Trip"},
					{view:"combo", labelWidth: 120, label:"From", suggest:cities, placeholder:"Select departure point"},
					{view:"combo", labelWidth: 120, label:"To",  suggest:cities, placeholder:"Select destination"},
					{view:"datepicker", labelWidth: 120, label:"Departure Date", value:new Date(), format:"%d  %M %Y"},
					{view:"datepicker", labelWidth: 120, id:"datepicker2", label:"Return Date", value:new Date(), format:"%d  %M %Y", hidden:true},
					{view:"checkbox", labelWidth: 120, id:"flexible", value:0, label: "Flexible dates"},
					{cols:[
					  {view:"label",  value: "Passengers", labelWidth: 130},
					  {view:"counter",  labelPosition: "top", label:"Adults", value:1, min:1},
					  {view:"counter",  labelPosition: "top", label:"Children"}
					]}
				  ]},
				  {padding: 20,
				   css: "blue_row",
				   rows:[
					 {view:"button", type:"form", value:"Book Now", align: "center", css: "blue_row", height: 50}
				   ]
				  }
				],
				elementsConfig:{
				  labelWidth:100, labelAlign:"left"
				}
			  }},
			  {header:"Hotels", collapsed:true, body:{
				rows:[
				  {view:"form", elements:[
					{view:"text", label:"Where", labelPosition: "top", placeholder:"Destination e.g. city, hotel name"},
					{cols:[
					  {view:"datepicker", label: "Check In", labelPosition:"top", value:new Date(), format:"%d  %M %Y"},
					  {view:"datepicker", label: "Check Out", labelPosition:"top", value:webix.Date.add(new Date(),1,"day"), format:"%d  %M %Y"}
					]}
				  ],
				   elementsConfig:{labelAlign:"left" }
				  },
				  {
					padding: 20,
					css: "blue_row",
					rows:[
					  {view:"button", type:"form", value:"Search", align: "center", css: "blue_row", height: 50}
					]
				  }
				]
		  
			  }},
			  {header:"Cars", collapsed:true, body:{
				rows:[
				  {view:"form",
				   elements:[
					 {view:"text", label:"Where", labelPosition: "top", placeholder:"Location e.g. country, city"},
					 {cols:[
					   {view:"datepicker", label: "I'm picking up the car on", labelPosition:"top", value:new Date(), format:"%d  %M %Y"},
					   {width: 20},
					   {view:"richselect", label: "&nbsp;", labelPosition:"top",value:"09", options: hours, width: 75},
					   {view:"richselect", label: "&nbsp;", labelPosition:"top",value:"00", options: minutes, width: 75}
					 ]},
					 {cols:[
					   {view:"datepicker", label: "I'm returning the car on", labelPosition:"top", value:new Date(), format:"%d  %M %Y"},
					   {width: 20},
					   {view:"richselect", label: "&nbsp;", labelPosition:"top",value:"09", options: hours, width: 75},
					   {view:"richselect", label: "&nbsp;", labelPosition:"top",value:"00", options: minutes, width: 75}
					 ]}
				   ],
				   elementsConfig:{labelAlign:"left" }
				  },
				  {padding: 20,
				   css: "blue_row",
				   rows:[
					 {view:"button", type:"form", value:"Search", align: "center", css: "blue_row", height: 50},
					 {css: "blue_row"}
				   ]
				  }
				]
			  }},
			  {header:"Register", css:"registration", collapsed:true, body:{
				rows:[
				  {view:"form", elements:[
					{view:"text", label:"First Name", placeholder:"Matthew"},
					{view:"text",  label:"Last Name", placeholder:"Clark"},
					{view:"text",  label:"Email", placeholder:"mattclark@some.com"},
					{view:"text",  label:"Login", placeholder:"Matt"},
					{view:"text",  label:"Password", type:"password", placeholder:"********"},
					{view:"text",  label:"Confirm Password", type:"password", placeholder:"********"}
				  ],
				   elementsConfig:{labelAlign:"left",labelWidth:140 }
				  },
				  {padding: 20,
				   css: "blue_row",
				   rows:[
					 {view:"button", type:"form", value:"Register", align: "center", css: "blue_row", height: 50},
					 {css: "blue_row"}
				   ]
				  }
				]
			  }},{}
			]
		  };