//Setting Global Variables

var providerDat;
var sixMoChart;
var twelveMoChart;


//Future Step- Changing to get different time horizons 
var convertData = function(x) {
    chartDat = [
        { y: x.SixMoPredHomelessRate, label: "% of people who will experience homelessness", color: "#db7027"},
        { y: x.SixMoInvPredHomelessRate, label: "% of people who will not experience homelessness", color: "#244ba0"},
    ]
    return chartDat
}

var convertDatatwelve = function(x) {
    chartDatTwelve = [
        { y: x.TwelveMoPredHomelessRate, label: "% of people who will experience homelessness", color: "#db7027"},
        { y: x.TwelveMoInvPredHomelessRate, label: "% of people who will not experience homelessness", color: "#244ba0"}
    ]
    return chartDatTwelve
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
    var fileName = 'https://raw.githubusercontent.com/Jalilg/mdha-analytics/main/app-output-v5/'+ serviceProvider +"_"+ refDate +"_" + race + "_" + gender + "_" + income +"_" + veteran + "_" + disability + "_" + ethnicity + ".json"
    console.log(fileName)

    // //Ajax Call inside the function
    $.ajax(fileName).done(function (dat) {
        providerDat = JSON.parse(dat)[0] //grabs first element of array
        var chartDat = convertData(providerDat)
        var chartDatTwelve= convertDatatwelve(providerDat)
        createChart(chartDat)
        createChartTwelve(chartDatTwelve)
        //Show Heading of provider
        $("#selectProvider").text(providerDat.Provider)
        //Craft Sentence
        $("#selectSentence").text(`${makeProviderClause(providerDat)} who are ${makeEthnicityClause(providerDat)}, ${makeRaceClause(providerDat)}, ${makeGenderClause(providerDat)}, a ${makeDisabledClause(providerDat)} ${makeVeteranClause(providerDat)} and ${makeIncomeClause(providerDat)}, have ${providerDat.SixMoPredHomelessRate}% likelihood of being homeless within the next six months and ${providerDat.SixMoInvPredHomelessRate}% likelihood of staying housed in the next six months. They also have ${providerDat.TwelveMoPredHomelessRate}% likelihood of being homeless within the next twelve months and ${providerDat.TwelveMoInvPredHomelessRate}% likelihood of staying housed in the next twelve months `)
    })
    .fail(function(){
            $("#selectProvider").text('Error')
            $("#selectSentence").text(`This combination either does not exist or exists but cannot be shown because it is too small a sample size`)
            $("#sixMonthChart").text(`Error: This combination either does not exist or exists but cannot be shown because it is too small a sample size`)
            $("#twelveMonthChart").text(`Error: This combination either does not exist or exists but cannot be shown because it is too small a sample size`)
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
    } else if(providerData.Income==='200'){
        return `making between $0 and $200`
    }
    else if(providerData.Income==='200-500'){
        return `making between $200 and $500`
    }
    else if(providerData.Income==='500-800'){
        return `making between $500 and $800`
    }
    else if (providerData.Income==='800'){
        return `making between $800 and $2000`
    }
}



//Ajax call for the filter function
$('.filter').change(applyFilter)

//Create Bar Chart function that uses this data
// var chartDat = convertData(providerDat)

var tooltipSettingsPred = {   
            content: "{label}: {y} %",
            animationEnabled: true,
            cornerRadius: 4      
        }

var createChart= function(data){

    sixMoChart= new CanvasJS.Chart(document.getElementById("sixMonthChart"), {
        animationEnabled: true,
        theme: "light2",
        toolTip : tooltipSettingsPred, 
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
            dataPoints: data
        }]
    });


    sixMoChart.render();
    // twelveMoChart.render();
    
}

var createChartTwelve= function(data){
    twelveMoChart= new CanvasJS.Chart(document.getElementById("twelveMonthChart"), {
        animationEnabled: true,
        theme: "light2", 
        toolTip : tooltipSettingsPred, 
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
            dataPoints: data
        }]
    });
    twelveMoChart.render();
}
