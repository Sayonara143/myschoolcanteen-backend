// $(document).ready(function(){   
//     let url_image;
//     $.ajax({ 
//         url: "https://cooperative-universal-homegrown.glitch.me/api/v1/users/getYourBalance", 
//         //dataType: "json", // Для использования JSON формата получаемых данных
//        	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
//         data: {},
//         headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
//         success: function (data){
//             console.log(data);
//             url_image = "https://cooperative-universal-homegrown.glitch.me/"+ data.path;
//             $(".balance__know").text("Баланс: " + data.balance);
//             $(".nameUser").text(data.surname + "" + data.name);	
//             $(".img__avatar").attr("src", url_image);   
//         },
//         error: function (jqXHR,  textStatus, errorThrown){
//             if(jqXHR.status == 401){
//                 alert('Ваше сессия завершена');
//                 window.location.href = "../../authorization/index.html"
//             }
            
//         }
        
//     });

// }); 