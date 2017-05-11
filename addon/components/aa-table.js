import Ember from 'ember';
import layout from '../templates/components/aa-table';

export default Ember.Component.extend({
	layout,
  classNames:['aa-table'],
  name:'aa-table',
  tableId:'',
  sortProperties: Ember.computed.alias('model.defaultSortParams'),
  sortedData: Ember.computed.sort('model.data', 'sortProperties'),
  headers: Ember.computed.alias('model.headers'),
  resetColumnSorts: function(newSortProperties) {
    let headers = this.get('headers');
    let sortedParams = newSortProperties.split(":");
    let sortedColumn = sortedParams[0];
    for(var i=0;i<headers.length;i++) {
      Ember.set(headers[i], 'defaultSort', '');
      if(sortedColumn !== headers[i].param){
        Ember.set(headers[i], 'resetSort', true);
      } else if(sortedColumn === headers[i].param) {
        Ember.set(headers[i], 'resetSort', false);
      }
    }
    this.set('headers', headers);
  },
  disableSort: false,
  showSort: true,

  didReceiveAttrs: function() {
  	debugger;
  },

  didRender: function() {
    this._super(...arguments);
    let sortProperties = this.get('sortProperties');
    let defaultSortParams = sortProperties[0].split(":");
    let defaultOrder = defaultSortParams[1];
    let defaultParam = defaultSortParams[0];
    let headers = this.get('headers');
    for(var i=0;i<headers.length;i++) {
      if(defaultParam === headers[i].param) {
        Ember.set(headers[i], 'defaultSort', defaultOrder);
      }
    }
  },
  actions : {
    sortBy: function(newSortProperties) {
      this.set('sortProperties', [newSortProperties]);
      // let newSortedData = Ember.computed.sort('model.data', 'sortProperties');
      // this.set('sortedData', newSortedData);
      this.resetColumnSorts(newSortProperties);
    }
  }
});