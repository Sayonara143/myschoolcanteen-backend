$(document).ready(function(){   
$('.button').on('click',function()
{
    let login = $('#login').val();
    let password = $('#password').val();
    $.ajax({ 
 
        url: "https://cooperative-universal-homegrown.glitch.me/api/v1/oauth/tokens/admin", 
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
        },
        error: function (){
            $('#login').val('');
            $('#password').val('');
            alert('Неверный пароль или логин');
        }
        
    });

}); 
})