// page 이동 //// page 이동 //// page 이동 //// page 이동 //
let section = null;
let index = null;
let tg = null;
let contents = null;

contents = $('#wrap > section');

$(function(){
// 메뉴 클릭시 이동
	$('#main .menu li').click(function(e){
		e.preventDefault(); //a태그 기능 막기
	
		index = $(this).index();
		section = contents.eq(index);
	
		tg = section.offset().top;
		$('html, body').stop().animate({ scrollTop: tg });
	});

// 스크롤 내릴 경우
	$(window).on("wheel", function(e){	
		const fcus = $(window).scrollTop();		
		const upDown = e.originalEvent.wheelDelta;

		for(i = 0; i < contents.length; i++){
			section = contents.eq(i);
			tg = section.offset().top;

			if(i == 0){
				var sectionP = contents.eq(i+1);
				var sectionM = contents.eq(i);
			}else if(i == contents.length -1){
				var sectionP = contents.eq(i);
				var sectionM = contents.eq(i-1);
			}else{
				var sectionP = contents.eq(i+1);
				var sectionM = contents.eq(i-1);
			}

			var tgP = sectionP.offset().top;
			var tgM = sectionM.offset().top;

			if(fcus < tgP && fcus >= tg && upDown < 0){
				$('html, body').stop().animate({ scrollTop: tgP});
				break;				
			}else if(fcus > tgM &&fcus <= tg && upDown > 0){
				$('html, body').stop().animate({ scrollTop: tgM });
				break;			
			}
		}
	});
	
// 키보드 누를
	$(window).keydown(function(e){
		const fcus = $(window).scrollTop();

		for(i = 0; i < contents.length; i++){
			section = contents.eq(i);
			tg = section.offset().top;

			if(i == 0){
				var sectionP = contents.eq(i+1);
				var sectionM = contents.eq(i);
			}else if(i == contents.length -1){
				var sectionP = contents.eq(i);
				var sectionM = contents.eq(i-1);
			}else{
				var sectionP = contents.eq(i+1);
				var sectionM = contents.eq(i-1);
			}

			var tgP = sectionP.offset().top;
			var tgM = sectionM.offset().top;

			if(fcus < tgP && fcus >= tg && e.keyCode == 40){
				$('html, body').stop().animate({ scrollTop: tgP});
				break;				
			}else if(fcus > tgM &&fcus <= tg && e.keyCode == 38){
				$('html, body').stop().animate({ scrollTop: tgM });
				break;			
			}
		}
	});

// btn-scroll 버튼 클릭
	$(".btn-scroll").click(function(e){
		const fcus = $(window).scrollTop();

		for(i = 0; i < contents.length; i++){
			section = contents.eq(i);
			var sectionP = contents.eq(i+1);
			tg = section.offset().top;
			var tgP = sectionP.offset().top;

			if(fcus < tgP && fcus >= tg){
				$('html, body').stop().animate({ scrollTop: tgP});
				break;	
			}
		}
	});
})


// btn-scroll 버튼 효과 //// btn-scroll 버튼 효과 //
$(".btn-scroll").hover(function(){
	const fcus = $(window).scrollTop();

	if(fcus != (contents.eq(contents.length -1)).offset().top){
		$(".btn-scroll a").stop().animate( {
			lineHeight: '200px'
		},100);
		$(".btn-scroll a").delay(100).animate( {
			lineHeight: '80px'
		},100);
	}
})


// PAGE 초기화 효과 //// PAGE 초기화 효과 //// PAGE 초기화 효과 //// PAGE 초기화 효과 //
$(window).scroll(function () {
	const fcus = $(window).scrollTop();
	for(i = 0; i < contents.length; i++){
		section = $(contents).eq(i);
		tg = section.offset().top;

		if(fcus >= tg && i == 0){
	//1page
			if(fcus == tg){
		// intro 인사말
				mainH1();
		// 배경패턴
				bpCircle();
				bpSquare();	
				bpCht();
			}
		// 글자색상
			fNavColorLight();
		// 네비버튼
			$("#f-nav > article > .btn-nav").addClass("invisible");
		//하단스크롤
			$('.custom-scroll > article').stop().animate({
				width: '20%'
			},700);
		//스크롤버튼페이지
			$('.btn-scroll').html(`
				<a><i class="fa-solid fa-chevron-down"></i></a>
			`)
		}else if(fcus >= tg && i == 1){ 
	//2page
		// 글자색상
			fNavColorDark();
		//배경패턴
			skillBackOff();
		// 네비버튼
			$("#f-nav > article > .btn-nav").removeClass("invisible");
		//하단스크롤
			$('.custom-scroll > article').stop().animate({
				width: '40%'
			},700);
		//스크롤버튼페이지
			$('.btn-scroll').html(`
			<a>02</a>
			`)
		}else if(fcus >= tg && i == 2){ 
	//3page
		// 글자색상
			fNavColorLight();
		//배경패턴
			skillBackOn()
		//하단스크롤
			$('.custom-scroll > article').stop().animate( {
				width: '60%'
			},700);
		//스크롤버튼페이지
			$('.btn-scroll').html(`
			<a>03</a>
			`)
		}else if(fcus >= tg && i == 3){ 
	//4page
			if(fcus == tg){
		// 배경패턴
				bpCircle();
				bpSquare();
			}
			skillBackOff();
			contactBackOff();
		// 글자색상
			fNavColorLight();
		//하단스크롤
			$('.custom-scroll > article').stop().animate( {
				width: '80%'
			},700);
		//스크롤버튼페이지
			$('.btn-scroll').html(`
			<a>04</a>
			`)
		}else if(fcus >= tg && i == 4){ 
	//5page
		//글자색상
			fNavColorDark();
		//배경
			contactBackOn();
		//하단스크롤
			$('.custom-scroll > article').stop().animate( {
				width: '100%'
			},700);
		//스크롤버튼페이지
			$('.btn-scroll').html(`
			<a>05</a>
			`)
		}
	}
});


// 커서 이벤트 //// 커서 이벤트 //// 커서 이벤트 //// 커서 이벤트 //
// 커서 이동 //// 커서 이동 //
let mouseX = null;
let mouseY = null;
let scrollX = null;
let scrollY = null;

$(window).scroll(function () {
	scrollX = $(window).scrollLeft();
	scrollY = $(window).scrollTop();

	$(".cursor-circle").addClass("invisible");
});

$(document).mousemove(function(e){
	mouseX = scrollX + e.clientX;
	mouseY = scrollY + e.clientY;
	$(".cursor-circle").css("left", mouseX + 'px');
	$(".cursor-circle").css("top", mouseY + 'px');

$(".cursor-circle").removeClass("invisible");
});


// 커서 클릭 효과 //// 커서 클릭 효과 //
// 기본 //
$(window).click(function () {
	$(".cursor-circle").stop().animate( {
		width: '10px',
		height: "10px"
	},40);
	$(".cursor-circle").delay(40).animate( {
		width: '20px',
		height: "20px"
	});
});

// 강조 //
$(function(){
	$('.f-jq').mouseover(function(){
		$(".cursor-circle").stop().animate( {
			width: '40px',
			height: "40px" 
		});
	});	
	$('.f-jq').mouseleave(function(){
		$(".cursor-circle").stop().animate( {
			width: '20px',
			height: "20px"
		});
	});	
})

// 기타 총합 기능 //// 기타 총합 기능 //// 기타 총합 기능 //
// 글자 색 바꾸기 //
function fNavColorDark(){
	// header 부분
	$("#f-nav .logo > a, #f-nav > article > .btn-nav > a").css("color", 'rgb(250, 248, 235)');

	$("#f-nav .logo > a").hover(
		function(){
			$(this).css("color", 'rgb(248, 140, 101)');
		},function(){
			$(this).css("color", 'rgb(250, 248, 235)');
		}
	)

	$("#f-nav > article > .btn-nav > a").hover(
		function(){
			$(this).css("color", 'rgb(248, 140, 101)');
		},function(){
			$(this).css("color", 'rgb(250, 248, 235)');
		}
	)

	//contact 부분
	$("#f-nav > article > p").css("color", 'rgb(250, 248, 235)');
}

function fNavColorLight(){
	// header 부분
	$("#f-nav .logo > a, #f-nav > article > .btn-nav > a").css("color", 'rgb(92, 92, 92)');
	$("#f-nav .logo > a").hover(
		function(){
			$(this).css("color", 'rgb(248, 140, 101)');
		},function(){
			$(this).css("color", 'rgb(92, 92, 92)');
		}
	)

	$("#f-nav > article > .btn-nav > a").hover(
		function(){
			$(this).css("color", 'rgb(248, 140, 101)');
		},function(){
			$(this).css("color", 'rgb(92, 92, 92)');
		}
	)

	//contact 부분
	$("#f-nav > article > p").css("color", 'rgb(92, 92, 92)');

}

