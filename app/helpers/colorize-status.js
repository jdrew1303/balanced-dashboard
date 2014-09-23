import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(status) {
	var statusClass = status.match(/2\d\d/) ? "ok" : "error";
	var string = '<span class="status-%@">%@</span>'.fmt(statusClass, status);
	return new Ember.Handlebars.SafeString(string);
});
