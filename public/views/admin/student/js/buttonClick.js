$(document).ready(function(){ 
    $('.addUser').hover( 
        function() {
            $('.addUsersButton').css('opacity', 1) 
        },
        function() {
            $('.addUsersButton').css('opacity', 0) 
        }
    )
    $('.history').hover( 
        function() {
            $('.historyButton').css('opacity', 1) 
        },
        function() {
            $('.historyButton').css('opacity', 0) 
        }
    )
    $('.chart').hover( 
        function() {
            $('.chartButton').css('opacity', 1) 
        },
        function() {
            $('.chartButton').css('opacity', 0) 
        }
    )
})