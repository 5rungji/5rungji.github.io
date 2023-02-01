// [#project] 4page //// [#project] 4page //// [#project] 4page //// [#project] 4page //


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
