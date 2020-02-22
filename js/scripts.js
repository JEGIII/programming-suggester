$(document).ready(function() {
  var program = ["question1", "question2", "question3"];

  program.forEach(function(blank) {
    var userInput = $("input." + program).val();
    console.log(userInput);
    $("." + program).text(userInput).val();
  });
})