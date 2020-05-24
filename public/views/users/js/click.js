$(document).ready(function(){ 
    $('.balance').on('click', function() {
            window.location.href='/students/balance' 
        })


    $('.history').on('click', function() {
            window.location.href='/students/history' 
        })

 
    $('.myEat').on('click', function() {
            window.location.href='/students/myEat' 
        })


    $('.out').on('click', function (){
        localStorage.accessToken = '';
        localStorage.refreshToken = '';
        window.location.href = '/'
    });
    
    $('.settings').on('click', function (){
        window.location.href = '/students/settings'
    });
})