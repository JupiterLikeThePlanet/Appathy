$(document).ready(function() {

  var dropdown = ["<select id='so_what_choice'>",
                  "<option value='0'>Apathetic</option>",
                  "<option value='1'>Sardonic</option>",
                  "<option value='2'>Ironic</option>",
                  "<option value='3'>Irreverant</option>",
                  "<option value='4'>Taunt</option>",
                  "<option value='5'>What the fuck ever</option>",
                  "</select>"]

var whateverArt = ['┌∩┐(◣_◢)┌∩┐','(╯°□°）╯︵ ┻━┻','( ͡° ͜ʖ ͡°)','¯\_(ツ)_/¯','╭∩╮（︶︿︶）╭∩╮', 'ᶠᶸᶜᵏ♥ᵧₒᵤ', '┻━┻︵ \(°□°)/ ︵ ┻━┻', 'ლ(ಠ益ಠ)ლ' ]

var asciiArt = [0,1,2,3,4,'[CeLo](http://imgur.com/9576Bxn)']

// function
var getArt1 = function() {
  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/initial/apathetic.txt', function(data) {
    asciiArt[0] = data
    }, 'text');
}

var getArt2 = function(){
  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/initial/sardonic.txt', function(data) {
    asciiArt[1] = data
    }, 'text');
}

var getArt3 = function(){
  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/initial/ironic.txt', function(data) {
    asciiArt[2] = data
    }, 'text');
}

var getArt4 = function(){
  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/initial/irreverant.txt', function(data) {
    asciiArt[3] = data
    }, 'text');
}

var getArt5 = function(){
  $.get('https://raw.githubusercontent.com/JupiterLikeThePlanet/Appathy/initial/taunt.txt', function(data) {
    asciiArt[4] = data
    }, 'text');
}

getArt1();
getArt2();
getArt3();
getArt4();
getArt5();

  function getRandom(asciiArt) {
    return asciiArt[Math.floor(Math.random() * asciiArt.length)];
  };


  // Whatever button >> generates random photo
  var whatever = $("<button id='whatever' type='button'>whatever</button>");
  $('.usertext-buttons').append(whatever);

  $('#whatever').on('click',function(){
    $('.md textarea').val(getRandom(whateverArt));
  });


  // So What button >> generates a photo based on the user's choice from the list
  var so_what = $("<button id='so_what' type='button'>so what</button>");
  $('.usertext-buttons').append(so_what);

  $('body').on('click','#so_what',function(){
    $('#so_what').hide();
    $('.usertext-buttons').append(dropdown.join(''));
    var selected = parseInt($('#so_what_choice').find('option:selected').val());
    $('.md textarea').val(asciiArt[selected]);
  });

  $('body').on('change','#so_what_choice',function(){
      // var selected =
      var selected = parseInt($('#so_what_choice').find('option:selected').val());
      console.log(asciiArt[selected]);
      $('.md textarea').val(asciiArt[selected]);
  });

});