// Hamburger //
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__items'),
        menuItems = document.querySelectorAll('.header__items_nav'),
        header = document.querySelector('.header'),
        hamburger = document.querySelector('.hamburger'),
        body = document.querySelector('body');

    function toggleMenu() {
        hamburger.classList.toggle('hamburger_active');
        header.classList.toggle('header__active');
        menu.classList.toggle('header__items_active');
        if (hamburger.classList.contains('hamburger_active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }

    hamburger.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    })
});


// Modal //



$('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn();
});
$('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order').fadeOut();
});



$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "php/telegram.php",
        data: $(this).serialize()
    }).done(function() {
        $('#consultation').fadeOut();
        $('.overlay, #order').fadeIn();
        $('form').trigger('reset');
    });
    return false;
});

$('input[name=user_phone]').mask("+38 (999) 999-99-99");
