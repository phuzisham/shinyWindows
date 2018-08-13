$("#screenCheck").click(function() {
  if ($('input[name="screenCheck"]').is(':checked')) {
    $("#hidden").show(1000);
  } else {
    $("#hidden").hide(1000);
  }
});

$('#submit-estimate').click(function(e) {
  e.preventDefault();
  if ($('#windows').val()) {
    let x = parseInt($('#windows').val());
    if (isNaN(x)) {
      alert('Please input a numerical value.')
    } else {
      estimateForm(x);
    }
  } else {
    alert('Please fill out all form fields.');
  }
});


function estimateForm(num) {
  alert(num);
}
