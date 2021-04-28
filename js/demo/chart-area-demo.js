// Area Chart Example
var providerDataOne;

// var providerDataOne = require('./test.json'); //(with path)

$.getJSON("test.json", function(json) {
  providerDataOne = JSON.parse(dat)
  console.log(providerDataOne)
  return providerDataOne
});


/* $.ajax("https://raw.githubusercontent.com/Jalilg/public/main/test.json").done(function (dat) {
providerDataOne = JSON.parse(dat)
console.log(providerDataOne)
return providerDataOne
}) */

/* var result = providerDataOne.reduce(function(res, obj) {
  if (!(obj.category in res))
      res.__array.push(res[obj.category] = obj);
  else {
      res[obj.category].hits += obj.hits;
      res[obj.category].bytes += obj.bytes;
  }
  return res; */

window.onload = function () {

var chart = new CanvasJS.Chart(document.getElementById("chartContainer"), {
  animationEnabled: true,
  title:{
    text: "12 Month ES Usage Rate vs Average # of Days since ES Use by Service Provider"
  },
  axisX: {
    title:"Average # of Days since ES Use"
  },
  axisY: {
    title:"ES-BN Usage Rate",
    includeZero: true
  },
  legend:{
    horizontalAlign: "left"
  },
  data: [{
    type: "bubble",
    showInLegend: true,
    legendText: "Size of Bubble Represents Number of Clients Served",
    legendMarkerType: "circle",
    legendMarkerColor: "grey",
    toolTipContent: "<b>{name}</b><br/>Days Since ES-BN: {x} days<br/> ES Usage Rate: {y}%<br/> # of Clients: {z}",
    dataPoints: providerDataOne

  }]
});
chart.render();

var chart = new CanvasJS.Chart(document.getElementById("chartContainerTwo"), {
  animationEnabled: true,
  title:{
    text: "12 Month ES Usage Rate vs Average # of Days since ES Use by Service Provider"
  },
  axisX: {
    title:"Average # of Days since ES Use"
  },
  axisY: {
    title:"ES-BN Usage Rate",
    includeZero: true
  },
  legend:{
    horizontalAlign: "left"
  },
  data: [{
    type: "bubble",
    showInLegend: true,
    legendText: "Size of Bubble Represents Number of Clients Served",
    legendMarkerType: "circle",
    legendMarkerColor: "grey",
    toolTipContent: "<b>{name}</b><br/>Days Since ES-BN: {x} days<br/> ES Usage Rate: {y}%<br/> # of Clients: {z}",
    dataPoints: [
 {
  "name": "AIDS Services of Dallas",
  "z": 222,
  "y": 0.027027027027027,
  "x": 56.6576576576577
 },
 {
  "name": "American GI Forum",
  "z": 282,
  "y": 0.24822695035461,
  "x": 18.1666666666667
 },
 {
  "name": "Austin Street Center",
  "z": 4914,
  "y": 0.591371591371591,
  "x": 44.7342287342287
 },
 {
  "name": "Catholic Charities",
  "z": 34,
  "y": 0.0882352941176471,
  "x": 163.235294117647
 },
 {
  "name": "City House",
  "z": 1410,
  "y": 0.0177304964539007,
  "x": 43.9049645390071
 },
 {
  "name": "City of Dallas",
  "z": 7010,
  "y": 0.348930099857347,
  "x": 6.38887303851641
 },
 {
  "name": "City of Irving",
  "z": 32,
  "y": 0.0625,
  "x": 0
 },
 {
  "name": "CitySquare",
  "z": 2778,
  "y": 0.188984881209503,
  "x": 74.4542836573074
 },
 {
  "name": "CitySquare - TRAC",
  "z": 124,
  "y": 0.0241935483870968,
  "x": 38.2741935483871
 },
 {
  "name": "Dallas County Health and Human Services",
  "z": 304,
  "y": 0,
  "x": 1.11513157894737
 },
 {
  "name": "Dallas Life",
  "z": 54,
  "y": 0.0555555555555556,
  "x": 47.8333333333333
 },
 {
  "name": "Family Endeavors",
  "z": 580,
  "y": 0.0448275862068966,
  "x": 33.3879310344828
 },
 {
  "name": "Family Gateway",
  "z": 2404,
  "y": 0.367304492512479,
  "x": 39.3951747088186
 },
 {
  "name": "Helen's Project",
  "z": 16,
  "y": 0,
  "x": 0
 },
 {
  "name": "Housing Crisis Center",
  "z": 640,
  "y": 0.1859375,
  "x": 66.1578125
 },
 {
  "name": "HSNT",
  "z": 92,
  "y": 0,
  "x": 0
 },
 {
  "name": "In My Shoes",
  "z": 50,
  "y": 0,
  "x": 10.46
 },
 {
  "name": "Legacy Counseling Center",
  "z": 208,
  "y": 0.0144230769230769,
  "x": 47.3990384615385
 },
 {
  "name": "Metro Relief",
  "z": 550,
  "y": 0.125454545454545,
  "x": 28.9
 },
 {
  "name": "Metrocare Services",
  "z": 864,
  "y": 0.103009259259259,
  "x": 69.1400462962963
 },
 {
  "name": "My Second Chance",
  "z": 130,
  "y": 0.0615384615384615,
  "x": 1.34615384615385
 },
 {
  "name": "North TX VA Health Care System",
  "z": 4,
  "y": 0,
  "x": 0
 },
 {
  "name": "Promise House",
  "z": 1082,
  "y": 0.143253234750462,
  "x": 1.48059149722736
 },
 {
  "name": "Salvation Army - Carr P. Collins",
  "z": 8642,
  "y": 0.433233047905577,
  "x": 52.3878731775052
 },
 {
  "name": "Shared Housing Center",
  "z": 26,
  "y": 0.384615384615385,
  "x": 0
 },
 {
  "name": "The Bridge North Texas",
  "z": 578,
  "y": 0.384083044982699,
  "x": 28.0484429065744
 },
 {
  "name": "Under1Roof",
  "z": 230,
  "y": 0.0304347826086957,
  "x": 11.3826086956522
 },
 {
  "name": "Union Gospel Mission",
  "z": 534,
  "y": 0.215355805243446,
  "x": 18.2565543071161
 },
 {
  "name": "WCOA",
  "z": 14,
  "y": 0,
  "x": 0
 },
 {
  "name": "NA",
  "z": 6352,
  "y": 0.42411838790932,
  "x": 41.8655541561713
 }
]
  }]
});
chart.render();


}

