// Asynchronous Flickr Search

$(document).on('ready', function(){
	var searchImages = function (tags){
		var flickrAPI= "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		$.getJSON( flickrAPI, {
			tags: tags,
			tagmode: "any",
			format: "json"
		})	
		.done(function( data ) {
			console.log(data);
			$('#images').empty();
			$.each( data.items, function( i, item ) {
				var newListItem = $('<li>');
				var newTitle = $('<p class="image-title">').html(item.title).appendTo(newListItem);
				var newDate = $('<p class="image-date">').html(item.date).appendTo(newListItem);
				var lines = item.description.split('<br />');
				console.log(lines.length);
				if(lines.length > 3){
					lines = lines.slice(0,3);
					lines[3] = "...";
				}
				var newDescription = $('<p class="image-description">').html(lines.join('<br />')).appendTo(newListItem);
				var newAuthor = $('<p class="image-author">').html(item.author).appendTo(newListItem);
				var newLink = $ ('<a>').attr('href', item.link).text('View on Flickr').appendTo(newListItem);
				console.log(newListItem);
				newListItem.appendTo('#images');
			});
		});
	};
	$("button.search").on('click', function(event)  {
		event.preventDefault();
		var tags = 	$('input[name="searchText"]').val();
		console.log(tags);
		searchImages(tags);
		$('input[name="searchText"]').val("");
	});
});
	
	
    // Place your code here, inside the document ready handler.

    // Create a function called `searchImages()`. This function will handle the
    // process of taking a user's search terms and sending them to Flickr for a
    // response.

    // Inside the `searchImages()` function, the following things should happen:

        // 1.   Accept a string value called `tags` as an argument. Example:
        //      `var searchPhotos = function(tags){`
        //
        // 2.   Define the location of the Flickr API like this:
        //      `var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";`
        //
        // 3.   Construct a `$.getJSON()` call where you send a request object
        //      including the tags the user submitted, and a `done()` handler
        //      that displays and refreshes the content appropriately.
        //
        // 4.   Update the display to add the images to the list with the id
        //      `#images`.

    // Attach an event to the search button (`button.search`) to execute the
    // search when clicked.

        // When the Search button is clicked, the following should happen:
        //
        // 1.   Prevent the default event execution so the browser doesn't
        //      Example: `event.preventDefault();`
        //
        // 2.   Get the value of the 'input[name="searchText"]' and use that
        //      as the `tags` value you send to `searchImages()`.
        //
        // 3.   Execute the `searchImages()` function to fetch images for the
        //      user.

    // STRETCH GOAL: Add a "more info" popup using the technique shown on the
    // Bootstrap Modal documentation: http://getbootstrap.com/javascript/#modals-related-target



