$("#screenCheck").click(function() {
  $("#hidden").show(1000);
  $("#screenCheckDiv").hide(1000);
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
      alert('Please input a numerical value.');
    } else if (validateEmail(email) == false) {
      alert('Please enter a valid email address.');
    } else {
    validateForm(windows, radio, email);
    }
  } else {
    alert('Please fill out all form fields.');
  }
});


function validateForm(windows, radio, email) {
  console.log($('#screens').val());
  if ($('input[name="screenCheck"]').is(':checked')) {
    let screens = parseInt($('#screens').val());
    if (isNaN(screens)) {
      alert('Please input a numerical value.');
    } else {
      console.log(estimateReturn(windows, radio, email, screens))
    }
  } else {
    console.log(estimateReturn(windows, radio, email, screens))
  }
}

function estimateReturn(windows, radio, email, screens) {
  let result = 0;
  if (radio == 'insideRadio') {
    windows = windows * 5;
    if (screens) {
      return windows + screens;
    } else {
      return windows;
    }
  } else {
    windows = windows * 3;
    if (screens) {
      return windows + screens;
    } else {
      return windows;
    }
  }
}
