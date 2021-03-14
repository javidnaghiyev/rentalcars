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

    $(document).on('keyup', function(e){
        if (e.key === 'Escape'){
            $('.mask').css({
                display: 'none'
            })
        }
    })

    
    $('h2').on('click', function(){
    let homeRequest = new XMLHttpRequest();
    homeRequest.open('GET', 'index.html')
    homeRequest.onload = function(){
        console.log(homeRequest.responseText);
        let space = document.querySelector('main')
        let newhtml = new Parser();
        
        if (this.status === 200){
            $('main').children().css({display: 'none'})
            space.insertAdjacentHTML('afterbegin', homeRequest.responseXML)
        }else{
            space.insertAdjacentHTML('afterbegin', 'ERROR 404')
        }
    }
    homeRequest.send()
    })

})
