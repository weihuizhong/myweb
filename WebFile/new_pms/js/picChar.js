$(function () {
	$('.char-detail').on('click', function () {
		$(this).toggleClass('arrow');
		$(this).siblings('.col-menu').toggle();
	});
	addNodata($('.pic1'))
	function addNodata (el) {
		var no =   '<div class="nodata"> <p>暂时没有收款哦！</p> </div>';
		el.css({
			position: 'relative'
		})
		.append(no);
	}
});