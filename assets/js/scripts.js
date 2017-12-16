// Scripts

      var artist_list = ["The Weekend", "Ed Sheeran", "Bruno Mars", "Charlie Puth"];
      var $img_display = $("#image-display");


      function togglePic() {
          $img_display.on("click", "img", function (event) {
            var target = $(event.target);
            var state = target.data("state");

            event.stopPropagation();
            if ( state === "still" ) {
              target.attr("src", target.data("animate") );
              target.data("state", "animate");

            }else {
              target.attr("src", target.data("still"));
              target.data("state", "still");

            }
          });
      };
      function artistButton(event) {
        event.preventDefault();
        $img_display.empty();
        
        var term = "&q=" + $(event.target).attr("data-artist");
        var key = "&api_key=" + "dc6zaTOxFJmzC";
        var limit = "&limit=" + 5;

        var baseURL = "https://api.giphy.com/v1/gifs/search?";

        queryURL = baseURL + term + key + limit;

        $.ajax({
          url: queryURL,
          method: "GET"

        }).done(function(response) {

          var data = response.data;

          data.forEach(function(item) {
            var still = item.images.original_still;
            var animate = item.images.original;
            console.log(item.images);

            var img = $("<img>");
            img.attr({
              "src": still.url, 
              "data-state": "still", 
              "data-animate": animate.url,
              "data-still": still.url

            });

            $img_display.prepend(img);
          });

        });
        togglePic();

      };

      function renderButtons() {

        $("#button-holder").empty();

        for (var i = 0; i < artist_list.length; i++) {

          var a = $("<button>");
          a.attr("data-artist", artist_list[i]);
          a.text(artist_list[i]);
          a.addClass("artist");
          $("#button-holder").append(a);
        }

        $("#button-holder").on("mouseup", ".artist", artistButton);
      };

      $("#add-artist").on("click", function(event) {
        event.preventDefault();

        var $user_input = $("#user-input");
        var artist = $user_input.val().trim();
        $user_input.val("");
        artist_list.push(artist);

        renderButtons();
      });

      renderButtons();
