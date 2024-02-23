// Hamburger //
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__items'),
    menuItem = document.querySelectorAll('.header__items_nav'),
    hamburger = document.querySelector('.hamburger'),
    header = document.querySelector('.header');
    fixed = document.querySelector('.promo__fixed');
    fixedImg = document.querySelector('.promo__fixed_img');
    fixedText = document.querySelector('.promo__fixed_text');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__items_active');
        header.classList.toggle('header__active');
        fixed.classList.toggle('promo__fixed_active');
        fixedImg.classList.toggle('promo__fixed_img_active');
        fixedText.classList.toggle('promo__fixed_text_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__items_active');
            header.classList.toggle('header__active');
            fixed.classList.toggle('promo__fixed_active');
            fixedImg.classList.toggle('promo__fixed_img_active');
            fixedText.classList.toggle('promo__fixed_text_active');
        })
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
