
$(document).ready(function(){

  //Handle inputs from the input box on enter
  $("input").on("keypress",function(e){
    e.stopPropagation();
    if(e.keyCode ==  13){
      enterHit();
      return false;
    }
  });

  $("input").on("keyup",function(e){
    e.stopPropagation();
    var length = $(this).val().length;
    if(length > 0) {
      $("input").removeClass("input-strobe");
    } else {
      $("input").addClass("input-strobe");
    }
  });

  $(".editor").on("click",function(){
    $("input").focus();
  });

  $(".enter-button").on("click",function(){
    enterHit();
  })


}); // document.ready


  //Animate the enter button
function enterHit(){
    $(".enter-button").removeClass("enterhit");
    $(".enter-button").width($(".enter-button").width());
    $(".enter-button").addClass("enterhit");
    var value = $("input").val();
    //handleInput(value);
  }

  //Parses text from the input field
function handleInput(text){
    if(parseInt(text,10) > 0 && parseInt(text,10) < levels.length+1) {
      currentLevel = parseInt(text,10) - 1;
      loadLevel();
      return;
    }
    fireRule(text);
  }