// page 이동 //// page 이동 //// page 이동 //// page 이동 //
let section = null;
let index = null;
let tg = null;
let contents = null;

$(function(){
	contents = $('#wrap > section');
// 메뉴 클릭시 이동
	$('#main .menu li').click(function(e){
		e.preventDefault(); //a태그 기능 막기
	
		index = $(this).index();
		section = $(contents).eq(index);
	
		tg = section.offset().top;
		$('html, body').stop().animate({ scrollTop: tg });
	});

// 스크롤 내릴 경우
	$(window).on("wheel", function(e){	
		const fcus = $(window).scrollTop();		
		const upDown = e.originalEvent.wheelDelta;

		for(i = 0; i < contents.length; i++){
			section = $(contents).eq(i);
			var sectionP = $(contents).eq(i+1);
			var sectionM = $(contents).eq(i-1);
			tg = section.offset().top;
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
			section = $(contents).eq(i);
			var sectionP = $(contents).eq(i+1);
			var sectionM = $(contents).eq(i-1);
			tg = section.offset().top;
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
})


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
		width: '15px',
		height: "15px"
	},40);
	$(".cursor-circle").delay(40).animate( {
		width: '30px',
		height: "30px"
	});
});

// 강조 //
$(function(){
	$('.f-jq').mouseover(function(){
		$(".cursor-circle").stop().animate( {
			width: '70px',
			height: "70px" 
		});
	});	
	$('.f-jq').mouseleave(function(){
		$(".cursor-circle").stop().animate( {
			width: '30px',
			height: "30px"
		});
	});	
})



// PAGE 효과 //// PAGE 효과 //// PAGE 효과 //// PAGE 효과 //
$(window).scroll(function () {
	const fcus = $(window).scrollTop();

	for(i = 0; i < contents.length; i++){
		section = $(contents).eq(i);
		tg = section.offset().top;

		if(fcus == tg && i == 0){ //1page
			mainH1();
			$('.custom-scroll > article').animate( {
				width: '20%'
			},700);
		}else if(fcus == tg && i == 1){ //2page
			$('.custom-scroll > article').animate( {
				width: '40%'
			},700);
		}else if(fcus == tg && i == 2){ //3page
			$('.custom-scroll > article').animate( {
				width: '60%'
			},700);
		}
	}
});


// [#main] 1page //// [#main] 1page //// [#main] 1page //// [#main] 1page //
$(function(){
	mainH1();
})

// I'm 소개 h1 글자 보이게하기
function mainH1(){
	$('#main h1').css({
		opacity: '0'
	}).animate( {
		opacity: '1'
	},700);
}



//project
$(document).ready(function () {

    var current = 0;
    var setIntervalId;

    $('.web_mn').mouseover(function () {
        clearInterval(setIntervalId);
    });
    $('.web_mn').mouseleave(function () {
        timer();
    });



    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 4) {

                n = 0;
            };

            move(n);
        }, 3000);
    };

    function move(i) {
        if (i == current) return;

        var currentEl = $('.web_mn img').eq(current);
        var nextEl = $('.web_mn img').eq(i);

        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });
        current = i;
    };




    // 탭메뉴
    $('.con').hide();
    $('.con').eq(0).show();

    $('.tabMn li').click(function () {
        let i = $(this).index();
        //console.log(i)
        //$('.con').hide();
        $('.con').each(function () {
            if ($(this).show()) {
                $(this).hide();
            }
        });

        $('.con').eq(i).show();
    });

});

//skills
$(document).ready(function () {
    var scene01Num = 1;

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 1300 && scene01Num == 1) {
            scene01Num = 0;
            $('#skill .in_box01').stop().delay(0).css({ top: '300px', }).animate({ top: '60px', opacity: '1' }, 1000);
            $('#skill .in_box02').stop().delay(300).css({ top: '300px' }).animate({ top: '90px', opacity: '1' }, 1000);
            $('#skill .in_box03').stop().delay(600).css({ top: '300px' }).animate({ top: '210px', opacity: '1' }, 1000);
            $('#skill .in_box04').stop().delay(900).css({ top: '300px' }).animate({ top: '210px', opacity: '1' }, 1000);
            $('#skill .in_box05').stop().delay(1200).css({ top: '300px' }).animate({ top: '180px', opacity: '1' }, 1000);
        }
        else if (scrollTop < 1200 && scene01Num == 0) {
            scene01Num = 1;
            $('#skill .in_box01').stop().css({ top: '60px', opacity: '1' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box02').stop().css({ top: '90px', opacity: '1' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box03').stop().css({ top: '210px', opacity: '1' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box04').stop().css({ top: '210px', opacity: '1' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box05').stop().css({ top: '180px', opacity: '1' }).animate({ top: '300px' }, 1000);
        }
    });
});

//rproflie
$(document).ready(function () {

    var scene01 = true;

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 205 && scene01 == true) {
            scene01 = false;
            $('.box .box1').stop().delay(100).animate({ left: '460px', opacity: '1' });
            $('.box .box2').stop().delay(100).animate({ left: '800px', opacity: '1' });
        } else if (sct < 200 && scene01 == false) {
            scene01 = true;
            $('.box .box1').stop().delay(0).animate({ left: '400px', opacity: '0' });
            $('.box .box2').stop().delay(0).animate({ left: '700px', opacity: '0' });
        }
        console.log(scroll)
    });
});