$(function () {
	$(".left-fixed table").freezeHeader();
	$(".right-active table").freezeHeader();

	$('.right-active').on('scroll', function () {
		var ol = $(this).offset().left
		var l = $(this).scrollLeft() 
		$(this).find('#hdtbl-2').css({
			left: -l + ol + 'px'
		})
	})

	$('tbody tr').attr('islock','false')
	function enter(el,selector,tr) {
		el.addClass('row-sel');
		var index = el.index(selector);
		// console.log(selector)
		// console.log(index)
		$(tr).eq(index).addClass('row-sel');
	}
	function leave (el,selector,tr) {
		if(el.attr('islock')=='false'){
		    el.removeClass('row-sel');
		    var index = el.index(selector);
		    $(tr).eq(index).removeClass('row-sel');
	    }
	}
	//解决hover问题
	$('body').delegate('.left-fixed tbody tr:not(.qz-sub-child)','mouseenter', function () {
		enter($(this),'.left-fixed tbody tr:not(.qz-sub-child)','.right-active tbody tr:not(.qz-sub-child)')
	});
	$('body').delegate('.left-fixed tbody tr:not(.qz-sub-child)','mouseleave', function () {
	    leave($(this),'.left-fixed tbody tr:not(.qz-sub-child)','.right-active tbody tr:not(.qz-sub-child)')
	});
	$('body').delegate('.right-active tbody tr:not(.qz-sub-child)','mouseenter', function () {
	    enter($(this),'.right-active tbody tr:not(.qz-sub-child)','.left-fixed tbody tr:not(.qz-sub-child)')
	});
	$('body').delegate('.right-active tbody tr:not(.qz-sub-child)','mouseleave', function () {
	    leave($(this),'.right-active tbody tr:not(.qz-sub-child)','.left-fixed tbody tr:not(.qz-sub-child)')
	});
	//点击锁定颜色
	$('body').delegate('.left-fixed tbody tr:not(.qz-sub-child)','click', function () {
		var islock =$(this).attr('islock');
		if(islock == 'false'){
			islock = 'true';
			// enter($(this),'.left-fixed tbody tr:not(.qz-sub-child)','.right-active tbody tr:not(.qz-sub-child)')
		}else{
			islock = 'false';
			// leave($(this),'.left-fixed tbody tr:not(.qz-sub-child)','.right-active tbody tr:not(.qz-sub-child)')
		}
	    $(this).addClass('row-sel').attr('islock',islock).siblings('tr:not(.qz-sub-child)').removeClass('row-sel').attr('islock','false');
	    var index = $(this).index('.left-fixed tbody tr:not(.qz-sub-child)');
	    $('.right-active tbody tr:not(.qz-sub-child)').eq(index).addClass('row-sel').attr('islock',islock).siblings('tr:not(.qz-sub-child)').removeClass('row-sel').attr('islock','false');
	    leave($(this),'.right-active tbody tr:not(.qz-sub-child)')
	});
	$('body').delegate('.right-active tbody tr:not(.qz-sub-child)','click', function () {
		var islock =$(this).attr('islock');
		if(islock == 'false'){
			islock = 'true';
		}else{
			islock = 'false';
		}
	    $(this).addClass('row-sel').attr('islock',islock).siblings('tr:not(.qz-sub-child)').removeClass('row-sel').attr('islock','false');
	    var index = $(this).index('.right-active tbody tr:not(.qz-sub-child)');
	    $('.left-fixed tbody tr:not(.qz-sub-child)').eq(index).addClass('row-sel').attr('islock',islock).siblings('tr:not(.qz-sub-child)').removeClass('row-sel').attr('islock','false');
	    leave($(this),'.left-fixed tbody tr:not(.qz-sub-child)')
	});
	//滚动固定头部
	$(window).on('scroll', function (event) {
		if($(window).scrollTop() >= 125) {
			// $('thead').addClass('fixed-to-top')
			// $('.left-fixed th').each(function () {
			// 	var theadWidth = $(this).parent('thead').innerWidth()
			// 	// $('.left-fixed tbody').width(365)
			// 	var thWidth = $(this).innerWidth();
			// 	console.log(thWidth)
			// 	var index = $(this).index();
			// 	$('.left-fixed tbody tr:first-child td').eq(index).width(thWidth);
			// })
			// $('.right-active thead tr:nth-child(2) th').each(function () {
			// 	var theadWidth = $(this).parent('thead').innerWidth()
			// 	// $('.left-fixed tbody').width(365)
			// 	var thWidth = $(this).innerWidth();
			// 	console.log(thWidth)
			// 	var index = $(this).index();
			// 	$('.right-active tbody tr:first-child td').eq(index).width(thWidth);
			// })
		}else if($(window).scrollTop() == 0) {
			// $('.table-container').removeClass('fixed-to-top')
		}
	})
	//展开
	$('body').delegate('.col-btn', 'click', function () {
		var id = $(this).attr("for-data")
		var index = $(this).parents('tr').toggleClass('sub').index()
		$('.right-active tbody tr').eq(index).toggleClass('sub')
		var expend = $(this).parents('tr').hasClass('sub')
		if (expend) {
			$(this).find('span').html('-');
			expend = false;
		} else {
			$(this).find('span').html('+');
			expend = true;
		}
		$(id).toggle()
	})

	// $.initLoad(1);
})