/*  Document ready stuff */
$(function() {

  /* Everything related to the search area */
  // Start location
  $('#start').autocomplete({
    source: [
      'Tallinn',
      'Tartu',
      'Helsingi'
    ]
  });

  // Automatic location on page load
  $.ajax({
    method: 'GET',
    url: 'http://ipinfo.io',
    dataType: 'jsonp'
  }).done(function(response) {

    $('input#start').val(response.city);

  });


  // End location
  $('#end').autocomplete({
    source: [
      'Hispaania',
      'Holland',
      'Hiina'
    ]
  });

  // Departing date
  $('#datepicker').datepicker({
    dateFormat: 'dd-mm-yy'
  });

  $('#datepicker').datepicker('setDate', new Date());

  // Trip duration
  $('#length').selectmenu();

  // Advanced search

  $('.advanced-search').on('click', function() {

    $('#advanced-search').slideToggle(100);
  });

  $('.advanced-search-blocks li').on('click', function(event) {

    if($(this).find('input[type="checkbox"]').is(':checked')) {

      $(this).removeClass('checked');
      $(this).find('input[type="checkbox"]').prop('checked', false);

    } else {

      $(this).addClass('checked');
      $(this).find('input[type="checkbox"]').prop('checked', true);

    }

  });
  /* Result list tabs on front page*/
  $( '#result-tabs' ).tabs();

  /* Everything related to the offer view */
  $( '#view-tabs' ).tabs();

});
