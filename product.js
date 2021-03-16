$(document).ready(function(){
    $("header").load('header.html')

    $(".preloadExterior :nth-child(3) > img").css({
        borderTopRightRadius: '5px'
    })

    $(".preloadExterior :nth-child(2), .preloadExterior :nth-child(3)").css({
        marginBottom: '0'
    })

    $(".preloadInterior :nth-child(5) > img").css({
        borderBottomRightRadius: '5px'
    })
    $(".preloadInterior :nth-child(2), .preloadInterior :nth-child(3)").css({
        marginBottom: '0'
    })

    $(".carPhotos img").on('click', function(){
        let imagesrc = $(this).attr('src')
        $('#mask').addClass('fade-in')
        $('.mask').css({
            display: 'block'
        })
    })

    $("img").attr('loading', 'lazy')

    $(document).on('keyup', function(e){
        if (e.key === 'Escape'){
            $('.mask').css({
                display: 'none'
            })
        }
    })

    
    $('.logoWrapper').ready(function(){
        $(this).on('click', function(){
            window.location.href = 'index.html'
        //     let homeRequest = new XMLHttpRequest();
        //     homeRequest.onload = function(){
        //     $('html').empty()
        //     let space = document.querySelector('html')
            
        //     space.insertAdjacentHTML('afterbegin', homeRequest.responseText)
        // }
        // homeRequest.open('get', 'index.html');
        // homeRequest.send()
        })
    })

})
