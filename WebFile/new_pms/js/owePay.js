$(function(){
	$("table").freezeHeader();
	function enter(el,tr) {
		el.addClass('row-sel').siblings('tr').removeClass('row-sel');
		var index = el.index();
	}
	$('body').delegate('tbody tr', 'click', function () {
		enter($(this),'')
	})

	$('.col-btn').on('click', function () {
		var id = $(this).attr("for-data")
		$(this).parents('tr').toggleClass('sub')
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
})