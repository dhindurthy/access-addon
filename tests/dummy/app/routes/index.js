import Ember from 'ember';

const indexRoute = Ember.Route.extend({
    model: function() {
        return [{
                "name": "Textfield",
                "path": "textfield"
            }, {
                "name": "Footer",
                "path": "footer"
            },{
                "name": "Section",
                "path": "section"
            }, {
                "name": "Header",
                "path": "header"
            }, {
                "name": "Drag and Drop",
                "path": "draganddrop"
            }, {
                "name": "Tooltip",
                "path": "tooltip"
            }, {
                "name": "Hierarchy",
                "path": "hierarchy"
            }];
    }
});

export default indexRoute;