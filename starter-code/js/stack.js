$(document).ready(function() {
  var stackDataStructure = new StackDataStructure();
  $("#add-stack").click(function() {
    var stack = stackDataStructure.push($("#stackelement").val());
    var cont = stack.length - 1;
    //console.log(cont);

    $(`.stack-element:eq(${cont * -1 + 9})`)
      .text(stack[cont])
      .addClass("addedelement");

    $(".error-stack.over").hide("fast");
    if (!stackDataStructure.canPush()) {
      $(".error-stack.over").show("fast");
    }
  });

  $("#delete-stack").click(function() {
    stackDataStructure.pop();
    var cont = stackDataStructure.stackControl.length;

    $(`.stack-element:eq(${cont * -1 + 9})`)
      .removeClass("addedelement")
      .empty();

    $(".error-stack.under").hide("fast");
    if (stackDataStructure.isEmpty()) {
      $(".error-stack.under").show("fast");
    }
  });
});
