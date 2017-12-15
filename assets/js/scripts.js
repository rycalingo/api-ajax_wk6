// Scripts

      var heros = ["Captain America", "Spiderman", "Ironman", "Thor", "Vision", "Hawkeye", "Antman", "Falcon", "Scarlet"];

      var baseURL = "";

      function displayheroInfo() {

      }

      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < heros.length; i++) {

          var a = $("<button>");
          a.addClass("hero");
          a.data("name", heros[i]);
          a.text(heros[i]);
          $("#buttons-view").append(a);
        }
      }
      $("#add-hero").on("click", function(event) {
        event.preventDefault();

        var $hero_input = $("#hero-input");
        var hero = $hero_input.val().trim();

        $hero_input.val("");

        heros.push(hero);

        renderButtons();

      });

      $(document).on("click", ".hero", displayheroInfo);

      renderButtons();