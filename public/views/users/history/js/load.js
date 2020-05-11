$(document).ready(function(){   
    let url_image;
    $.ajax({ 
        url: "https://cooperative-universal-homegrown.glitch.me/api/v1/users/getAllCalendarFoodClass", 
        dataType: "json", // Для использования JSON формата получаемых данных
       	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {},
        headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        success: function (data){
            console.log(data);
            let id;
            let date;
            let summa = 0;
            for(let i = 1; i < (data.length + 1); i++){
                
                if(i<6){
                    id = String( "#"+"1"+i);
                    date = data[i-1].date.split('');
                    if(date[8]==0){
                       date = date[9];
                    }
                    else{
                        date = String(date[8]+date[9])
                    }
                    summa = summa + Number(data[i-1].summa);
                    console.log("summa " + summa)
                    console.log("id " + id);
                    console.log("date " + date);
                    

                }
                $(id).text(data[i-1].summa +" руб");
                $(id +"c").text(date);
                $("#one").text("Всего: "+ summa);
            }
            $("#one").text("Всего: " + summa);
            //url_image = "https://cooperative-universal-homegrown.glitch.me/"+ data.path;
            // $(".balance__know").text("Баланс: " + data.balance);
            // $(".nameUser").text(data.surname + "" + data.name);	
            // $(".img__avatar").attr("src", url_image);   
        },
        error: function (jqXHR,  textStatus, errorThrown){
            if(jqXHR.status == 401){
                alert('Ваше сессия завершена');
                window.location.href = "../../authorization/index.html"
            }
            
        }
        
    });

}); 