(function($){
	var loadingHtml = [
			'<div class="loading"> <div class="spinner"> <div class="spinner-container container1"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> <div class="spinner-container container2"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> <div class="spinner-container container3"> <div class="circle1"></div> <div class="circle2"></div> <div class="circle3"></div> <div class="circle4"></div> </div> </div> </div>',
			'<div class="loading"> <div class="spinner"> <div class="cube1"></div> <div class="cube2"></div> </div>'
			]
	$.initLoad = function (type) {
		$('body').append(loadingHtml[type])
	}
	$.removeLoading = function () {
		$('.loading').remove()
	}
	$.showLoading = function () {
		$('.loading').show()
	}
	$.hideLoading = function () {
		$('.loading').hide()
	}
})($)