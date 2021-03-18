const
  hours = document.querySelector('#hours'),
  busHour = document.querySelector('#busHour'),
  btn = document.querySelector('#calculate')
  ;

var
  date = new Date(),
  currentHour = date.getHours() + '' + date.getMinutes(),
  selectedHour = parseInt(hours.value)
  ;
  
btn.onclick = function() {
  console.log('works')
}