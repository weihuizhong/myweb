$(function () {	
	var tapWidth = $('.param ul li').outerWidth()
	var process = 1;
	$(window).on('resize', function () {
		var beforePos = parseInt(-$('.param ul').position().left / tapWidth)
		tapWidth = $('.param ul li').outerWidth()
		$('.param ul').css({
				left: beforePos * tapWidth
		})
	})
	//设置进度条
	function setProcess (index) {
		$('.process').width(index * 25 +'%')
		$('.left-nav li').each(function () {
			if($(this).index() == index - 1){
				$(this).addClass('li-active').siblings('li').removeClass('li-active')
			}
		})
	}
	//侧边tap切换
	$('.left-nav li').on('click', function () {
		var index = $(this).index()
		if (index != 0){
			$('.back').show()
		}
		$('.param li').eq(index).removeClass('hide').siblings('li').addClass('hide')
		setProcess(index + 1)
	})

	//下一步操作
	$('.next').on('click', function () {
		var next = $('.left-nav .li-active').index() + 1 
		if(next < 4) {
			$('.param li').eq(next).removeClass('hide').siblings('li').addClass('hide')
			$('.back').show()
			process ++ 
			setProcess(process)
		} else {
			window.location.href = 'http://betapms.zh28.com/index.php?s=/Home/Public/login.html'
		}
	})

	//上一步操作
	$('.back').on('click', function () {
		var next = $('.left-nav .li-active').index() - 1 
		if(next>=0){
			$('.param li').eq(next).removeClass('hide').siblings('li').addClass('hide')
			$('.back').show()
			process -- 
			setProcess(process)
			if(next==0){
				$('.back').hide()
			}
		}
	})

	$('.exit').on('click', function () {
		window.location.href = 'http://betapms.zh28.com/index.php?s=/Home/Public/login.html'
	})

})