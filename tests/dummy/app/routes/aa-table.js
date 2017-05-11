import Ember from 'ember';

const tableRoute = Ember.Route.extend({
	//defaultSortParams: ['name:asc', 'effectiveDate:asc'],
	model: function() {
		var tableObj = {};
		tableObj.defaultSortParams = ['name:asc', 'effectiveDate:asc'],
		tableObj.headers = [{
		    "title": "Continent",
		    "param": "continent"
		  },{
		    "title": "Country",
		    "param": "country"
		  },{
		    "title": "Capital",
		    "param": "capital"
		  },{
		    "title": "Large City",
		    "param": "city"
		  },{
		    "title": "Time",
		    "param": "time"
		  }];

		tableObj.data = [{
			"id": "505",
			"continent": "Europe",
			"country": "Italy",
			"capital": "Milan",
			"city": "Florence",
			"time": "UTC+01:00"
		},{
			"id": "506",
			"continent": "Asia",
			"country": "China",
			"capital": "Beijing",
			"city": "Shanghai",
			"time": "UTC+08:00"
		},{
			"id": "507",
			"continent": "South America",
			"country": "Brazil",
			"capital": "Brasilia",
			"city": "Rio De Janeiro",
			"time": "UTC+03:00"
		}];

		return tableObj;
	}
});

export default tableRoute;