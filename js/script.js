$(function() {
    
    $('#1999').fadeIn();
    $('#tip').fadeIn();
    
    $('.year').mouseenter(function() {
        var yearID = '#' + $(this).children().text();
        $('.info_block').slideUp(200);
        $(yearID).slideDown(200);
    });
})