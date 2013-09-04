define([
    'backbone',
    'models/studentModel'
    ],function (Backbone, Student) {
    
	"use strict";
    
	var studentCollection = Backbone.Collection.extend({
      
		model : Student,
      
      url : "college/student",
      
      initialize: function()
      { 
    	  console.log('student collection intialized');    	
	  }
	  
	
    });
    return studentCollection;
});