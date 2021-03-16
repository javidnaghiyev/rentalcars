$(document).ready(function(){
    $('header').load('header.html')

    $('.metadata').find('.carName').attr('title', `${$('.metadata').find('.carName').text()}`)

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 7000,
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
    $(this).find('ul').css({display: 'block'})
    // if ($(this).find('ul').hasClass('makeList')){
    //     myFunction('make')
    // }else if ($(this).find('ul').hasClass('modelList')){
    //     myFunction('model')
    // }
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


// $('.makeModels li a').on('click', function(){
//     $('#make').innerHTML = $(this).text();
//     console.log($('#make').text())
//     $('#make').trigger('create')
// })
$('#make').on('keyup', myFunction())

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('make');
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("makeList")[0];
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
      console.log('asd');
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// Search function through list
// function myFunction(makeormodel) {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   if (makeormodel === 'make'){
//       input = document.getElementById('make');
//       ul = document.querySelector('.makeList')
//   }else if (makeormodel === 'model'){
//       input = document.getElementById('model')
//       ul = document.querySelector('.modelList')
//   }
//   filter = input.value.toUpperCase();
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   var jinput;
//   if (input.id === 'make'){
//     jinput = $('#make')
//   }else{
//       jinput = $('#model')
//   }
    
//     for (i = 0; i < li.length; i++) {
//         console.log('checking');
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }

// }


})

