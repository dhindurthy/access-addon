import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
	//this.route('index', function(){
		//this.route("index", { path: "index" });
		this.route("textfield", { path: "/textfield" });
		this.route("footer", { path: "/footer" });
		this.route("section", { path: "/section" });
		this.route("header", { path: "/header" });
		this.route("draganddrop", { path: "/draganddrop" });
		this.route("tooltip", { path: "/tooltip" });
		this.route("hierarchy", { path: "/hierarchy" });
	//});
});

export default Router;
