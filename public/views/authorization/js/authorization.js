let url;
let href;
$(document).ready(function(){  
console.log($("#student").val());

    $('#student').click( function() {  
        $('#teacher').prop('checked', false);
        url = "https://cooperative-universal-homegrown.glitch.me/api/v1/oauth/tokens/users"
        href =  '../users/balance/index.html'
    } ); 
    $('#teacher').click(function() {  
        $('#student').prop('checked', false);
        url = "https://cooperative-universal-homegrown.glitch.me/api/v1/oauth/tokens/admin"
        href =  '../admin/student/index.html'
      
});  
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
            window.location.href = href;
        },
        error: function (){
            $('#login').val('');
            $('#password').val('');
            alert('Неверный пароль или логин');
        }
        
    });

}); 
})