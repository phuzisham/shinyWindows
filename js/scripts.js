$("#screenCheck").click(function() {
  if ($('input[name="screenCheck"]').is(':checked')) {
    $("#hidden").show(1000);
  } else {
    $("#hidden").hide(1000);
  }
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$('#submit-estimate').click(function(e) {
  e.preventDefault();
  let windows = parseInt($('#windows').val());
  let radio = $('input:radio[name="radios"]:checked').val();
  let email = $('#email').val();

  if ($('#windows').val()) {
    if (isNaN(windows)) {
      alert('Please input a numerical value.')
    } else if (validateEmail(email) == false) {
      alert('Please enter a valid email address.')
    } else {
      estimateForm(windows, radio, email);
    }
  } else {
    alert('Please fill out all form fields.');
  }
});


function estimateForm(windows, radio, email) {
  alert('success');
}
