define([
       'backbone'
       ],function (Backbone) {
    
	"use strict";
    
	var studentModel = Backbone.Model.extend({
        urlRoot : "college/student",
        
        defaults : {   
        	"id" : "",
            "student_id" : null,
            "student_name" : "",
            "branch" : ""
        },
	
    intialize : function()
	{
		console.log('student model intialized');
	}
    });
    return studentModel;
    
});
