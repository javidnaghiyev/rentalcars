$(document).ready(function(){
    let generalSearch = $("#generalSearch").height();
    let lupaHeight = (generalSearch - $("#magnifyingGlass").height())/2
    $("#magnifyingGlass").css({
        marginLeft: "15px",
        marginTop: `${lupaHeight+1}px`
    })

    var searchCharacter = $("#generalSearch").val().length;
    $("#generalSearch").on('keyup', function(){
        searchCharacter = $("#generalSearch").val().length;

        if (searchCharacter >= 1){
            $("#generalSearch").removeClass('searchbarColorChangeReverse')
            $("#generalSearch").addClass('searchbarColorChangeForward')
        }else{
            $("#generalSearch").removeClass('searchbarColorChangeForward')
            $("#generalSearch").addClass('searchbarColorChangeReverse')
        }
    })
    
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