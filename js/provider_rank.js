

var provRank;

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/rank_output/ServProvAggregagte20200701.json').done(function (dat) {
  provRank = JSON.parse(dat)
  return provRank
});

var tooltipSettingsRank = {   
            content: "{label}: {y} % of Clients Homeless",
            animationEnabled: true,
            cornerRadius: 4      
        }

window.onload = function () {

var chart = new CanvasJS.Chart(document.getElementById("provRankChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettingsRank,
    title: {
        text: ""
    },
    axisY: {
        labelFontSize: 14,
        titleFontSize: 20,
        title: "% of Clients Homeless",
    },
    axisX: {
        labelFontSize: 14,
        titleFontSize: 20,
        interval: 1,
        title: "Service Providers",
        labelAngle: 315
    },
    data: [{
        type: "column",
        color: "#db7027",
        dataPoints: provRank
    }]
});
chart.render();

}
