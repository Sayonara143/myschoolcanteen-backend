import * as summaFree from "./summaFree.js";
// const MyComponent = require("./summaFree.js");
// import * as summaPay from "./summaPay.js";
$(document).ready(function(){ 
    let adminClass;
    $.ajax({ 
        url: "https://cooperative-universal-homegrown.glitch.me/api/v1/director/sync", // надо сделать запрос на получение всех админнов
        //dataType: "json", // Для использования JSON формата получаемых данных
       	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {},
        headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        success: function (data){  
        },
        error: function (jqXHR,  textStatus, errorThrown){
            if(jqXHR.status == 401){
                alert('Ваше сессия завершена');
                window.location.href = "../../authorizationDirector/index.html"
            }
            
        }
        
    });
    // кнопка для бесплатников
    $(".buttonFreeSave").on("click", function(){
        adminClass = $("#class option:selected").text();
        console.log({
            title: "free",
            one: {summa: summaFree.one},
            two: {summa: summaFree.two},
            three: {summa: summaFree.three},
            four: {summa: summaFree.four},
            five: {summa: summaFree.five},
            six: {summa: summaFree.six},
            adminClass: adminClass,
            summa: summaFree.summaText,
        

    });
        // $.ajax({ 
        //     url: "https://cooperative-universal-homegrown.glitch.me/api/v1/director/createCalendarFood", 
        //     //dataType: "json", // Для использования JSON формата получаемых данных
        //        method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        //     data: {title: "free",
        //             one: {summa: summaFree.one},
        //             two: {summa: summaFree.one},
        //             three: {summa: summaFree.one},
        //             four: {summa: summaFree.one},
        //             five: {summa: summaFree.one},
        //             six: {summa: summaFree.one},
        //             adminClass: {summa: summaFree.one},
        //             summa: summaFree.sumaText
                    
        
        //         },
        //     headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        //     success: function (data){  
        //     },
        //     error: function (jqXHR,  textStatus, errorThrown){
        //         if(jqXHR.status == 401){
        //             alert('Ваше сессия завершена');
        //             window.location.href = "../../authorizationDirector/index.html"
        //         }
                
        //     }
            
        // });
    })
    // кнопка для платников
    $(".buttonPaySave").on("click", function(){
        console.log(1)
        $.ajax({ 
            url: "https://cooperative-universal-homegrown.glitch.me/api/v1/director/createCalendarFood", 
            //dataType: "json", // Для использования JSON формата получаемых данных
               method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: {},
            headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
            success: function (data){  
            },
            error: function (jqXHR,  textStatus, errorThrown){
                if(jqXHR.status == 401){
                    alert('Ваше сессия завершена');
                    window.location.href = "../../authorizationDirector/index.html"
                }
                
            }
            
        });
    })

}); 