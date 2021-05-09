

var provRank =[];
var labels;
var data;

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/rank_output/ServProvAggregagte20200701.json').done(function (dat) {
  provRank = JSON.parse(dat)
  console.log(provRank)

  var labels = provRank.map(function(e) {
    return e.label;
  });
  var data = provRank.map(function(e) {
    return e.y;
  });

  makeChart(labels, data)
});

console.log(labels)
console.log(data)

var makeChart = function (labels, data) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var config = {
     type: 'bar',
     data: {
        labels: labels,
        datasets: [{
           data: data,
           backgroundColor: "#db7027"
        }]
     },
     options: {
          legend: {
              display: false
          },
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
  return chart
}

