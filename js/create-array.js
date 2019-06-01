$("#secondArrays").hide();
$("#finalArray").hide();
var firstArray = [];
var arrayArray = [];
var openFisca = "";
$('#step1').click(function() {
  var lines = $('#firstarray').val().split(/\n/);
  var output = [];
  var outputText = [];
  for (var i = 0; i < lines.length; i++) {
    // only push this line if it contains a non whitespace character.
    if (/\S/.test(lines[i])) {
      outputText.push($.trim(lines[i]));
      output.push($.trim(lines[i]));
      window.firstArray.push($.trim(lines[i]));
    }
  }
  console.log(output);
  $.each(outputText, function( index, value ) {
    $("#firstArray").hide();
    $("#secondArrays").show();
    $("#secondArrays main").append('<p>' + value + '</p><textarea class="form-control secondArray" placeholder="" rows="8"></textarea><hr>');
  });
})


$('#step2').click(function() {
  window.firstArray.forEach(function (item, index) {
    console.log(item, index);
  });
  $( ".secondArray" ).each(function( index ) {
    var lines = $(this).val().split(/\n/);
    var output = [];
    var outputText = [];
    for (var i = 0; i < lines.length; i++) {
      // only push this line if it contains a non whitespace character.
      if (/\S/.test(lines[i])) {
        outputText.push($.trim(lines[i]));
        output.push($.trim(lines[i]));
      }
    }
    window.arrayArray.push(output);
  });
  window.arrayArray = $.combinations(window.arrayArray);
  window.arrayArray.forEach(function (item, index) {
    window.openFisca += "- name: Test number " + index + " - (" + item + ") \n";
    window.openFisca += "\tinput:\n"
    item.forEach(function (item, index) {
      var inputVar = window.firstArray[index];
      window.openFisca += "\t\t" + inputVar + ": " + item + "\n";
    });
  });
  console.log(window.openFisca);
//  console.log(window.arrayArray);
  $("#secondArrays").hide();
  $('#arrayOfArrays').val(window.openFisca);
  $("#finalArray").show();
})
