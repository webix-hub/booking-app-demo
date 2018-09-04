import {JetView} from "webix-jet";

export default class BestOffers extends JetView {
	config(){
		return {
			view:"dataview",
			xCount:1,
			select:true,
			height:500,
			type:{
				width:"auto",
				height:"auto",
				template:obj => {
					return `<div class="deals" style="background:url(data/photos/${obj.photo}.jpg);"><div class="p_title">${obj.value}</div><div class="p_message">${obj.text}</div></div>`;
				}
			},
			data:[
				{ id:1, value:"Enjoy the ride!", photo:"enjoy", text:"Cheap, comfortable and fast - what else to desire?" },
				{ id:2, value:"Are we sitting comfortably?", photo:"sitting", text:"Prepare for amazing journeys at reasonable prices!" },
				{ id:3, value:"Save Save Save", photo:"save", text:"Book early - save money and nerves" }
			]
		};
	}
}
