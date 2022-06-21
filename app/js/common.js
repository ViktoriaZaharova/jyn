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
        $('.form-search').addClass('active');
        $('.search-result').fadeIn();
    } else {
        $('.search-result').fadeOut();
        $('.form-search').removeClass('active');
    }
});

$('.clear-search').on('click', function (e) {
    e.preventDefault();
    $('.form-search').removeClass('active');
    $('.form-search input').val('');
    $('.search-result').fadeOut();
});

