$('#step1').click(function() {
  var lines = $('#firstarray').val().split(/\n/);
  var output = [];
  var outputText = [];
  for (var i = 0; i < lines.length; i++) {
    // only push this line if it contains a non whitespace character.
    if (/\S/.test(lines[i])) {
      outputText.push($.trim(lines[i]));
      output.push($.trim(lines[i]));
    }
  }
  console.log(output);
  $('#firstarray').val('[' + outputText + ']');
  $.each(outputText, function( index, value ) {
    $("#secondArrays").append(value + ", ");
  });
})
