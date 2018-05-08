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
  $('input').on('keydown', function(key) {
    if(key.which == 71) {
      alert("'g' was pressed");
    }
  });
}




$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
