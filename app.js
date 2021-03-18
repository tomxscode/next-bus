const
  hours = document.querySelector('#hours'),
  busHour = document.querySelector('#busHour')
  ;

var
  date = new Date(),
  currentHour = date.getHours() + '' + date.getMinutes()
  ;
  
console.log(currentHour);