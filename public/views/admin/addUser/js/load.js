import * as validPassword  from "./validaition.js";
$(document).ready(function(){  
    let ticket; 
    $.ajax({ 
        url: "https://cooperative-universal-homegrown.glitch.me/api/v1/admin/sync", 
        //dataType: "json", // Для использования JSON формата получаемых данных
       	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {},
        headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        success: function (data){
        
        },
        error: function (jqXHR,  textStatus, errorThrown){
            if(jqXHR.status == 401){
                alert('Ваше сессия завершена');
                window.location.href = "../../authorization/index.html"
            }
            
        }
        
    });
    $('.free__check').click( function() {  
        $('.paid__check').prop('checked', false);
        ticket = 'free';
    } ); 
    $('.paid__check').click(function() {  
        $('.free__check').prop('checked', false);
        ticket = 'paid';
    });
    $('.button').on('click', function() {
        if(validPassword.validPassword() & validPassword.validPasswordLenght()&validPassword.validDataLenght()){
        let surname = $('.surname').val();
        let name = $('.name').val();
        let patronymic = $('.patronimyc').val();
        let login = $('.login').val();
        let numberPhone = $('.numberPhone').val();
        let password = $('.password1').val();
        $.ajax({ 
            url: "https://cooperative-universal-homegrown.glitch.me/api/v1/admin/createUser", 
            //dataType: "json", // Для использования JSON формата получаемых данных
               method: "POST", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: {
                "surname":surname,
                "name":name,
                "patronymic":patronymic,
                "login":login,
                "numberPhone":numberPhone,
                "password":password,
                "ticket":ticket,
            },
            headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
            success: function (data){
                alert('Пользователь добавлен')
            
            },
            error: function (jqXHR,  textStatus, errorThrown){
                if(jqXHR.status == 404){
                    alert('Ошибка');   
                }
                if(jqXHR.status == 500){
                    alert('неверно введены данные');  
                }
                
            }
            
        });
    }
    })

}); 