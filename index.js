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



$('.where ul li').on('click', function(event){
  event.preventDefault()
  $(this).parent().parent().find('input').attr('value', `${$(this).text()}`)
})

$(".where").on('focusout', function(){
    if ($(this).find("input").val().length == 0){
        $(this).find(".floater").css({
            transition: 'transform 0.1s',
            transform: 'translate(0, 0)',
            fontSize: "1rem",
            opacity: '1'
        })
    }
})
$(".where").on('mousedown', function(){
    $(this).find(".floater").css({
        transition: 'transform 0.1s',
        transform: 'translate(0, -15px)',
        fontSize: '0.8rem',
        opacity: '0.8'
    })
    $(this).find('ul').css({display: 'block'})
})







})

let where = document.querySelector('.where')
where.addEventListener('keyup', function(){
    if (this.children[0].id === 'make'){
      myFunction('make')
    }else if (this.children[0].id === 'model'){
      myFunction('model')
    }
})


//Search function through list
function myFunction(makeormodel) {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  if (makeormodel === 'make'){
      input = document.getElementById('make');
      ul = document.querySelector('.makeList')
  }else if (makeormodel === 'model'){
      input = document.getElementById('model')
      ul = document.querySelector('.modelList')
  }
  filter = input.value.toUpperCase();
  li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

}
