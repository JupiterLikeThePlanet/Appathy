$(document).ready(function() {

  // $('p').css('color','red') - tests

  var asciiArt = [];

  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/asciiart/futurama.txt', function(data) {
     asciiArt.push(data)
    }, 'text');

  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/asciiart/baby.txt', function(data) {
     asciiArt.push(data)
    }, 'text');

  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/asciiart/so_what.txt', function(data) {
     asciiArt.push(data)
    }, 'text');
  // ^ load pre-made ascii art unicode text file with jQuery get and place them into an array in variable AsciiArt

  function getRandom(asciiArt) {
    return asciiArt[Math.floor(Math.random() * asciiArt.length)];
  };
  // ^ randomly selects an ascii art from asciiArt array

  var our_button = $("<button id='so_what' type='button'>so what</button>");
  // ^ name a js variable (our_button) and set it equal to inserting an element. (our element type is a button and the name of the button (value) is "so what"). we are inserting an element using jquery syntax

  $('.usertext-buttons').append(our_button);
  // ^ appends (aka adds) our "so what" button next to the save button
  // did not append to $('.save') because that put our_button inside the save button when what we wanted was to put our_button inside the container "usertext-buttons" in order to put our_button next to the save button

  $('#so_what').on('click',function(){
    $('.md textarea').val(getRandom(asciiArt));
  });
  // ^ on "So What" button click, pastes the ascii art to the text field

});