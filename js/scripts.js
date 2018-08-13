$("#screenCheck").click(function () {
  if ($('input[name="screenCheck"]').is(':checked')) {
    $("#hidden").show(1000);
  } else {
    $("#hidden").hide(1000);
  }
});
