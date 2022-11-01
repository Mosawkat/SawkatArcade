$("#search").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit").click();
    }
});

$("#submit").click(function() {
  alert("Button code executed.");
});