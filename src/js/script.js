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



// Slider //
let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }

    if(slides.length > 0) {
        slides[slideIndex - 1].classList.add('show');
    }
}
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
