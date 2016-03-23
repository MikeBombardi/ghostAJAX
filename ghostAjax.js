function ghostAJAX(request){
	if(typeof(request) == 'object'){
		
		var methodOption = request.method ? request.method : "POST";
		var dataFormat = request.type ? request.type : "json";

		if(request.url){
			$.ajax({
				url: request.url, 
				data: {dataIn: JSON.stringify(request.data)}, 
				method: methodOption, 
				async: true,
        		dataType: dataFormat,
        		cache:false
        	})
			.done(function(doneResult){
				if(typeof(request.success) == 'function'){
					request.success(resultSet);
				}
			})
			.error(function(e){
				 console.log(e);
			})
			.complete(function(completeResult){
				if(typeof(request.complete) == 'function'){
					request.complete(resultBlock);
				}
			});
		}
		else{
			console.log("Error Handled - Invalid URL");
		}
	}
	else{
		console.log("Error Handled - Invalid Request");
	}
}