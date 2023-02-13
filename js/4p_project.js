// [#project] 4page //// [#project] 4page //// [#project] 4page //// [#project] 4page //
let bannerIndex = null;


$(function(){		
    $(".sub-banner a").click(function(e){
		e.preventDefault(); //a태그 기능 막기

        bannerIndex = $(this).index();

        $(this).children("span").addClass("invisible");
        $(this).siblings().children("span").removeClass("invisible");

        // mainImg
        $('.main-banner > img:eq('+bannerIndex+')').removeClass("invisible");
        $('.main-banner > img:eq('+bannerIndex+')').siblings().addClass("invisible");

        // footer
        $('.project-footer > li:eq('+bannerIndex+')').removeClass("invisible");
        $('.project-footer > li:eq('+bannerIndex+')').siblings().addClass("invisible");
        
    });			
    
    $(".sub-banner img").click(function(){
        $(".sub-banner img").css({
            filter: 'brightness(30%)'
        })
        $(this).css({
            filter: 'brightness(100%)'
        })
    });
})


