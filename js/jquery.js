
// index 이동
$(function () {
	var menu = $('.nav > li');
	var contents = $('#wrap > section');

	$('.nav> li').click(function (event) {
		event.preventDefault();

		var tg = $(this);
		var i = tg.index();

		var section = $('#wrap > section').eq(i);
		var tt = section.offset().top;

		$('html, body').stop().animate({ scrollTop: tt });
	});
});

