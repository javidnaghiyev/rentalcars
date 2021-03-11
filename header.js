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
})