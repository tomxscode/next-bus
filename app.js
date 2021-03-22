// json
/*
  SINTAXIS
    ROUTE:
      1 - RENAICO - LOS ANGELES
      2 - RENAICO - ANGOL
      3 - LOS ANGELES - RENAICO
      4 - LOS ANGELES - ANGOL
      5 - ANGOL - RENAICO
      6 - ANGOL - LOS ANGELES

    PRICE:
      Precios
    
    HOUR:
      Hora del bus
*/
var busDB = '{"busRoute": [' +
              '{"route": 1, "price": 1000, "hour": "0630"},' +
              '{"route": 1, "price": 1000, "hour": "0730"},' +
              '{"route": 1, "price": 1000, "hour": "2350"}' +
            ']}';

var db = JSON.parse(busDB);

console.log(db.busRoute[1].route);

const
//  hours = document.querySelector('#hours'),
  btn = document.querySelector('#calculate'),
  nextBusTime = document.querySelector('#nextBusTime'),
  nextBusPrice = document.querySelector('#nextBusPrice'),
  routeSelector = document.querySelector('#routeSelector')
  ;
var
  date = new Date(),
  currentHour = date.getHours() + '' + date.getMinutes(),
  selectedHour = '00',
  busHour = document.querySelector('#busHour')
  ;

for (let i = 0; i < db; i++) {
  console.log(i)
}

var
  actualHour = currentHour.slice(0, 2),
  selHour = selectedHour.slice(0, 2), 
  selectedMinutes = selectedHour.slice(2, 4),
  currentMinutes = currentHour.slice(2, 4)
  ;
if (currentMinutes.length == 1) {
  let tempMinutes = currentMinutes;
  currentMinutes = '0' + tempMinutes;
} else if (parseInt(actualHour) < 10) {
  let tempHour = actualHour;
  actualHour = '0' + tempHour;
}
currentHour = actualHour + currentMinutes;

btn.onclick = function() {
  var hoursRest = 0,
      minutesRest = 0;
  let nextBusMinutes = selectedHour - currentHour;
  if (actualHour == selHour) { // cuando es en la misma hora
    //busHour.value = nextBusMinutes + ' minutos';
    minutesRest = selectedMinutes - currentMinutes;
  }
  else if (actualHour != selHour) { // cuando es cualquier otra hora
    /*let x = 60 - currentMinutes;
    console.log(x);
    let y = x + selectedMinutes;
    console.log(y, ' minutos');
    minutesRest = y;
    minutesRest = selectedMinutes - currentHour;
    console.log(minutesRest)*/
    let x = ((selHour * 60) - (actualHour * 60)) / 60;
    console.log(x);
    minutesRest = selectedMinutes - currentMinutes;
    hoursRest = x;
  }
  if (hoursRest === 0) {
    busHour.value = nextBusMinutes + ' minutos';
  } else if (hoursRest == 1) {
    busHour.value = hoursRest + ' hora y ' + minutesRest + ' minutos';
  } else {
    busHour.value = hoursRest + ' horas y ' + minutesRest + ' minutos';
  }
  nextBusTime.value = selHour + ':' + selectedMinutes;
}