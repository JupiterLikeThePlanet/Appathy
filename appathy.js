$(document).ready(function() {
  // alert("here");

  // $('p').css('color','red')

  // $('.md > textarea')

  var our_button = $('<input type="button" value="so what"/>');
  // ^ name a js variable (our_button) and set it equal to inserting an element. (our element type is a button and the name of the button (value) is "so what"). we are inserting an element using jquery syntax

  $('.usertext-buttons').append(our_button);
  // ^ appends (aka adds) our "so what" button next to the save button
  // did not append to $('.save') because that put our_button inside the save button when what we wanted was to put our_button inside the container "usertext-buttons" in order to put our_button next to the save button

});