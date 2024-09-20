$(document).ready(function(){

$(window).scroll(function(){
var scroll=($(window).scrollTop());
if(scroll > 200){
$('#nav').addClass('bg-dark').removeClass('bg-transparent');
$('#my').addClass('text-dark').removeClass('link1');
}
else{

$('#nav').addClass('bg-transparent').removeClass('bg-dark')
}
})
})
function before(){
    document.getElementById("bulb").src="images/bulb-off.png"
}
function after(){
    document.getElementById("bulb").src="images/bulb-on.png"
    
}