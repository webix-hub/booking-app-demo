export function getOffers(){
	return offers;
}

const offers = new webix.DataCollection({
	scheme:{                                                                              
		$init:function(obj){                                                                          
			obj.date = webix.i18n.parseFormatDate(obj.date);
			const month_delta = new Date().getMonth() - 6;
			obj.date.setMonth(obj.date.getMonth() + month_delta);
			if (obj.date.getMonth() === new Date().getMonth() && obj.date.getDate() < new Date().getDate()){
				obj.date.setDate(obj.date.getDate() + new Date().getDate() - obj.date.getDate());
			}
		}                                                                                  
	},
	url:"data/offers.json"
});
