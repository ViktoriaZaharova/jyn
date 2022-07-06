$('.btn-view-password').on('click', function (e) {
    e.preventDefault();

    if ($(this).siblings('.input-password').attr('type') === 'password') {
        $(this).addClass('view');
        $(this).siblings('.input-password').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $(this).siblings('.input-password').attr('type', 'password');
    }
    return false;
});


// input search
$('.form-search input').on('keyup change', function() {
    if (this.value.length > 0) {
        $(this).parents('.form-search').addClass('active');
        $(this).parents('.search-wrapper').find('.search-result').fadeIn();
    } else {
        $(this).parents('.search-wrapper').find('.search-result').fadeOut();
        $(this).parents('.form-search').removeClass('active');
    }
});

$('.input-price').on('keyup change', function() {
    if (this.value.length > 0) {
        $(this).parents('.dropdown-price').addClass("active");
        // $(this).parents('.search-wrapper').find('.search-result').fadeIn();
    } else {
        $(this).parents('.dropdown-price').removeClass("active");
        // $(this).parents('.form-search').removeClass('active');
    }
});

$('.clear-search').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.form-search').removeClass('active');
    $(this).parents('.form-search').find('input').val('');
    $(this).parents().find('.search-result').fadeOut();
});

$('.btn-burger').on('click', function () {
    $('body, html').toggleClass('no-scroll');
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
});


$('.dropdown-toggle').click(function () {
   $(this).toggleClass('active').siblings('.dropdown-menu').fadeToggle();

});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".dropdown-menu"); // тут указываем ID элемента
    var btn = $('.dropdown-toggle');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
        btn.removeClass('active')
    }
});



// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay, .btn-close-modal'),
        modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


$(document).ready(function () {
//     // Dealing with Input width
//     let el = document.querySelector(".textarea-resize");
//     let widthMachine = document.querySelector(".textarea-resize");
//     el.addEventListener("keyup", () => {
//         widthMachine.innerHTML = el.value;
//     });
//
// // Dealing with Textarea Height
//     function calcHeight(value) {
//         let numberOfLineBreaks = (value.match(/\n/g) || []).length;
//         // min-height + lines x line-height + padding + border
//         let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
//         return newHeight;
//     }
//
//     calcHeight();
//
//     let textarea = document.querySelector(".textarea-resize");
//     textarea.addEventListener("keyup", () => {
//         textarea.style.height = calcHeight(textarea.value) + "px";
//     });

    // var textarea = document.querySelector('textarea-resize');
    //
    // textarea.addEventListener('keydown', autosize);
    //
    // function autosize(){
    //     var el = this;
    //     setTimeout(function(){
    //         el.style.cssText = 'height:auto; padding:0';
    //         // for box-sizing other than "content-box" use:
    //         // el.style.cssText = '-moz-box-sizing:content-box';
    //         el.style.cssText = 'height:' + el.scrollHeight + 'px';
    //     },0);
    // }


});
