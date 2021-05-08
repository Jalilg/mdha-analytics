

var provRank =[];
var labels;
var data;

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/rank_output/ServProvAggregagte20200701.json').done(function (dat) {
  provRank = JSON.parse(dat)
  console.log(provRank)
  return provRank
});
console.log(provRank)

window.onload = function () {

var labels = provRank.map(function(e) {
return e.label;
});
var data = provRank.map(function(e) {
   return e.y;
});

var ctx = document.getElementById('myChart').getContext('2d');
var config = {
   type: 'bar',
   data: {
      labels: labels,
      datasets: [{
         data: data,
         backgroundColor: 'rgba(0, 119, 204, 0.3)'
      }]
   },
   options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false,
        responsive: true
    }
};

var chart = new Chart(ctx, config);
}