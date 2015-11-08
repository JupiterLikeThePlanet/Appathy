$(document).ready(function() {
  // alert("here");

  // $('p').css('color','red')

  // $('.md > textarea')

  var our_button = $("<button id='so_what' type='button'>so what</button>");

  $('.usertext-buttons').append(our_button);

  // $('#so_what').click(fucntion(){
  $('body').on('click','#so_what',function(){
    $('#so_what').hide();
    // $('.usertext-buttons').load('testing.html #')
    $('.usertext-buttons').append("<select id='so_what_choice'><option id='option_1' value='test 1'>Test1</option><option value='test 2'>Test2</option></select>");

    $('.md textarea').val($('#option_1').val())
  })

  $('body').on('change','#so_what_choice',function(){
      alert('this happened')
      var selected =$('#so_what_choice').find('option:selected').val();
      $('.md textarea').val(selected);
  })

  // $('body').on('submit','#so_what_choice',function(){

    // ($('#option_1').val())
  // })

  // });
  // ^ name a js variable (our_button) and set it equal to inserting an element. (our element type is a button and the name of the button (value) is "so what"). we are inserting an element using jquery syntax
  // ^ appends (aka adds) our "so what" button next to the save button
  // did not append to $('.save') because that put our_button inside the save button when what we wanted was to put our_button inside the container "usertext-buttons" in order to put our_button next to the save button

});