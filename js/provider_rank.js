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

  makeProvRank(labels, data)
});

var makeProvRank = function (labels, data) {
  var ctx = document.getElementById('provRankChart').getContext('2d');
  var config = {
     type: 'bar',
     data: {
        labels: labels,
        datasets: [{
           data: data,
           backgroundColor: "#db7027"
        }]
     },
    options: 
{
            tooltips: {
              callbacks: {
                    label: function(tooltipItem, data) {
                        var value = data.datasets[0].data[tooltipItem.index];
                        return value + " % of clients Homeless";
                    }
              }, // end callbacks:
              displayColors: false
            }, //end tooltips
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: false
                    }
                }],
                yAxes: [{
                  type: 'linear',
                    scaleLabel: {
                        display: true,
                        labelString: '% of Clients'
                    },
                    ticks: {
                        beginAtZero: true,
                        min : 0,
                        max : 100,
                        userCallback: function(value, index, values) {
                            // Convert the number to a string and splite the string every 3 charaters from the end
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value + " %";
                        }
                    }
                }],
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
