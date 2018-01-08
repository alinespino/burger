
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurger");
  
      var newBurgerState = {
        devoured: newBurger
      };

          // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed devoured", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    $("#submit-btn").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
          burger_name: $("#burger-name").val().trim(),
          devoured: 0
        };

        // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

});