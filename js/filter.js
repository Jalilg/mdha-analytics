//Setting Global Variables

var providerDat;
var sixMoChart;
var urlBoolean;


//Future Step- Changing to get different time horizons 
var convertData = function(x) {
    chartDat = [
        { y: x.SixMoPredHomelessRate, label: "% of people who will experience homelessness"},
        { y: x.SixMoInvPredHomelessRate, label: "% of people who will not experience homelessness"}
    ]
    return chartDat
}

//Creating Filter function
var applyFilter = function () {

    var serviceProvider = $("#inputProvider :selected").val(); // The value of the selected option
    var refDate = $("#inputrefDate :selected").val(); // The value of the selected option
    var ethnicity = $("#inputEthnic :selected").val(); // The value of the selected option
    var race = $("#inputRace :selected").val(); // The value of the selected option
    var gender = $("#inputSex :selected").val(); // The value of the selected option
    var disability = $("#inputDisability :selected").val(); // The value of the selected option
    var veteran = $("#inputVeteran :selected").val(); // The value of the selected option
    var income = $("#inputIncome :selected").val(); // The value of the selected option

    //craft file name
    var fileName = 'https://raw.githubusercontent.com/Jalilg/public/main/app_output/app-output-v4/app-output-v4/'+ serviceProvider +"_"+ refDate +"_" + race + "_" + gender + "_" + income +"_" + veteran + "_" + disability + "_" + ethnicity + ".json"
    console.log(fileName)

    // //Ajax Call inside the function
    $.ajax(fileName).done(function (dat) {
        providerDat = JSON.parse(dat)[0] //grabs first element of array
        var chartDat = convertData(providerDat)
        createChart(chartDat)
        //Show Heading of provider
        $("#selectProvider").text(providerDat.Provider)
        //Craft Sentence
        $("#selectSentence").text(`${makeProviderClause(providerDat)} who are ${makeEthnicityClause(providerDat)}, ${makeRaceClause(providerDat)}, ${makeGenderClause(providerDat)}, a ${makeDisabledClause(providerDat)} ${makeVeteranClause(providerDat)} and ${makeIncomeClause(providerDat)}, have ${providerDat.SixMoPredHomelessRate}% likelihood of being homeless within the next six months and ${providerDat.SixMoInvPredHomelessRate}% likelihood of staying housed in the next six months. `)
    })
    .fail(function(){
            $("#selectProvider").text('Error')

            $("#selectSentence").text(`This combination either does not exist or exists but cannot be shown because it is too small a sample size`)
        })
}

makeProviderClause= function(providerData){
    if (providerData.Provider==='all'){
        return `Clients from all providers`
    } else{
        return `Clients in ${providerData.Provider}`
    }
}


makeEthnicityClause= function(providerData){
    if (providerData.Ethnicity==='all'){
        return `of all ethnicities`
    } else{
        return `${providerData.Ethnicity}`
    }
}


makeRaceClause= function(providerData){
    if (providerData.Races==='all'){
        return `of all races`
    } else{
        return `${providerData.Races}`
    }
}


makeGenderClause= function(providerData){
    if (providerData.Gender==='all'){
        return `of all genders`
    } else{
        return `${providerData.Gender}`
    }
}


makeDisabledClause= function(providerData){
    if (providerData.Disab==='all'){
        return `of all abilities`
    } else{
        return `${providerData.Disab}`
    }
}

makeVeteranClause= function(providerData){
    if (providerData.Veteran==='all'){
        return `veterans and non veterans`
    } else{
        return `${providerData.Veteran}`
    }
}

makeIncomeClause= function(providerData){
    if (providerData.Income==='all'){
        return `of all income classes`
    } else{
        return `making $${providerData.Income}`
    }
}


//Ajax call for the filter function
$('.filter').change(applyFilter)

//Create Bar Chart functino that uses this data
// var chartDat = convertData(providerDat)

var createChart= function(data){

    sixMoChart= new CanvasJS.Chart(document.getElementById("sixMonthChart"), {
        animationEnabled: true,
        theme: "light2", 
        title:{
            text: "Proportion of People Experiencing Homelessness" ,
            fontSize: 20,
            horizontalAlign: "center",
            wrap: true,
        },
        axisY:{
            // title: "Proportion Range"
            minimum: 0,
            maximum: 100,
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "Services",
            dataPoints: data
        }]
    });
    sixMoChart.render();
}


//updatechart function

var updateChart= function(data){
    
    sixMoChart.data[0].dataPoints= data
    sixMoChart.update();

}

//do the same thing with 12 month but within the function

//Bar Chart
window.onload = function () {

    var chart = new CanvasJS.Chart(document.getElementById("sixMonthChart"), {
        animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Proportion of People using Emergency Services within a given service provider"
	},
	axisY: {
		title: "Count of People"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "Services",
		dataPoints: chartDat
	}]
});
chart.render();
}
