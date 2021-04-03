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
if(window.innerWidth > 1140){
  $(".bigSearchWrapper").css({
    top: $(".bigSearchWrapper").parent().height()/2 - $(".bigSearchWrapper").height()/2
});
}

$(window).resize(function(){
  if(window.innerWidth > 1140){
    $(".bigSearchWrapper").css({
      top: $(".bigSearchWrapper").parent().height()/2 - $(".bigSearchWrapper").height()/2 + '!important'
  });

    $('.main-carousel').css({height: '630px'})
  }

  if(window.innerWidth < 1140){
    $('.main-carousel').css({
      height: `${$('.carousel-cell img').height()}`
    })

    $(".bigSearchWrapper").css({
    top: $(".carousel-cell img").height()/2 - $(".bigSearchWrapper").height()/2
    });
  }

})

if(window.innerWidth < 1140){
    $('.main-carousel').css({
      height: `${$('.carousel-cell img').height()}`
    })

    $(".bigSearchWrapper").css({
       top: $(".carousel-cell img").height()/2 - $(".bigSearchWrapper").height()/2
    });
}



//AUTOCOMPLETE SEARCH
const carMakeList = [
  'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Buick', 'Cadillac', 'Changan', 'Chevrolet', 'Chrysler', 'Citroen', 'Dacia', 'Daewoo', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hummer', 'Hyundai','Infiniti', 'Jaguar', 'Jeep', 'KIA', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Maserati', 'Mazda', 'Mercedes', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeout', 'Pontiac', 'Porsche', 'Renault', 'Rolls-Royce', 'Saab', 'Seat', 'Skoda', 'Smart', 'Subaru', 'Tesla', 'Toyota', 'Volkwagen', 'Volvo'
]

//Make autocomplete search

// let makeInput = $('#make')
// let makeList = $('.makeList')

// makeInput.on('keyup', (e) => {
//   let userData = e.target.value;
//   let emptyArray = [];
//   if(userData){
//     emptyArray = carMakeList.filter((data) => {
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     })
//     emptyArray = emptyArray.map((data) => {
//       return data = '<li>'+ data +'</li>'
//     })
//     makeList.css({display: 'block'})
//     showMake(emptyArray)

//     $('.makeList li').on('click', function(e){
//       $('#make').val(`${e.target.innerHTML}`)
//       $('#make').attr('value', `${e.target.innerHTML}`)
//       makeList.css({display: 'none'})
//       modelSearch(e.target.innerHTML)
//     })
//           //Hover gray
//           $('.makeList li').on('mouseenter', function(){
//             $(this).addClass('hover')
//           })
//           $('.makeList li').on('mouseleave',function(){
//             $(this).removeClass('hover')
//           })
//   }else{
//     makeList.css({display: 'none'})
//   }
  
// })

// function showMake(list){
//   let listData;
//   if(!list.length){
//     userValue = makeInput.value;
//     listData = '<li>'+ userValue + '</li>'
//   }else{
//     listData = list.join('')
//   }
//   makeList.html(listData)
// }


//Model autocomplete search

// function modelSearch(makebrand){
//   const acuraModels = [
//     'ILX', 'NSX', 'RLX', 'TLX', 'MDX', 'RDX', 'CSX', 'TL'
//   ]
//   const alfaromeoModels = [
//     '156', '4C', 'GTV', 'Guilietta', 'Mito', 'Stelvio'
//   ]
//   const astonmartinModels = [
//     'DB9', 'Rapide', 'Vanquish', 'Vantage'
//   ]
//   const audiModels =[
//     '100', '80', 'A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'R8', 'RS3', 'RS5', 'RS6', 'RS7', 'S4', 'S5', 'S6', 'S8', 'TT'
//   ]
//   const bentleyModels = [
//     'Bentayga', 'Continental', 'Flying Spur', 'Mulsanne'
//   ]
//   const bmwModels = [
//     '3 series','316','318','320','323','325','328','330','335','340','4 series', '420','428','430','5 series','518','520','523','524','525','528','530','530e', '535','535GT', '540', '550', '6 series', '630', '640', '650', '7 series', '728','730','735','740','745','750','760','M series', 'M3', 'M5', 'M6', 'X5 M', 'X6 M', 'X series', 'X1','X2','X3','X4','X5','X6','X7', 'Z series', 'Z3', 'Z4', 'i8'
//   ]
//   const buickModels = [
//     'Encore', 'LaCrosse'
//   ]
//   let carModelList = []

//   switch(makebrand){
//     case 'Acura':
//       carModelList = acuraModels
//       break;
//     case 'Alfa Romeo':
//       carModelList = alfaromeoModels
//       break;
//     case 'Aston Martin':
//       carModelList = astonmartinModels;
//       break;
//     case 'Audi':
//       carModelList = audiModels
//       break;
//     case 'Bentley':
//       carModelList = bentleyModels
//       break;
//     case 'BMW':
//       carModelList = bmwModels
//       break;
//     case 'Buick':
//       carModelList = buickModels
//       break;
//   }

// let modelInput = $('#model')
// let modelList = $('.modelList')
// let modelListItem = $('.modelList li')

// modelInput.on('keyup', (e) => {
//   let userData = e.target.value;
//   let emptyArray = [];
//   if(userData){
//     emptyArray = carModelList.filter((data) => {
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     })
//     emptyArray = emptyArray.map((data) => {
//       return data = '<li>'+ data +'</li>'
//     })
//     modelList.css({display: 'block'})
//     showMake(emptyArray)

//     $('.modelList li').on('click', function(e){
//       $('#model').val(`${e.target.innerHTML}`)
//       $('#model').attr('value', `${e.target.innerHTML}`)
//       modelList.css({display: 'none'})
//     })

//             //Hover gray
//           $('.modelList li').on('mouseenter', function(){
//             $(this).addClass('hover')
//           })
//           $('.modelList li').on('mouseleave',function(){
//             $(this).removeClass('hover')
//           })
    
//   }else{
//     modelList.css({display: 'none'})
//   }
  
// })

// function showMake(list){
//   let listData;
//   if(!list.length){
//     userValue = modelInput.value;
//     listData = '<li>'+ userValue + '</li>'
//   }else{
//     listData = list.join('')
//   }
//   modelList.html(listData)
// }
// }



$('#yearLabel').parent().css({
  borderRight: 'none'
})

})

