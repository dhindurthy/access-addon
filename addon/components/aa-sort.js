import Ember from 'ember';
import layout from '../templates/components/aa-sort';

export default Ember.Component.extend({
  layout,

  classNames:['aa-sort'],
  name: 'aa-sort',
  classNameBindings:['isDisabled:sort-disabled', 'isAscDisabled:sort-asc-disabled', 'isDescDisabled:sort-desc-disabled'],
  initialSort: '',
  setInitialSort: Ember.observer('initialSort', function(){
    if(this.get('initialSort') === 'asc') {
      this.set('isAscDisabled', true);
      this.set('isReset', false);
    } else if(this.get('initialSort') === 'desc') {
      this.set('isDescDisabled', true);
      this.set('isReset', false);
    }
  }),
  isReset: true,
  resetSort: Ember.observer('isReset', function() {
    if(this.get('isReset') === true) {
       this.set('isAscDisabled', false);
       this.set('isDescDisabled', false);
    }
  }),
  isDisabled: false,
  sortParam: '',
  isAscDisabled : false,
  isDescDisabled: false,
  didRender: function() {
    this._super(...arguments);
    if(this.get('initialSort') === 'asc') {
      this.set('isAscDisabled', true);
      this.set('isReset', false);
    } else if(this.get('initialSort') === 'desc') {
      this.set('isDescDisabled', true);
      this.set('isReset', false);
    }
  },
  actions: {
    sortAsc: function () {
      if(!this.get('isDisabled') && !this.get('isAscDisabled')) {
        let sortParam = this.get('sortParam');
        let actionParam = sortParam + ':asc';
        this.sendAction('sortBy', actionParam);
        this.set('isAscDisabled', true);
        this.set('isDescDisabled', false);
        this.set('isReset', false);
      }
    },
    sortDesc: function () {
      if(!this.get('isDisabled') && !this.get('isDescDisabled')) {
        let sortParam = this.get('sortParam');
        let actionParam = sortParam + ':desc';
        this.sendAction('sortBy', actionParam);
        this.set('isDescDisabled', true);
        this.set('isAscDisabled', false);
        this.set('isReset', false);
      }
    }
  }
});
