let names = sessionStorage.getItem("name");
let bday = sessionStorage.getItem("bday");
let gender = sessionStorage.getItem("gender");




if(!names || !date){
    document.getElementsByClassName('login-box')[0].style.opacity = 1;
    document.getElementsByClassName('login-box')[0].style.width = 100 + "%";

}else{

    document.getElementsByClassName('login-box')[0].style.opacity = 0;
    document.getElementsByClassName('login-box')[0].style.width = 0 + "%";
}




let login_form = document.forms.login_form;

login_form.addEventListener('submit', (event)=>{
    event.preventDefault();
    

    document.getElementById("name_error").innerText = "";
    document.getElementById("bday_error").innerText = "";

    names = login_form.elements.input_name.value;
    bday = login_form.elements.input_bday.value;
    gender = login_form.elements.input_gender.value;




    if((login_form.elements.input_name.validity.valid && login_form.elements.input_bday.validity.valid) && (login_form.elements.input_name.value.length >= 4 && login_form.elements.input_name.value.length <= 10)){
        sessionStorage.setItem("name", names)
        sessionStorage.setItem("bday", bday)
        sessionStorage.setItem("gender", gender)
        sessionStorage.setItem("result", 0); 
        document.getElementById('header_name').innerText = sessionStorage.getItem("name")
        
        document.getElementsByClassName('login-box')[0].style.opacity = 0;
        document.getElementsByClassName('login-box')[0].style.width = 0 + "%";

    
    }
    if(!(login_form.elements.input_name.value.length >= 4 && login_form.elements.input_name.value.length <= 10)){
        document.getElementById("name_error").innerText = "от 4 до 10";
    }
    if(!login_form.elements.input_name.validity.valid){
        document.getElementById("name_error").innerText = "Только кирилица, первая буква должна быть заглавной, остольные строчние";
    }   

    
    if ( !(login_form.elements.input_bday.validity.valid) || !(singin.elements.input_name.value.length >= 4 && singin.elements.input_name.value.length <= 10)){
        document.getElementById("bday_error").innerText = " от 01.12.1924 до 01.01.2025";

    }

    


});



