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

  $( "#datepicker" ).datepicker();  //start datepicker
  $( "#anim" ).on( "change", function() {
  $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
  });//end datepicker

  $( "#length" ).selectmenu(); //travel length select

  $('.advanced-search').on('click', function() { //opens advanced search
    $('#advanced-search').slideToggle(100);
    });
  $( "input" ).checkboxradio({}); //advanced search checkboxes

  $( "#tabs" ).tabs();

} ); 