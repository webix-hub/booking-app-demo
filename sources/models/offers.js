export const offers = new webix.DataCollection({
	scheme:{                                                                              
		$init:function(obj){                                                                          
			obj.date = webix.i18n.parseFormatDate(obj.date);
		}                                                                                  
	},
	url:"data/offers.json"
});
