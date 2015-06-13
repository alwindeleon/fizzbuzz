 $(document).ready(function(){


 	$(".fizzButton").click(function(){

 		var	x = +$("input").val();
 		fizzBuzzPrint(x);
 	})
 	
	

	
	
 });


function fizzBuzzPrint( n ){
	console.log(n);
	for ( var i = 1; i <= n;i++){
		console.log(i);
		if( i % 3 ==0 && i % 5 == 0){
			$(".container").append("FizzBuzz<br>");
		}else if ( i % 3 == 0){
			$(".container").append("Fizz<br>");
		}else if ( i % 5 ==0){
			$(".container").append("Buzz<br>");
		}else {
			$(".container").append(i + "<br>");
		}
	}
}
