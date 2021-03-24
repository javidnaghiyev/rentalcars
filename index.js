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

//STYLE
$(".bigSearchWrapper").css({
    top: $(".bigSearchWrapper").parent().height()/2 - $(".bigSearchWrapper").height()/2
});




//AUTOCOMPLETE SEARCH
const carMakeList = [
  'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Buick', 'Cadillac', 'Changan', 'Chevrolet', 'Chrysler', 'Citroen', 'Dacia', 'Daewoo', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hummer', 'Hyundai','Infiniti', 'Jaguar', 'Jeep', 'KIA', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Maserati', 'Mazda', 'Mercedes', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeout', 'Pontiac', 'Porsche', 'Renault', 'Rolls-Royce', 'Saab', 'Seat', 'Skoda', 'Smart', 'Subaru', 'Tesla', 'Toyota', 'Volkwagen', 'Volvo'
]

//Make autocomplete search

let makeInput = $('#make')
let makeList = $('.makeList')

makeInput.on('keyup', (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if(userData){
    emptyArray = carMakeList.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    })
    emptyArray = emptyArray.map((data) => {
      return data = '<li>'+ data +'</li>'
    })
    makeList.css({display: 'block'})
    showMake(emptyArray)

    $('.makeList li').on('click', function(e){
      $('#make').val(`${e.target.innerHTML}`)
      $('#make').attr('value', `${e.target.innerHTML}`)
      makeList.css({display: 'none'})
      modelSearch(e.target.innerHTML)
    })
          //Hover gray
          $('.makeList li').on('mouseenter', function(){
            $(this).addClass('hover')
          })
          $('.makeList li').on('mouseleave',function(){
            $(this).removeClass('hover')
          })
  }else{
    makeList.css({display: 'none'})
  }
  
})

function showMake(list){
  let listData;
  if(!list.length){
    userValue = makeInput.value;
    listData = '<li>'+ userValue + '</li>'
  }else{
    listData = list.join('')
  }
  makeList.html(listData)
}


//Model autocomplete search

function modelSearch(makebrand){
  const acuraModels = [
    'ILX', 'NSX', 'RLX', 'TLX', 'MDX', 'RDX', 'CSX', 'TL'
  ]
  const alfaromeoModels = [
    '156', '4C', 'GTV', 'Guilietta', 'Mito', 'Stelvio'
  ]
  let carModelList = []

  switch(makebrand){
    case 'Acura':
      carModelList = acuraModels
      break;
    case 'Alfa Romeo':
      carModelList = alfaromeoModels
      break;
  }

let modelInput = $('#model')
let modelList = $('.modelList')
let modelListItem = $('.modelList li')

modelInput.on('keyup', (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if(userData){
    emptyArray = carModelList.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    })
    emptyArray = emptyArray.map((data) => {
      return data = '<li>'+ data +'</li>'
    })
    modelList.css({display: 'block'})
    showMake(emptyArray)

    $('.modelList li').on('click', function(e){
      $('#model').val(`${e.target.innerHTML}`)
      $('#model').attr('value', `${e.target.innerHTML}`)
      modelList.css({display: 'none'})
    })

            //Hover gray
          $('.modelList li').on('mouseenter', function(){
            $(this).addClass('hover')
          })
          $('.modelList li').on('mouseleave',function(){
            $(this).removeClass('hover')
          })
    
  }else{
    modelList.css({display: 'none'})
  }
  
})

function showMake(list){
  let listData;
  if(!list.length){
    userValue = modelInput.value;
    listData = '<li>'+ userValue + '</li>'
  }else{
    listData = list.join('')
  }
  modelList.html(listData)
}
}

})

