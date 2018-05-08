//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').attr('class', 'tasty');
  });
}

function pressIt() {
  $('input')
}




$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
