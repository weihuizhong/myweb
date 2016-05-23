$(function(){
	//选框单击效果
	$('.check-con span').add('.check-con label').add('.pay-item span').add('.pay-item label').add('.pic-head span').add('.pic-head label').add('.pay-all span').add('.pay-all label').on('click', function () {
		var ch = $(this).siblings('input[type="checkbox"]').attr('checked');
		$(this).siblings('input[type="checkbox"]').attr('checked',!ch)
		var checkEl = $(this).siblings('input[type="checkbox"]')
		setLabel(checkEl)
	})
	//hover显示修改
	$('.check-con').on('mouseenter',function () {
		$(this).find('a').show()
	})
	$('.check-con').on('mouseleave',function () {
		$(this).find('a').hide()
	})
	// 左边全选
	$('.pic-head span').add('.pic-head label').on('click', function () {
		var ch = $(this).siblings('input').attr('checked')
		if(!ch){
			ch = false;
		}
		$(this).parent().siblings('.pic-body').find('input')
		.attr('checked',ch)
		.each(function () {
			setLabel($(this))
		})
	})
	// 右边全选
	$('.pay-all span').add('.pay-all label').on('click', function () {
		var ch = $(this).siblings('input').attr('checked')
		if(!ch){
			ch = false;
		}
		$(this).parent().siblings('.row').find('input')
		.attr('checked',ch)
		.each(function () {
			setLabel($(this))
		})
	})
	//左边单选
	$('.check-con span').add('.check-con label').on('click', function (){
		var ch = true;
		$(this).parents('.pic-body').find('input')
		.each(function () {
			if(!$(this).attr('checked')){
				ch = false
			}
		})
	   	var all = $(this).parents('.pic-body').siblings('.pic-head').find('input')
		all.attr('checked',ch)
		setLabel(all)
	})
	//右边单选
	$('.pay-item span').add('.pay-item label').on('click', function (){
		var ch = true;
		$(this).parents('.row').find('input[type="checkbox"]')
		.each(function () {
			if(!$(this).attr('checked')){
				ch = false
			}
		})
	   	var all = $(this).parents('.row').siblings('.pay-all').find('input')
		all.attr('checked',ch)
		setLabel(all)
	})
	//修改按钮点击
	$('.check-con a').on('click', function () {
		$('.row').find('input[type="text"]').attr('disabled',false).addClass('editable')
		$(this).addClass('clickable')
	})
	//费用项保存
	$('.save').on('click', function () {
		$('.row').find('input[type="text"]').attr('disabled',true).removeClass('editable')
		$('.check-con a').removeClass('clickable')
	})
	//支付方式选择
	$('.type span').on('click',function(){
		$('.types').toggle()
	})
	$('.types li').on('click',function(){
		$('.type span').html($(this).html())
		$('.types').hide()
	})

	function setLabel (el) {
		var isCheck = el.attr('checked')
		console.log(el)
		console.log(isCheck)
		if(isCheck) {
			el.siblings('label').addClass('checked').html('<img style="height:80%;width:80%;vertical-align:middle;" src="img/icon/check.png">')
		}else{
			el.siblings('label').removeClass('checked').html(' ');
		}
	}
})