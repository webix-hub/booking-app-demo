export function getOffers(){
	return offers;
}

const offers = new webix.DataCollection({
	scheme:{
		$init:function(obj){
			obj.date = webix.i18n.parseFormatDate(obj.date);

			const dmonth = obj.date.getMonth();
			const month_delta = new Date().getMonth() - dmonth;
			if (month_delta){
				obj.date.setMonth(dmonth + month_delta);
			}

			const dyear = obj.date.getFullYear();
			const year_delta = new Date().getFullYear() - dyear;
			if (year_delta){
				obj.date.setYear(dyear + year_delta);
			}
		}
	},
	url:"data/offers.json"
});
