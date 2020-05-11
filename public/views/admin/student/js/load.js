$(document).ready(function(){   
    $.ajax({ 
        url: "https://cooperative-universal-homegrown.glitch.me/api/v1/admin/getAllUsers", 
        //dataType: "json", // Для использования JSON формата получаемых данных
       	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {},
        headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        success: function (data){
            console.log(data);
            console.log(data[0].path);
            
            for(let i = 0;i<data.length; i++){

                console.log(data[i]);
                $('<div/>', {
                    class: 'result',
                    append: $('<br>')
                         .add ($('<img>',{ class:'result__logo',src:"https://cooperative-universal-homegrown.glitch.me/" + data[i].path}))
                         .add ($('<div/>',{ class:'result__titlev1',text: data[i].surname +' '+ data[i].name}))
                         .add ($('<div/>',{ class:'result__titlev2',text: "Баланс:" +" "+ data[i].balance}))
                  }).appendTo('#resultSerch');
            }
        
        },
        error: function (jqXHR,  textStatus, errorThrown){
            if(jqXHR.status == 401){
                alert('Ваше сессия завершена');
                window.location.href = "../../authorization/index.html"
            }
            
        }
        
    });

}); 