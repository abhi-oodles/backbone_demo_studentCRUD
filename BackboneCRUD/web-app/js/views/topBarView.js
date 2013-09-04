define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/topBar.html',
  'views/bottomBarView',
  'models/studentCollection'
  ], function ($, _, Backbone, topBarTemplate, BottomBarView, StudentCollection) {
    "use strict";

    var topBarView = Backbone.View.extend({
        
        template: _.template(topBarTemplate),

        initialize : function() {
            console.log('topBarView initialized');
        },

        render : function(eventName) {
            console.log('topBarView rendered');
            $(this.el).html(this.template());
        },

        events : {
            "click #show" : "show"	
        },
     
        	
        	
        
        show : function(event) {
        	console.log('show clicked');        	
        	
        	this.studentList = new StudentCollection();
        	
        	this.studentList.fetch({wait:true,
                success : function(collection, response) {
                	console.log("success="+collection.length);                  	
                	
                	var bottomBarView=new BottomBarView({el:$("#bottomBar"),model:collection.toJSON()});
                	bottomBarView.render();
                },
                error: function(collection, response) {
                    console.log('StudentCollection not fetched...');
                }
            });
              
            console.log("studentList="+this.studentList.toJSON().id);
        
        }
    });
    
    return topBarView;
});