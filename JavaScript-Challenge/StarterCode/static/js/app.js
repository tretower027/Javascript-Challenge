// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

function tbodyFill(dataset){
    tbody.html("")
    dataset.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
}
function filterDateTime() {
    d3.event.preventDefault()
    var inputDatetime = d3.select("#datetime")
    var inputDtvalue = inputDatetime.property("value")
    //
    var inputCity = d3.select("#city")
    var inputCityValue = inputCity.property("value")
    //
    var inputState = d3.select("#State")
    var inputStateValue = inputState.property("value")
    //
    var inputCountry = d3.select("#Country")
    var inputCountryValue = inputCountry.property("value")
    //
    var inputShape = d3.select("#Shape")
    var inputShapeValue = inputShape.property("value")

    var ufoFiltered = tableData
    
    if (inputDtvalue) {
        ufoFiltered = ufoFiltered.filter(ufoSighting => ufoSighting.datetime === inputDtvalue)
    
    }

    if (inputCityValue) {
        ufoFiltered = ufoFiltered.filter(ufocitySighting => ufocitySighting.city === inputCityValue)
  
    }

    if (inputStateValue) {
        ufoFiltered = ufoFiltered.filter(ufoStateSighting => ufoStateSighting.city === inputStateValue)
  
    }

    if (inputCountryValue) {
        ufoFiltered = ufoFiltered.filter(ufoCountrySighting => ufoCountrySighting.city === inputCountryValue)
  
    }

    if (inputShapeValue) {
        ufoFiltered = ufoFiltered.filter(ufoShapeSighting => ufoShapeSighting.city === inputShapeValue)
  
    }
    console.log(ufoFiltered)
    tbodyFill(ufoFiltered)
}

tbodyFill(tableData)

var button = d3.select("#filter-btn")
button.on("click", filterDateTime)


