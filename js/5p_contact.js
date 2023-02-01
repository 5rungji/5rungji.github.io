// [#contact] 5page //// [#contact] 5page //// [#contact] 5page //// [#contact] 5page //


// 배경
function contactBackOn(){
	$('#contact').css({
		backgroundSize: '140%'
	}).animate( {
		backgroundSize: '120%'
	},1000);
}

function contactBackOff(){
	$('#contact').css({
		backgroundSize: '140%'
	});
}