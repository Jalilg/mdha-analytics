// Area Chart Example
var esOnlyProvider;
var housedOnlyProvider;
var homelessRehousedProvider;
var recurrenceProvider;


var esOnlyDuration;
var housedOnlyDuration;
var homelessRehousedDuration;
var recurrenceDuration;


var orgOverview;

// var providerDataOne = require('./test.json'); //(with path)

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/es_only_duration.json').done(function (dat) {
  esOnlyDuration = JSON.parse(dat)
  return esOnlyDuration
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/es_only_providers.json').done(function (dat) {
  esOnlyProvider = JSON.parse(dat)
  return esOnlyProvider
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/housed_only_duration.json').done(function (dat) {
  housedOnlyDuration = JSON.parse(dat)
  return housedOnlyDuration
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/housed_only_providers.json').done(function (dat) {
  housedOnlyProvider = JSON.parse(dat)
  return housedOnlyProvider
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/homeless_rehoused_duration.json').done(function (dat) {
  homelessRehousedDuration = JSON.parse(dat)
  return homelessRehousedDuration
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/homeless_rehoused_providers.json').done(function (dat) {
  homelessRehousedProvider = JSON.parse(dat)
  return homelessRehousedProvider
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/recurrence_duration.json').done(function (dat) {
  recurrenceDuration = JSON.parse(dat)
  return recurrenceDuration
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/recurrence_providers.json').done(function (dat) {
  recurrenceProvider = JSON.parse(dat)
  return recurrenceProvider
});

$.ajax('https://raw.githubusercontent.com/Jalilg/public/main/dashboard_output/org_load.json').done(function (dat) {
  orgOverview = JSON.parse(dat)
  return orgOverview
});

var tooltipSettings = {   
            content: "{label}: {y} clients",
            animationEnabled: true,
            cornerRadius: 4      
        }

var tooltipSettingsDur = {   
            content: "{label} days: {y} clients",
            animationEnabled: true,
            cornerRadius: 4      
        }

window.onload = function () {

var chart = new CanvasJS.Chart(document.getElementById("orgOverviewChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettings,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 6010,
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        color: "#6e707e",
        dataPoints: orgOverview
    }]
});
chart.render();

var chart1 = new CanvasJS.Chart(document.getElementById("esOnlyDurationChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettingsDur,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 11000,
    },
    axisX: {
        title: "# of days"
    },
    data: [{
        type: "column",
        color: "#db7027",
        dataPoints: esOnlyDuration
    }]
});
chart1.render();

var chart2 = new CanvasJS.Chart(document.getElementById("esOnlyProviderChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettings,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 5300,
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        color: "#db7027",
        dataPoints: esOnlyProvider
    }]
});
chart2.render();

var chart3 = new CanvasJS.Chart(document.getElementById("housedOnlyDurationChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettingsDur,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 1200,
    },
    axisX: {
        title: "# of days"
    },
    data: [{
        type: "column",
        color: "#244ba0",
        dataPoints: housedOnlyDuration
    }]
});
chart3.render();

var chart4 = new CanvasJS.Chart(document.getElementById("housedOnlyProviderChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettings,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 550,
        margin: 10
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        color: "#244ba0",
        dataPoints: housedOnlyProvider
    }]
});
chart4.render();

var chart5 = new CanvasJS.Chart(document.getElementById("homelessRehousedDurationChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettingsDur,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 35,
    },
    axisX: {
        title: "# of days"
    },
    data: [{
        type: "column",
        color: "#244ba0",
        dataPoints: homelessRehousedDuration
    }]
});
chart5.render();

var chart6 = new CanvasJS.Chart(document.getElementById("homelessRehousedProviderChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettings,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 45,
        margin: 20
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        color: "#244ba0",
        dataPoints: homelessRehousedProvider
    }]
});
chart6.render();

var chart5 = new CanvasJS.Chart(document.getElementById("recurrenceDurationChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettingsDur,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 200
    },
    axisX: {
        title: "# of days"
    },
    data: [{
        type: "column",
        color: "#5383c3",
        dataPoints: recurrenceDuration
    }]
});
chart5.render();

var chart6 = new CanvasJS.Chart(document.getElementById("recurrenceProviderChart"), {
animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    toolTip : tooltipSettings,
    title: {
        text: ""
    },
    axisY: {
        title: "# of Clients",
        minimum: 0,
        maximum: 310,
        margin: 20
    },
    axisX: {
        interval: 1,
        title: "Service Providers",
        labelAngle: 300
    },
    data: [{
        type: "column",
        color: "#5383c3",
        dataPoints: recurrenceProvider
    }]
});
chart6.render();



}


