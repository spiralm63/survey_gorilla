$(document).ready(function() {
  var varCount = 1
  //remove a textfield    
  $('form').on('click', '.removeVar', function(){
     $(this).parent().remove();
  });
  //add a new node
  $('#addVar').on('click', function(){
  varCount++;
  $node = '<p><label for="choice_input'+varCount+'">Choice: </label><input type="text" name="choice_input['+varCount+']" id="choice_input'+varCount+'"><span class="removeVar">Remove Choice</span></p>';
  $(this).parent().before($node);
  });
});
