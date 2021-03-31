$(document).ready(function () {
    $("header").load('header.html')

    $(".preloadExterior :nth-child(3) > img").css({
        borderTopRightRadius: '5px'
    })

    $(".preloadInterior :nth-child(5) > img").css({
        borderBottomRightRadius: '5px'
    })

    $(".carPhotos img").on('click', function () {
        let imagesrc = $(this).attr('src')
        $('#mask').addClass('fade-in')
        $('.mask').css({
            display: 'block'
        })
    })

    $("img").attr('loading', 'lazy')

    $(document).on('keyup', function (e) {
        if (e.key === 'Escape') {
            $('.mask').css({
                display: 'none'
            })
        }
    })

    //hide draggable album when display > 768

    //start flickity


    //hide second column of photos
    const thirdChildRightAbove = $(".preloadExterior :nth-child(3)")
    const fifthChildRightAbove = $(".preloadExterior :nth-child(5)")
    const fifthChildRightBottom = $(".preloadInterior :nth-child(5)")
    const thirdChildRightBottom = $(".preloadInterior :nth-child(3)")

    function hideSecondColumn() {
        if (window.innerWidth < 1330) {
            thirdChildRightAbove.hide()
            thirdChildRightBottom.hide()
            fifthChildRightAbove.hide()
            fifthChildRightBottom.hide()

            $(".preloadExterior :nth-child(2) > img").css({
                borderTopRightRadius: '5px'
            })

            $(".preloadInterior :nth-child(4) > img").css({
                borderBottomRightRadius: '5px'
            })


            $(".preloadExterior :nth-child(2), .preloadExterior :nth-child(3)").css({
                marginBottom: '0'
            })

            $(".preloadInterior :nth-child(2), .preloadInterior :nth-child(3)").css({
                marginBottom: '0'
            })
        }
        if (window.innerWidth > 768) {
            $('.carPhotos768').flickity({
                freeScroll: true,
                contain: true,
                // disable previous & next buttons and dots
                prevNextButtons: false,
                pageDots: false
            })
            $('.carPhotos768').hide()
        }

        if (window.innerWidth < 768) {
            $('.carPhotos').hide()
            $('.carPhotos768').show()
            $('.carPhotos768').flickity({
                freeScroll: true,
                contain: true,
                // disable previous & next buttons and dots
                prevNextButtons: false,
                pageDots: false
            })


        }

    }
    hideSecondColumn();
    //add as much margin + 4px to the left of the exterior images as the width of the main image
    let heroSize = $('#heroCarousel img').width()
    let interiorWrapSize = $('.preloadExterior768').width()
    let leftForInterior768 = heroSize + interiorWrapSize
    $('.preloadExterior768').css({
        left: `${heroSize}` + 'px'
    })
    $('.preloadInterior768').css({
        left: `${leftForInterior768+3}` + 'px'
    })

    $(window).on('resize', function () {
        var heroSize = $('#heroCarousel img').width()
        var interiorWrapSize = $('.preloadExterior768').width()
        var leftForInterior768 = heroSize + interiorWrapSize
        //this one prevents flickity from changing it when resizing
        $('.preloadExterior768').css({
            left: `${heroSize}` + 'px'
        })
        $('.preloadInterior768').css({
            left: `${leftForInterior768+3}` + 'px'
        })

        if (window.innerWidth > 1330) {
            thirdChildRightAbove.show();
            thirdChildRightBottom.show();
            fifthChildRightAbove.show();
            fifthChildRightBottom.show();

        }
        if (window.innerWidth < 1330) {
            thirdChildRightAbove.hide();
            thirdChildRightBottom.hide();
            fifthChildRightAbove.hide();
            fifthChildRightBottom.hide();
        }
        if (window.innerWidth > 768) {
            $('.carPhotos').show()
            $('.carPhotos768').hide()
        }

        if (window.innerWidth < 768) {
            $('.carPhotos').hide()
            $('.carPhotos768').show()
            $('.carPhotos768').flickity({
                freeScroll: true,
                contain: true,
                // disable previous & next buttons and dots
                prevNextButtons: false,
                pageDots: false
            })


        }
    })

})
