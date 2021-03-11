$(document).ready(function(){
    $('header').load('header.html')

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 10000,
        prevNextButtons: false,
        pageDots: false
});


$(".bigSearchWrapper").css({
    top: $(".bigSearchWrapper").parent().height()/2 - $(".bigSearchWrapper").height()/2
});


$(".where").on('mousedown', function(){
    $(this).find(".floater").css({
        transition: 'transform 0.1s',
        transform: 'translate(0, -15px)',
        fontSize: '0.8rem',
        opacity: '0.8'
    })

})
$(".where").on('focusout', function(){
    if ($(this).find("input").val().length < 1){
        $(this).find(".floater").css({
            transition: 'transform 0.1s',
            transform: 'translate(0, 0)',
            fontSize: "1rem",
            opacity: '1'
        })
    }
})

})

