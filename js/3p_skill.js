// [#skill] 3page //// [#skill] 3page //// [#skill] 3page //// [#skill] 3page //


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
