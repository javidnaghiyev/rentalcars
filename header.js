$(document).ready(function(){
    //Colours
    let blueAccent = '#4b7bec'

    let generalSearch = $("#generalSearch").height();
    let lupaHeight = (generalSearch - $("#magnifyingGlass").height())/2
    $("#magnifyingGlass").css({
        marginLeft: "15px",
        marginTop: `${lupaHeight+1}px`
    })

    $("#generalSearch").on('click', function(){
        $(this).css({
            border: `1px solid ${blueAccent}`
        })
    })
    $("#generalSearch").blur(function(){
        $(this).css({
            border: 'none'
        })
    })

    // var searchCharacter = $("#generalSearch").val().length;
    // $("#generalSearch").on('keyup', function(){
    //     searchCharacter = $("#generalSearch").val().length;

    //     if (searchCharacter >= 1){
    //         $("#generalSearch").removeClass('searchbarColorChangeReverse')
    //         $("#generalSearch").addClass('searchbarColorChangeForward')
    //     }else{
    //         $("#generalSearch").removeClass('searchbarColorChangeForward')
    //         $("#generalSearch").addClass('searchbarColorChangeReverse')
    //     }
    // })
    
    // $(".headerLinks li").on('mouseenter', function(){
    //     $(this).css({
    //         backgroundColor: "#4da8da"
    //     })
    // })
    //     $(".headerLinks li").on('mouseleave', function(){
    //     $(this).css({
    //         backgroundColor: "transparent"
    //     })
    // })
})