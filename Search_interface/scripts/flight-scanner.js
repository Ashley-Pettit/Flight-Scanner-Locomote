//For Development only
console.log('JavaScripts working');


$( document ).ready(


  $( '#flight_search_btn' ).click(function(){
    search_flights();
  })

);

function search_flights() {

  var $date = $('#input_date').val();
  var $destination = $('#input_destination').val();
  var $departure = $('#input_departure').val();
  console.log('Searching for flights on ' + $date + ". Travelling from " + $departure + " to " + $destination + ".");

  // Storing inputs into an array for send in AJAX call
  var inputs = [$date, $destination, $departure];

  //A call is made to the API sending the user inputs
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

}
