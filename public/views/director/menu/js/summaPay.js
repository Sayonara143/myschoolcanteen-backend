$(document).ready(function(){   
    let one;
    let two;
    let three;
    let four;
    let five;
    let six;
    $("#onePay").change( function (){
        summa();
    })
    $("#twoPay").change( function (){
        summa();
    })
    $("#threePay").change( function (){
        summa();
    })
    $("#fourPay").change( function (){
        summa();
    })
    $("#fivePay").change( function (){
        summa();
    })
    $("#sixPay").change( function (){
        summa();
    })
    function summa(){
        // присваваем занчение перменным
        one = $('#onePay').val();
        two = $('#twoPay').val();
        three = $('#threePay').val();
        four = $('#fourPay').val();
        five = $('#fivePay').val();
        six = $('#sixPay').val();
        // переворачеваем каждую переменную , чтобы посчитать стоимость
        one = String(one).split("").reverse('').join('');
        one = one.split("/",1).join("");
        one = one.split("").reverse('').join("");

        two = String(two).split("").reverse('').join('');
        two = two.split("/",1).join("");
        two = two.split("").reverse('').join("");

        three = String(three).split("").reverse('').join('');
        three = three.split("/",1).join("");
        three = three.split("").reverse('').join("");

        four = String(four).split("").reverse('').join('');
        four = four.split("/",1).join("");
        four = four.split("").reverse('').join("");

        five = String(five).split("").reverse('').join('');
        five = five.split("/",1).join("");
        five = five.split("").reverse('').join("");

        six = String(six).split("").reverse('').join('');
        six = six.split("/",1).join("");
        six = six.split("").reverse('').join("");

        summaText = Number(one)+Number(two)+Number(three)+Number(four)+Number(five)+Number(six);
        $('#Payid').text(summaText + " руб");
    }
 }); 