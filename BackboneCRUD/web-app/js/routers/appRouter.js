define([
    'jquery',
    'backbone',
    'underscore',
    'views/topBarView'
    ], function ($, Backbone, _, TopBarView) {
    
	"use strict";
    var appRouter = Backbone.Router.extend({

        initialize : function() {
            console.log('router intialized');
            Backbone.history.start();
        },

        routes : {
            "" : "loadTopBarView"
        },
        
        loadTopBarView :function()
        {	console.log('in loadTopBarView function of router');
        	var topBarView=new TopBarView({el:$("#topBar")});
        	topBarView.render();
        }
        
     });
    return appRouter;
});
