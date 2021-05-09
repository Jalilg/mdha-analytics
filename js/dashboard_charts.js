var esOnlyProvider;
var housedOnlyProvider;
var homelessRehousedProvider;
var recurrenceProvider;


var esOnlyDuration;
var housedOnlyDuration;
var homelessRehousedDuration;
var recurrenceDuration;


var orgOverview;


$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/es_only_duration.json').done(function(dat) {
    esOnlyDuration = JSON.parse(dat)

    var labels = esOnlyDuration.map(function(e) {
        return e.label;
    });
    var data = esOnlyDuration.map(function(e) {
        return e.y;
    });

    makeEsOnlyDuration(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/es_only_providers.json').done(function(dat) {
    esOnlyProvider = JSON.parse(dat)

    var labels = esOnlyProvider.map(function(e) {
        return e.label;
    });
    var data = esOnlyProvider.map(function(e) {
        return e.y;
    });

    makeEsOnlyProvider(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/housed_only_duration.json').done(function(dat) {
    housedOnlyDuration = JSON.parse(dat)

    var labels = housedOnlyDuration.map(function(e) {
        return e.label;
    });
    var data = housedOnlyDuration.map(function(e) {
        return e.y;
    });

    makeHousedOnlyDuration(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/housed_only_providers.json').done(function(dat) {
    housedOnlyProvider = JSON.parse(dat)

    var labels = housedOnlyProvider.map(function(e) {
        return e.label;
    });
    var data = housedOnlyProvider.map(function(e) {
        return e.y;
    });

    makeHousedOnlyProvider(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/homeless_rehoused_duration.json').done(function(dat) {
    homelessRehousedDuration = JSON.parse(dat)

    var labels = homelessRehousedDuration.map(function(e) {
        return e.label;
    });
    var data = homelessRehousedDuration.map(function(e) {
        return e.y;
    });

    makeHomelessRehousedDuration(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/homeless_rehoused_providers.json').done(function(dat) {
    homelessRehousedProvider = JSON.parse(dat)

    var labels = homelessRehousedProvider.map(function(e) {
        return e.label;
    });
    var data = homelessRehousedProvider.map(function(e) {
        return e.y;
    });

    makeHomelessRehousedProvider(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/recurrence_duration.json').done(function(dat) {
    recurrenceDuration = JSON.parse(dat)

    var labels = recurrenceDuration.map(function(e) {
        return e.label;
    });
    var data = recurrenceDuration.map(function(e) {
        return e.y;
    });

    makeRecurrenceDuration(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/recurrence_providers.json').done(function(dat) {
    recurrenceProvider = JSON.parse(dat)

    var labels = recurrenceProvider.map(function(e) {
        return e.label;
    });
    var data = recurrenceProvider.map(function(e) {
        return e.y;
    });

    makeRecurrenceProvider(labels, data)
});

$.ajax('https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/dashboard_output/org_load.json').done(function(dat) {
    orgOverview = JSON.parse(dat)

    var labels = orgOverview.map(function(e) {
        return e.label;
    });
    var data = orgOverview.map(function(e) {
        return e.y;
    });

    makeOrgOverview(labels, data)
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

var makeOrgOverview = function(labels, data) {
    var ctx = document.getElementById('orgOverviewChart').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: "#6e707e"
            }]
        },
        options: {
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
                    scaleLabel: {
                        display: true,
                        labelString: '# of Clients'
                    },
                    ticks: {
                        beginAtZero: true,
                        userCallback: function(value, index, values) {
                            // Convert the number to a string and splite the string every 3 charaters from the end
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
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

var makeEsOnlyDuration = function(labels, data) {
    var ctx = document.getElementById('esOnlyDurationChart').getContext('2d');
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
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of Days'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of Clients'
                    },
                    ticks: {
                        beginAtZero: true,
                        userCallback: function(value, index, values) {
                            // Convert the number to a string and splite the string every 3 charaters from the end
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
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

var makeEsOnlyProvider = function(labels, data) {
    var ctx = document.getElementById('esOnlyProviderChart').getContext('2d');
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
                xAxes: [{
                    ticks: {
                        autoSkip: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of Clients'
                    },
                    ticks: {
                        beginAtZero: true,
                        userCallback: function(value, index, values) {
                            // Convert the number to a string and splite the string every 3 charaters from the end
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
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

var makeHousedOnlyDuration = function(labels, data) {
    var ctx = document.getElementById('housedOnlyDurationChart').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: "#244ba0"
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of Days'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of Clients'
                    },
                    ticks: {
                        beginAtZero: true,
                        userCallback: function(value, index, values) {
                            // Convert the number to a string and splite the string every 3 charaters from the end
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
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

var makeHousedOnlyProvider = function(labels, data) {
    var ctx = document.getElementById('housedOnlyProviderChart').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: "#244ba0"
            }]
        },
        options: {
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
                    scaleLabel: {
                        display: true,
                        labelString: '# of Clients'
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

var makeHomelessRehousedDuration = function(labels, data) {
    var ctx = document.getElementById('homelessRehousedDurationChart').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: "#244ba0"
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of Days'
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

var makeHomelessRehousedProvider = function(labels, data) {
    var ctx = document.getElementById('homelessRehousedProviderChart').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: "#244ba0"
            }]
        },
        options: {
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
                    scaleLabel: {
                        display: true,
                        labelString: '# of Clients'
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

var makeRecurrenceDuration = function(labels, data) {
    var ctx = document.getElementById('recurrenceDurationChart').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: "#5383c3"
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '# of Days'
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

var makeRecurrenceProvider = function(labels, data) {
    var ctx = document.getElementById('recurrenceProviderChart').getContext('2d');
    var config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: "#5383c3"
            }]
        },
        options: {
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
                    scaleLabel: {
                        display: true,
                        labelString: '# of Clients'
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