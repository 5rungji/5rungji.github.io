// [#contact] 5page //// [#contact] 5page //// [#contact] 5page //// [#contact] 5page //


// 배경
function contactBackOn(){
	$('#contact').css({
		backgroundSize: '200%'
	}).stop().animate( {
		backgroundSize: '160%'
	},1000);

}

function contactBackOff(){
	$('#contact').css({
		backgroundSize: '200%'
	});
}