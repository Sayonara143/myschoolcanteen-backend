$(document).ready(function(){   
    let url_image;
    $.ajax({ 
        url: "https://cooperative-universal-homegrown.glitch.me/api/v1/users/settings", 
        //dataType: "json", // Для использования JSON формата получаемых данных
       	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {},
        headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        success: function (data){
            console.log(data);
            url_image = "https://cooperative-universal-homegrown.glitch.me/"+ data.path;
            $(".changeName__value").text(data.surname +" "+ data.name + " " + data.patronymic);
            $(".changeEmail__value").text(data.email);
            $(".changePhone__value").text(data.phone);
            $(".changePassword__value").text("*****");	
            $(".img__avatar").attr("src", url_image);   
        },
        error: function (jqXHR,  textStatus, errorThrown){
            if(jqXHR.status == 401){
                alert('Ваше сессия завершена');
                window.location.href = "../../authorization/index.html"
            }
            
        }
        
    });

}); 