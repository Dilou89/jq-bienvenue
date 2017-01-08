$(document).ready(function(){

$('input:text').keyup(function(e) {    
   if(e.keyCode == 13) {

var fM = $("#first_name").val();
var lM=$("#last_name").val();
var city =$("#city:text").val();

console.log(fM);

console.log(lM);
	
console.log(city);

var username = fM + ""+""+lM;
console.log(username);

};	

});
});