function handleGetData(event){
  event.preventDefault();
  // Load in the value of the search textbox:
  const searchText = $("#search").val()
  $.ajax({url:`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=imperial&APPID=beb365ff76ed8b50dd570a7cef7bb822` })
    .then(
      (data) => {
        console.log(data);
        
        let $blank = $("#City");
        $blank.text("Weather for " + data.name);
        
        let $temp = $("#temperature");
        $temp.text("Temperature is " + data.main.temp);
       
        let $feels =$("#feelsLike");
        $feels.text("It feels like "  + data.main.feels_like);

        let $description =$("#description");
        $description.text("Description "  + data.weather[0].description);
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
}

$('form').on("submit", handleGetData)