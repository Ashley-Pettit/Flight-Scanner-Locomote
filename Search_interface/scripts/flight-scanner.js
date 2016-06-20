
$( document ).ready(load());

//You may need to alter this based on how you run the rails server
api_location = 'http://localhost:3000/';
console.log('js working')


function load(){

  $( '#airline_search_btn' ).click(function(){
    airline_search();
  });

  $( '#airport_search_btn' ).click(function(){
    airport_search();
  });

  $( '#flight_search_btn' ).click(function(){
    search_flights();
  });

}

//Get airline information from the API
function airline_search(){
  console.log ('airline search clicked');
  $.ajax( api_location + "/airlines" )
    .done(function(response) {

      var airline_code = response.code;
      var airline_name = response.name;

      // var table = templateFunction({
      //   code: airline_code,
      //   name: airline_name
      // });

      $.each(airline_name, function(index, event){
        $('#airline_results').append("<h4>" + airline_name + "</h4>");
      });

    });
}

function airport_search(){
  console.log ('airport search clicked');
  $.ajax( api_location + "/airports" )
    .done(function(response) {
      var airportCode = response.airportCode;
      var airportName = response.airportName;
      var cityCode = response.cityCode;
      var cityName = response.cityName;
      var countryCode = response.countryCode;
      var countryName = response.countryName;
      var latitude = response.latitude;
      var longitude = response.longitude;
      var stateCode = response.stateCode;
      var timeZone = response.timeZone;

      // $.each(airlines, function(index, event){
      //   $('#current_games').prepend("<h4>" + event.countryA + " Vs. " + event.countryB + "</h4>");
      // });
      console.log(airportName);
    });
}


function search_flights() {

  var $date = $('#input_date').val();
  var $destination = $('#input_destination').val();
  var $departure = $('#input_departure').val();
  console.log('Searching for flights on ' + $date + ". Travelling from " + $departure + " to " + $destination + ".");

  // Storing inputs into an array for send in AJAX call
  var inputs = [$date, $destination, $departure];
}


//Show all events

//Search function
search = function(){
  searching_for = $('#search_input').val();
  console.log("Searching for sports matching " + searching_for);
};




  // $.ajax({
  //   url: '#',
  //   data: { inputs }
  // }).done(function(response) {
  //
  //   response.Search.forEach(function(flight) {
  //
  //     // make elements
  //     var table = templateFunction({
  //       date: movie.Title,
  //       time: movie.Year
  //       time: movie.Year
  //     });
  //
  //     var $newElem = $(html);
  //
  //     // list flights on the page
  //     $('.list').append( $newElem );
  //   });

  // });
