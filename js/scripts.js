$(document).ready(function() {
  $("#program").submit(function() {
    var ruby = 0;
    var c = 0;
    var js = 0;
    var python = 0;
    var swift = 0;
    var html = 0;

    let nameInput = $("input#name").val();
    let fieldInput = $("input:radio[name=field]:checked").val();
    let osInput = $("input:radio[name=os]:checked").val();
    let levelInput = $("input:radio[name=level]:checked").val();
    let infoInput = $("input:radio[name=info]:checked").val();
    let areaInput = $("input:radio[name=area]:checked").val();

    

    

  })
  var program = ["question1", "question2", "question3", "question4", "question5"];

  program.forEach(function(blank) {
    var userInput = $("input." + program).val();
    console.log(userInput);
    $("." + program).text(userInput).val();
  });
})