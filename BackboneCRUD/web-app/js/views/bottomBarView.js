define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/bottomBar.html',
  'models/studentModel',
  'models/studentCollection'
  ], function ($, _, Backbone, bottomBarTemplate, StudentModel, StudentCollection) {
    "use strict";

    var bottomBarView = Backbone.View.extend({
        
        template: _.template(bottomBarTemplate),

        initialize : function() {
            console.log('bottomBarView initialized');
        },

        render : function(eventName) {
            console.log('bottomBarView rendered');
            /*_.each(this.model,function(student){
            	console.log("student="+student.student_name);
            });*/
            
   
            $(this.el).html(this.template({model:this.model}));
            
        },
        
        events : {
        	
        	"click .update" : "update",
            "click .delete" : "delete_entry",
            "click .create" : "create_entry"
        },
        
        update : function(event)
        {
        	var element=event.target;
        	var root=$(element).parent().parent();
        	
        	var studentId=$(root).find("td input[name='studentId']").val();
        	var studentName=$(root).find("td input[name='studentName']").val();
        	var branch=$(root).find("td input[name='branch']").val();
        	
        	//alert("hello="+studentId+" "+studentName+" "+branch);
        	
        	var studentModel=new StudentModel({studentId : studentId, studentName : studentName, branch : branch});        	
        	studentModel.save({success : function(){
        		console.log('updated successfully');	
        	}
        	});
        	
        },
        
        delete_entry : function(event)
        {
        	var element=event.target;
        	var root=$(element).parent().parent();        	
        	var studentId=$(root).find("td input[name='studentId']").val();
               	
        	
        	var studentModel=new StudentModel({id:studentId});
        	
        	studentModel.destroy({success : function(){
        		console.log('deleted');
        		$('#show').trigger('click');
        		return;
        	}
        	});
        
        },
        
        create_entry : function(event)
        {
        	var element=event.target;
        	var root=$(element).parent().parent();        	
        	var studentId=$(root).find("td input[name='studentId']").val();
               	
        	
        	var studentId=$(root).find("td input[name='studentId']").val();
        	var studentName=$(root).find("td input[name='studentName']").val();
        	var branch=$(root).find("td input[name='branch']").val();
        	
       // 	alert("hello="+studentId+" "+studentName+" "+branch);
        	
        	var studentModel=new StudentModel({studentId : studentId, studentName : studentName, branch : branch});
        	this.collection=new StudentCollection();
        	
        	this.collection.create(studentModel,{
        		success : function(){
        			console.log("new student created");
        			$('#show').trigger('click');
        			}
        		}   	
        	);
        	

        }
        
    });
    return bottomBarView;
});