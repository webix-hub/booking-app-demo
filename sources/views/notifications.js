import {JetView} from "webix-jet";
// import {getNotifications} from "models/notifications";
import {newNotification} from "models/newnotifications";

export default class NotificationsPopup extends JetView {
	config(){
		const _ = this.app.getService("locale")._;
		return {
			view:"popup",
			body:{
				view:"list",
				localId:"list",
				borderless:true,
				css:"notifications",
				width:250,
				autoheight:true,
				template:obj => {
					return "<span class='m_title'>" + _(obj.title) + "</span>" +
						"<span class='message'>" + _(obj.message) + "</span>";
				},
				type:{
					height:120
				},
				data:[
					{ title:"Fly to Paris!", message:"Dear Jane, we are happy to share discounts for flights: only on September 24, 2018 all flights to Paris and other towns of France..." },
					{ title:"Search Improved", message:"Dear Jane! Following the latest updates of the SeekMeEverywhere engines, your search has become more reliable and convenient! No..." },
					{ title:"Way Out West: festivals!", message:"Dear Jane, Flights to Gothenburg and Stockholm are available with discounts. From July 25 to August 20, 2018 fly to Sweden for 9.99..." }
				]
			},
			on:{
				onHide:() => {
					this.$$("list").clearAll();
					this.app.callEvent("read:notifications");
				}
			}
		};
	}
	init(){
		const list = this.$$("list");
		//list.parse(getNotifications());

		this.on(this.app,"new:notification",() => {
			list.add(newNotification(),0);
		});
	}
	showPopup(pos){
		this.getRoot().show(pos);
	}
}
