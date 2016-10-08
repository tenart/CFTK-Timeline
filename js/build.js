$(function() {
    
    listItem = '<input type="text" class="litem" placeholder="List item">'; // Defines template for list item
    
    $('#b_right').click(function() {
        if ( $('#content_input').children().length > 1) {
            $('#content_input input:last-child').remove();                  // Removes a list item from the input list and changes focus
            $('#content_input input:last-child').focus();
        };
    });
    
    $('#b_left').click(function() {
        $('#content_input').append(listItem);                               // Adds a list item to the input list and changes focus
        $('#content_input input:last-child').focus();
    });
    
    $('#generate').click(function() {    
        
        if ( $('#build_year').val().length > 0 && $('#content_input input:nth-child(1)').val().length > 0 ) {
            
            var buildYear = $('#build_year').val();                         // Collects information from input field
            var imageURL = $('#build_photo').val();
            var flickrURL = $('#build_flickr').val();
            
            $('#build_preview').empty();
            
            if ( imageURL.length > 0) {                                     // Generate a card with the given template
                
                $('#build_preview').append( '<div class="card yr" id="' + buildYear + '"><div class="img_container"><a href="' + flickrURL + '" target="_blank"></a><img src="' + imageURL + '"></div><h1>' + buildYear + '</h1><ul></ul></div>' );

                
                
            } else {                                                        // If no image URl is assigned, the generated card will have the nopics class
                
                $('#build_preview').append( '<div class="card yr nopics" id="' + buildYear + '"><div class="img_container"><a href="" target="_blank"></a><img src=""></div><h1>' + buildYear + '</h1><ul></ul></div>' );
                
            };
            
            $('.litem').each(function( index ) {
                $('.card ul').append( '<li>' + $(this).val() + '</li>' );   // Iterates through the list item inputs and properly add them to the card
            });
            
            $('#output').text($('#build_preview').html());                  // Outputs the plain HTML code
            $('#output').show();
            
        } else {
            
            alert('Required fields must be filled out!');
            
        };
        
    });
        
})