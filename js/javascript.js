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

  $( "#datepicker" ).datepicker("setDate", new Date());  //start datepicker
  //end datepicker

  $( "#length" ).selectmenu(); //travel length select

  $('.advanced-search').on('click', function() { //opens advanced search
    $('#advanced-search').slideToggle(100);
    });

  $( "#tabs" ).tabs();

  $('.advanced-search-blocks input[type="checkbox"]').on('change', function() {

    if($(this).is(':checked')) {

      $(this).parent().addClass('checked');

    } else {

      $(this).parent().removeClass('checked');

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
