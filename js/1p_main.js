// [#main] 1page //// [#main] 1page //// [#main] 1page //// [#main] 1page //
$(function(){
	mainH1();
	bpCircle();
	bpSquare();
	bpCht();
})

// intro 인사말
function mainH1(){
	$('#main p').css({
		opacity: '0'
	}).animate( {
		opacity: '1'
	},1000);
}

// 원형 패턴
function bpCircle(){
	$(".bg > article > .bp-circle").css({
		right: "-100%"
	}).animate({
		right: "0px"
	},800);
}

// 사각 패턴
function bpSquare(){
	$(".bg > article > .bp-square").css({
		left: "-100%"
	}).animate({
		left: "0%"
	},800);
}

// 캐릭터 이동
function bpCht(){
	$(".bg > article > .cht").css({
		left: "100%"
	}).animate({
		left: "60%"
	},900);
}

