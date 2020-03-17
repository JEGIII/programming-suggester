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

    if (fieldInput === "app") {
      ruby ++;
    }
    if (osInput === "apple") {
      ruby ++;
    }
    if (levelInput === "solid") {
      ruby ++;
    }
    if (infoInput === "online") {
      ruby ++;
    }
    if (areaInput === "school" || "anywhere" || "home") {
      ruby ++;
    }


    if (fieldInput === "c#") {
      c ++;
    }
    if (osInput === "windows") {
      c ++;
    }
    if (levelInput === "in-depth") {
      c ++;
    }
    if (infoInput === "online") {
      c ++;
    }
    if (areaInput === "school" || "anywhere" || "home"){
      c ++;
    }


    if (fieldInput === "web") {
      js ++;
    }
    if (osInput === "windows" || "apple") {
      js ++;
    }
    if (levelInput === "middle") {
      js ++;
    }
    if (infoInput === "individual" || "online") {
      js ++;
    }
    if (areaInput === "school" || "anywhere" || "home") {
      js ++;
    }


    if (fieldInput === "intel") {
      python ++;
    }
    if (osInput === "windows") {
      python ++;
    }
    if (levelInput === "solid") {
      python ++;
    }
    if (infoInput === "pairing" || "individual" || "online") {
      python ++;
    }
    if (areaInput === "school" || "anywhere" || "home") {
      python ++;
    }


    if (fieldInput === "app") {
      swift ++;
    }
    if (osInput === "apple") {
      swift ++;
    }
    if (levelInput === "easy") {
      swift ++;
    }
    if (infoInput === "individual" || "online") {
      swift ++;
    }
    if (areaInput === "school" || "anywhere" || "home") {
      swift ++;
    }


    if (fieldInput === "web") {
      html ++;
    }
    if (osInput === "windows" || "apple") {
      html ++;
    }
    if (levelInput === "easy") {
      html ++;
    }
    if (infoInput === "individual" || "online") {
      html ++;
    }
    if (areaInput === "school" || "anywhere" || "home") {
      html ++;
    }

    console.log(ruby);
    console.log(c);
    console.log(python);
    console.log(js);
    console.log(swift);
    console.log(html);


    $(".ruby").hide();
    $(".c").hide();
    $(".js").hide();
    $(".python").hide();
    $(".swift").hide();
    $(".html").hide();

    if(ruby > Math.max(c, js, python, swift, html)) {
      $(".ruby").fadeIn();
    }
    
    if(c > Math.max(ruby, js, python, swift, html)) {
      $(".c#").fadeIn();
    }

    if(js > Math.max(ruby, c, python, swift, html)) {
      $(".js").fadeIn();
    }

    if(python > Math.max(ruby, c, js, swift, html)) {
      $(".python").fadeIn();
    }

    if(swift > Math.max(ruby, c, js, python, html)) {
      $(".swift").fadeIn();
    }

    if(html > Math.max(ruby, c, js, python, swift)) {
      $(".html").fadeIn();
    }

    $("#result").fadeIn();
    
    event.preventDefault();
  });
});