<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery UI Slider - Snap to increments</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script>
  $(function() {
    $( "#slider" ).slider({
      value:100,
      min: 0,
      max: 500,
      step: 50,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
  });
  </script>
</head>
<body>
 
<p>
  <label for="amount">Donation amount ($50 increments):</label>
  <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
</p>
 
<div id="slider"></div>
 
 
</body>
</html>


value()Returns: Number

Get the value of the slider.
This signature does not accept any arguments.
Code examples:
Invoke the method:

1
var selection = $( ".selector" ).slider( "value" );

change( event, ui )Type: slidechange

Triggered after the user slides a handle, if the value has changed; or if the value is changed programmatically via the value method.
event
Type: Event
ui
Type: Object
handle
Type: jQuery
The jQuery object representing the handle that was changed.
value
Type: Number
The current value of the slider.
Code examples:
Initialize the slider with the change callback specified:

1
2
3
$( ".selector" ).slider({
  change: function( event, ui ) {}
});
Bind an event listener to the slidechange event:

1
$( ".selector" ).on( "slidechange", function( event, ui ) {} );


