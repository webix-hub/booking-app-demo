import {JetView} from "webix-jet";
import {getNotifications} from "models/notifications";
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
				width:250, height:350,
				template:(obj,common) => {
					return (!obj.read ? common.itemNew() : "") +
						"<span class='m_title" + (!obj.read ? " unread" : "") + "'>" + _(obj.title) + "</span>" +
						"<span class='message'>" + _(obj.message) + "</span>";
				},
				type:{
					itemNew:() => "<span class='webix_icon mdi mdi-alert-decagram unread'></span>",
					height:"auto"
				}
			}
		};
	}
	init(){
		const list = this.$$("list");
		list.parse(getNotifications());

		this.on(this.app,"new:notification",() => {
			list.add(newNotification(),0);
		});
	}
	showPopup(pos){
		this.app.callEvent("read:notifications");
		this.getRoot().show(pos);
		const list = this.$$("list");
		webix.delay(() => {
			const unread = list.find(obj => obj.read === 0);
			for (let i = 0; i < unread.length; i++)
				list.updateItem(unread[i].id,{ read:1 });
		},null,null,1000);
	}
}
