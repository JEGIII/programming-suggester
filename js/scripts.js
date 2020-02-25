$(document).ready(function() {
  $("#program").submit(function(event) {
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

    console.log(nameInput);
    console.log(fieldInput);
    console.log(osInput);
    console.log(levelInput);
    console.log(infoInput);
    console.log(areaInput);
    
    /*One concern I'm having is if the if-statement should look like this:
    
    if (fieldInput === "ruby" && osInput === "ms" && levelInput === "ruby" && infoInput === "ruby" && areaInput === "school anywhere home") {
      
    or this:
      
    if (ruby > c && ruby > js && ruby > python && ruby > swift && ruby > html) {
    $(".ruby").fadeIn(); 
    
    */

    if (ruby > c && ruby > js && ruby > python && ruby > swift && ruby > html) {
      $(".ruby").fadeIn();
    } else if (c > ruby && c > js && c > python && c > swift && c > html) {
      $(".c#").fadeIn();
    } else if (js > ruby && js > c && js > python && js > swift && js > html) {
      $(".js").fadeIn();
    } else if (python > ruby && python > c && python > js && python > swift && python > html) {
      $(".python").val();
    } else if (swift > ruby && swift > c && swift > js && swift > python && swift > html) {
      $(".swift").val();
    } else if (html > ruby && html > c && html > js && html > python && html > swift) {
      $(".html").val();
    }

    if(ruby === Math.max(c, js, python, swift, html)) {
      $(".ruby").fadeIn();
    }
    
    if(c === Math.max(ruby, js, python, swift, html)) {
      $(".c#").fadeIn();
    }

    if(js === Math.max(ruby, c, python, swift, html)) {
      $(".js").fadeIn();
    }

    if(python === Math.max(ruby, c, js, swift, html)) {
      $(".python").fadeIn();
    }

    if(swift === Math.max(ruby, c, js, python, html)) {
      $(".swift").fadeIn();
    }

    if(html === Math.max(ruby, c, js, python, swift)) {
      $(".html").fadeIn();
    }

    $(".result").fadeIn();
    
    event.preventDefault();
  });
});