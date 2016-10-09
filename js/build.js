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
                                                                            // Generates a card with the given template
            
            $('#build_preview').append( '<div class="card yr" id="' + buildYear + '">\n\t<div class="img_container">\n\t\t<a href="" target="_blank"></a>\n\t\t<img src="">\n\t</div>\n\t<h1>' + buildYear + '</h1>\n\t<ul>\n</ul>\n</div>' );
            
            if ( imageURL.length == 0) {                                     
                
                $('.card').addClass('nopics')                               // Checks if an image URL has been provided and if not adds the nopics class
                
            };
            
            $('.litem').each(function( index ) {
                $('.card ul').append( '\t\t<li>' + $(this).val() + '</li>\n' );   // Iterates through the list item inputs and properly add them to the card
            });
            
            $('.card ul').append('\t</ul>');
            
            $('#output').text($('#build_preview').html());                  // Pushes the plain HTML code to #output
            
            hljs.configure({
                tabReplace: '     '                                         // Configures highlight.js to replace tab characters with 5 spaces because I like my tabs to have 5 spaces and anyone who uses 4 can leave :)
            });
            $('#output').each(function(i, block) {
                hljs.highlightBlock(block);                                 // Calls for highlight.js to prettify the code output dynamically
            });
            
            $('#output').show();                                            // Displays the #output
            
        } else {
            
            alert('Required fields must be filled out!');
            
        };
        
    });
        
})