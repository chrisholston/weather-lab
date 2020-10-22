console.log("It's working!")


console.log("It's working!")
function handleGetData(event){
  event.preventDefault();
  // Load in the value of the search textbox:
  const searchText = $("#search").val()
  $.ajax({url: `http://www.omdbapi.com/?t=${searchText}&apikey=a77aa6da`})
    .then(
      (data) => {
        console.log(data);
        $("#title").text(data.Title)
        $("#year").text(data.Year)
        $("#rated").text(data.Rated)
        $("#poster").attr("src", data.Poster)
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
}
$('form').on("submit", handleGetData)