
function validPassword(boolean){  
    let password1 = $('.password1').val();
    let password2 = $('.password2').val();
    boolean = true
    if(!(password1 == password2)){
        boolean = false;
        alert('Пароли не совпадают')
    }
    return boolean;
   
}
function validPasswordLenght(boolean){  
    let password1 = $('.password1').val();
    boolean = true
    if(!(password1.length>8)){
        boolean = false;
        alert('Пароль короткий')
    }
    return boolean;
   
}

function validDataLenght(boolean){ 
    let s,n,p,l,nP = false; 
    s = 1<($('.surname').val()).length;
    n = 1<($('.name').val()).length;
    p = 1<($('.patronimyc').val()).length;
    l = 1<($('.login').val()).length;
    nP = (11 == ($('.numberPhone').val()).length);
    boolean = true
    if(!(s&n&p&l&nP)){
        boolean = false;
        alert('Данные введены непрваильно')
    }
    return boolean;
   
}
 export{
    validPassword,
    validPasswordLenght,
    validDataLenght
 }