// contains global settings for the application

app.service('settings', function(){
	
	var defaults = {
		name : "URL-Manager",
		created : new Date(),
		threads : 1,
		author : "senthilmpro"
	}

	return {
		defaults : defaults
	}
});