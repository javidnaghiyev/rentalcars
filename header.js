$(document).ready(function(){
    //Colours
    let blueAccent = '#4b7bec'

    let generalSearch = $("#generalSearch").height();
    let lupaHeight = (generalSearch - $("#magnifyingGlass").height())/2
    $("#magnifyingGlass").css({
        marginLeft: "15px",
        marginTop: `${lupaHeight+1}px`
    })

    $("#generalSearch").on('mousedown', function(){
        $(this).css({
            border: `1px solid ${blueAccent}`
        })
    })
    $("#generalSearch").blur(function(){
        $(this).css({
            border: 'none'
        })
    })


    //toggle profile option if logged in
    function profileShow(){
        let isLogged = false;
        if(isLogged){
            $('.loginWrapper').hide()
        }

    }
    profileShow()

    if(window.location.pathname === '/upload.html'){
        $('.loginWrapper').css({
            opacity: '0'
        })
        $('.loginWrapper *').css({
            display: 'none'
        })
    }



    function hamburgerAnimation(){
        if ($('#hl1').hasClass('hl1a')){
            $('#hl1').addClass('hl1ab')
            $('#hl2').addClass('hl2ab')
            $('#hl3').addClass('hl3ab')

            $('#hl1').removeClass('hl1a')
            $('#hl2').removeClass('hl2a')
            $('#hl3').removeClass('hl3a')

            $('#hl1').removeClass('hl1ab')
            $('#hl2').removeClass('hl2ab')
            $('#hl3').removeClass('hl3ab')
        }else{
            $('#hl1').addClass('hl1a')
            $('#hl2').addClass('hl2a')
            $('#hl3').addClass('hl3a')

            
        }
    }
    
    $('.hamburgerWrapper').on('click', hamburgerAnimation)

    $('.hamburgerWrapper').on('click', function(){
        if($('.mobileHeaderLinksWrapper').height() < 1){
            $('.mobileHeaderLinksWrapper').css({
                height: '200px'
            })
            $('.mobileHeaderLinksWrapper div').css({
                display: 'block'
            })
        }else{
            $('.mobileHeaderLinksWrapper').css({
                height: '0'
            })
            $('.mobileHeaderLinksWrapper div').css({
                display: 'none'
            })
        }
    })
})