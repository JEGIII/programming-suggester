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

    if(ruby > c && ruby > js && ruby > python && ruby > swift && ruby > html) {
      $(".ruby").fadeIn();
    } else if(c > ruby && c > js && c > python && c > swift && c > html) {
      $(".c#").fadeIn();
    } else if(js > ruby && js > c && js > python && js > swift && js > html) {
      $(".js").fadeIn();
    } else if(python > ruby && python > c && python > js && python > swift && python > html) {
      $(".python").val();
    } else if(swift > ruby && swift > c && swift > js && swift > python && swift > html) {
      $(".swift").val();
    } else if(html > ruby && html > c && html > js && html > python && html > swift) {
      $(".html").val();
    }
  });
});