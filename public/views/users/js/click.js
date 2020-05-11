$(document).ready(function(){ 
    $('.balance').on('click', function() {
            window.location.href='../balance/index.html' 
        })


    $('.history').on('click', function() {
            window.location.href='../history/index.html' 
        })

 
    $('.myEat').on('click', function() {
            window.location.href='../myEat/index.html' 
        })


    $('.out').on('click', function (){
        localStorage.accessToken = '';
        localStorage.refreshToken = '';
        window.location.href = '../../authorization/index.html'
    });
    
    $('.settings').on('click', function (){
        window.location.href = '../settings/index.html'
    });
})