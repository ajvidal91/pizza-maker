/*
pizza making app in which the user will select a minimum of 3 toppings and if
the topping goes on half of the pizza or the whole pizza.
*/
// user should be able to see the pizza in real time as toppings get added

$("input").on("change", function(){ // the "change" is for my radio inputs
  switch($(this).attr("class")){
    case "cheeseWhole":
    $(".pizzaLeft, .pizzaRight").addClass("cheese")
    break;
    case "cheeseLeft":
      $(".pizzaRight").removeClass("cheese")
      $(".pizzaLeft").addClass("cheese")
    break;
    case "cheeseRight":
      $(".pizzaLeft").removeClass("cheese")
      $(".pizzaRight").addClass("cheese")
    break;
    case "pepWhole":
      $(".pep").removeClass("hidden")
    break;
    case "pepLeft":
      $(".pizzaRight .pep").addClass("hidden")
      $(".pizzaLeft .pep").removeClass("hidden")
    break;
    case "pepRight":
        $(".pizzaLeft .pep").addClass("hidden")
        $(".pizzaRight .pep").removeClass("hidden")
    break;
    case "mushWhole":
        $(".mush").removeClass("hidden")
    break;
    case "mushLeft":
        $(".pizzaRight .mush").addClass("hidden")
        $(".pizzaLeft .mush").removeClass("hidden")
    break;
    case "mushRight":
      $(".pizzaLeft .mush").addClass("hidden")
      $(".pizzaRight .mush").removeClass("hidden")
      break;
  }
});



/*
"
$("input").on("change", function)
switch($(this).attr("class")){
  case "cheesewhole":
  $(".pizzaLeft, .pizzaRight").addClass("cheese")
  break;
  case "pepLeft":
  $(".pizzaRight .pep")

}
}

*/
