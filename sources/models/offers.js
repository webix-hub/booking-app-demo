export function getOffers(){
	return offers;
}

const offers = new webix.DataCollection({
	scheme:{                                                                              
		$init:function(obj){                                                                          
			obj.date = webix.i18n.parseFormatDate(obj.date);

			const month_delta = new Date().getMonth() - obj.date.getMonth();
			if (month_delta) obj.date.setMonth(obj.date.getMonth() + month_delta);
		}                                                                                  
	},
	url:"data/offers.json"
});
