$(function () {
    $('.person-code input').on('keyup', function () {
        if ($(this).val() != '') {
            $(this).siblings('span').show()
        } else {
            $(this).siblings('span').hide()
        }
        if (isContent() >=  $('.person-code input').length) {
            $('.setting-btn-area button').addClass('save-btn-active')
        } else {
            $('.setting-btn-area button').removeClass('save-btn-active')
        }
    });
    function isContent() {
        var isC = 0;
        $('.person-code input').each(function () {
            if ($.trim($(this).val()) != '') {
                isC++;
            }
        });
        return isC;
    }

    $('.person-code .input-area').on('mouseenter', function () {
        if ($(this).find('input').val() != '') {
            $(this).find('.input-eyes').show();
        }
    });
    $('.person-code .input-area').on('mouseleave', function () {
        $(this).find('.input-eyes').hide();
    });
    $('.person-code .input-eyes').on('click', function () {
        $(this).toggleClass('dis-eyes')
        if ($(this).hasClass('dis-eyes')) {
            $(this).siblings('input').prop('type', 'text')
        } else {
            $(this).siblings('input').prop('type', 'password')
        }
    })
    $('.expend-setting').on('click', function () {
        $(this).toggleClass('expend-setting')
        $('.expend-item').slideToggle();
    })
})