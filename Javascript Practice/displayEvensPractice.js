function validateItems() {
	var startingNumber = document.forms["numberFunForm"]["exampleInputStartingNumber"].value;
	var startingNumber = document.forms["numberFunForm"]["exampleInputEndingNumber"].value;
	var startingNumber = document.forms["numberFunForm"]["exampleInputStep"].value;
	
	for (var i = startingNumber; i <= endingNumber; i + step){
		if (i % 2 ==0){
			console.log(i);
		}
		
	}
}