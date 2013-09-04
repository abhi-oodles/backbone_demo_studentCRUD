// Set the require.js configuration for your application.
requirejs.config({
   
	// Initialize the application with the main application file
	deps: ["main"],
	
	paths: {
   
	 // Libraries
    jquery: "../lib/jquery-1.9.1",
    underscore: "../lib/underscore-1.4.4",
    backbone: "../lib/backbone-0.9.10",
    text: "../lib/text-2.0.5",
    
    // Templates
    'templates': "../tpl"
  },
  
 // for old browser configuration[must include this]
  shim: {
	    'backbone': {
	      deps: ["underscore", "jquery"],
	      exports: "Backbone"
	    },

	    'underscore': {
	      exports: "_"
	    }
	    
	    
	  }

});
