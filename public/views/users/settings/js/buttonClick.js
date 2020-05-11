$(document).ready(function(){ 
    $('.history').hover( 
        function() {
            $('.historyButton').css('opacity', 1) 
        },
        function() {
            $('.historyButton').css('opacity', 0) 
        }
    )
    $('.balance').hover( 
        function() {
            $('.balanceButton').css('opacity', 1) 
        },
        function() {
            $('.balanceButton').css('opacity', 0) 
        }
    )
    $('.myEat').hover( 
        function() {
            $('.myEatButton').css('opacity', 1) 
        },
        function() {
            $('.myEatButton').css('opacity', 0) 
        }
    )
    $('.out').hover( 
        function() {
            $('.outButton').css('opacity', 1) 
        },
        function() {
            $('.outButton').css('opacity', 0) 
        }
    )
})