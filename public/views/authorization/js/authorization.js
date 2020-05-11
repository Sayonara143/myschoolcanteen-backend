

let url;
let url2;
let href;
$(document).ready(function(){  
console.log($("#student").val());

    $('#student').click( function() {  
        $('#teacher').prop('checked', false);
        url = "https://canteenbobrova.glitch.me/api/v1/oauth/tokens/users"
        href = 0;
    } ); 
    $('#teacher').click(function() {  
        $('#student').prop('checked', false);
        url = "https://canteenbobrova.glitch.me/api/v1/oauth/tokens/admin"
        href = 1;
      
});
function get(){
    if(href == 0){
        window.location.href = "/users/balance";
    }
    if(href == 1){
        window.location.href = "/admin/student";
    }
    // $.ajax({ 
    //     url: url2, 
    //     dataType: "json", // Для использования JSON формата получаемых данных
    //    	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
    // });

} ; 
$('.button').on('click',function()
{
    let login = $('#login').val();
    let password = $('#password').val();
    $.ajax({ 
 
        url: url, 
        dataType: "json", // Для использования JSON формата получаемых данных
       	method: "POST", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {"login": login,
             "password": password
            },
        success: function (data){
            $('#login').val('');
            $('#password').val('');
            localStorage.setItem('accessToken',data.accessToken);
            localStorage.setItem('refreshToken',data.refreshToken);
            get();
        },
        error: function (){
            $('#login').val('');
            $('#password').val('');
            alert('Неверный пароль или логин');
        }
        
    });

}); 
})