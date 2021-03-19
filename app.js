const
  hours = document.querySelector('#hours'),
  btn = document.querySelector('#calculate')
  ;
var
  date = new Date(),
  currentHour = date.getHours() + '' + date.getMinutes(),
  selectedHour = hours.value,
  busHour = document.querySelector('#busHour')
  ;
var
  actualHour = currentHour.slice(0, 2),
  selHour = selectedHour.slice(0, 2), 
  selectedMinutes = selectedHour.slice(2, 4),
  currentMinutes = currentHour.slice(2, 4)
  ;
if (currentMinutes.length == 1) {
  let tempMinutes = currentMinutes;
  currentMinutes = '0' + tempMinutes;
} else if (actualHour.length == 1) {
  let tempHour = actualHour;
  actualHour = '0' + tempHour;
}
currentHour = toString(actualHour) + toString(currentMinutes);

btn.onclick = function() {
  console.log(selHour, selectedMinutes, ' / ' , actualHour, currentMinutes);
  let nextBusMinutes = selectedHour - currentHour;
  console.log(nextBusMinutes);
  if (nextBusMinutes <= 59) {
    console.log('Faltan: ', nextBusMinutes, ' minutos para el bus seleccionado.');
  } else if (nextBusMinutes >= 60) {
    console.log('Faltan ', nextBusMinutes);
    for (let x = 1; x < nextBusMinutes; x++) {
      if (nextBusMinutes > 60) {
        nextBusMinutes =- 60;
        console.log(nextBusMinutes, ', index: ', x);
        if (nextBusMinutes < 60) { break; }
      }
    }
  }
}