$( function() { //Starting point select
  var startingpoint = [
    "Tallinn",
    "Tartu",
    "Helsingi",
  ];
  $( "#start" ).autocomplete({
    source: startingpoint
  });   //end of starting point select

  var destination = [ // destination select
    "Hispaania",
    "Holland",
    "Hiina",
  ];
  $( "#end" ).autocomplete({
    source: destination
  }); //end of destination select

  $( "#datepicker" ).datepicker({     //start datepicker
    dateFormat: 'dd-mm-yy'
  });

  $('#datepicker').datepicker('setDate', new Date());

  //end datepicker

  $( "#length" ).selectmenu(); //travel length select

  $('.advanced-search').on('click', function() { //opens advanced search
    $('#advanced-search').slideToggle(100);
    });

  $( "#tabs" ).tabs();

  $('.advanced-search-blocks li').on('click', function(event) {

    if($(this).find('input[type="checkbox"]').is(':checked')) {

      $(this).removeClass('checked');
      $(this).find('input[type="checkbox"]').prop('checked', false);

    } else {

      $(this).addClass('checked');
      $(this).find('input[type="checkbox"]').prop('checked', true);

    }

  });


  $.ajax({
    method: 'GET',
    url: 'http://ipinfo.io',
    dataType: 'jsonp'
  }).done(function(response) {

    $('input#start').val(response.city);

  });

});
