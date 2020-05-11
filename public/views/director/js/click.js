$(document).ready(function(){ 
    $('.students').on('click', function() {
            window.location.href='../student/index.html' 
        })
    $('.menuMenu').on('click', function() {
            window.location.href='../menu/index.html' 
        })


    $('.out').on('click', function (){
        localStorage.accessToken = '';
        localStorage.refreshToken = '';
        window.location.href = '../../authorizationDirector/index.html'
    });
    
    $('.settings').on('click', function (){
        window.location.href = '../settings/index.html'
    });
})