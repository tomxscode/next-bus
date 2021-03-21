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
currentHour = parseInt(actualHour + currentMinutes);

btn.onclick = function() {
  var hoursRest = 0,
      minutesRest = 0;
  let nextBusMinutes = selectedHour - currentHour;
  if (actualHour == selHour) { // cuando es en la misma hora
    //busHour.value = nextBusMinutes + ' minutos';
    minutesRest = nextBusMinutes;
  } else if ((actualHour + 1) == selHour) { // cuando es en la siguiente hora
    let x = 60 - currentMinutes;
    console.log(x);
    let y = x + selectedMinutes;
    console.log(y, ' minutos');
    minutesRest = y;
  }
  if (hoursRest === 0) {
    busHour.value = nextBusMinutes + ' minutos';
  } else if (hoursRest == 1) {
    busHour.value = hoursRest + ' hora y ' + minutesRest + ' minutos';
  } else {
    busHour.value = hoursRest + ' horas y ' + minutesRest + ' minutos';
  }
}