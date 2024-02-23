$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "../php/telegram.php",
        data: $(this).serialize()
    }).done(function() {
        $('#consultation').fadeOut();
        $('.overlay, #order').fadeIn();
        $('form').trigger('reset');
    });
    return false;
});