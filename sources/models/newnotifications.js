let i = 0;
export function newNotification(){
	return webix.copy(notifications[i++%notifications.length]);
}
const notifications = [
	{ title:"Warning", message:"This demo app is heavy on Webix DataTable, a nice widget for lo-ots of numbers and such. You can sort records by any column." },
	{ title:"Components", message:"Can you name all the Webix components that have been used to build the demo app?" },
	{ title:"We missed you", message:"We know that you have been pretty busy lately and we are very happy to see you here. Yep, we see you." },
	{ title:"Have a nice day", message:"Dear client, whenever you are reading this, we wish you a merry day. May luck and success attend you." },
	{ title:"Themes and Locales", message:"You can change the language and the color theme of the demo app. Just click the icons on the toolbar." },
	{ title:"We love you", message:"Dear client, we love you very much. If our feelings are mutual, contact us and download Webix. Then we will love you eternally." }
];
