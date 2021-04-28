// Area Chart Example
var esOnlyRecentProv;
var pshOnlyRecentProv;

var esOnlyDuration;
var pshOnlyDuration;

var orgLoad;

// var providerDataOne = require('./test.json'); //(with path)

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/es_only_duration.json').done(function (dat) {
  esOnlyDuration = JSON.parse(dat)
  return esOnlyDuration
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/es_only_providers.json').done(function (dat) {
  esOnlyProvider = JSON.parse(dat)
  return esOnlyProvider
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/psh_only_duration.json').done(function (dat) {
  pshOnlyDuration = JSON.parse(dat)
  return pshOnlyDuration
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/psh_only_providers.json').done(function (dat) {
  pshOnlyProvider = JSON.parse(dat)
  return pshOnlyProvider
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/org_load.json').done(function (dat) {
  orgOverview = JSON.parse(dat)
  return orgOverview
});

window.onload = function () {

var chart = new CanvasJS.Chart(document.getElementById("orgOverviewChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        dataPoints: orgOverview
    }]
});
chart.render();

var chart1 = new CanvasJS.Chart(document.getElementById("esOnlyDurationChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
    },
    axisX: {
        title: "# of days"
    },
    data: [{
        type: "column",
        dataPoints: esOnlyDuration
    }]
});
chart1.render();

var chart2 = new CanvasJS.Chart(document.getElementById("esOnlyProviderChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        dataPoints: esOnlyProvider
    }]
});
chart2.render();

var chart3 = new CanvasJS.Chart(document.getElementById("pshOnlyDurationChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
    },
    axisX: {
        title: "# of days"
    },
    data: [{
        type: "column",
        dataPoints: pshOnlyDuration
    }]
});
chart3.render();

var chart4 = new CanvasJS.Chart(document.getElementById("pshOnlyProviderChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        dataPoints: pshOnlyProvider
    }]
});
chart4.render();

}
