import {JetView} from "webix-jet";
import {getNotifications} from "models/notifications";

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
						"<span class='m_title" + (!obj.read ? " unread" :"") + "'>"
						+ _(obj.title) + "</span>" +
						"<span class='message'>" + _(obj.message) + "</span>";
				},
				type:{
					itemNew: () => "<span class='webix_icon mdi mdi-alert-decagram unread'></span>",
					height:"auto"
				}
			}
		};
	}
	init(){
		this.$$("list").parse(getNotifications());
	}
	showPopup(pos){
		this.getRoot().show(pos);
	}
}
