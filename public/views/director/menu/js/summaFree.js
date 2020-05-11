
 let one;
 let two;
 let three;
 let four;
 let five;
 let six;
 let summaText;
 $(document).ready(function(){   
    $("#oneFree").change( function (){
        summa();
    })
    $("#twoFree").change( function (){
        summa();
    })
    $("#threeFree").change( function (){
        summa();
    })
    $("#fourFree").change( function (){
        summa();
    })
    $("#fiveFree").change( function (){
        summa();
    })
    $("#sixFree").change( function (){
        summa();
    })
    function summa(){
        one = $('#oneFree').val();
        two = $('#twoFree').val();
        three = $('#threeFree').val();
        four = $('#fourFree').val();
        five = $('#fiveFree').val();
        six = $('#sixFree').val();

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
        $('#freeid').text(summaText + " руб");
    };
     
 });
export{
    one,
    two,
    three,
    four,
    five,
    six,
    summaText,
}
