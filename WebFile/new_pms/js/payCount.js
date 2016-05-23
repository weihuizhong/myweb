$(function(){
	$('.block').on('mouseenter', function() {
		$(this).addClass('sel');
		var src = $(this).find('img').attr('src').replace(/\.png/,"");
		$(this).find('img').attr('src',src + '-a.png');
	});
	$('.block').on('mouseleave',function(){
		$(this).removeClass('sel');
		var src = $(this).find('img').attr('src').replace(/-a/,"");
		$(this).find('img').attr('src',src);
	});
})