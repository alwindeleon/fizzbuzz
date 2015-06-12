 $(document).ready(function(){

 	
	var prev;
	for( var i = 1; i < 101; i++){
		if (i % 3 == 0 && i % 5 == 0){
			//prev = $("div").text();
			$("div").append("FizzBuzz"+"<br>");
		} else if( i %  3 == 0){
			//prev = $("div").text();
			$("div").append("Fizz"+"<br>");
		} else if (i % 5 == 0){
			//prev = $("div").text();
			$("div").append("Buzz"+"<br>");
		}else{
			//prev = $("div").text();
			$("div").append(i+"<br>");
		}
	}
	
	
 });

