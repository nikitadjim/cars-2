let n = 0

let result = 0

let test  = document.forms.test_form;



let v1 = test.elements.v1
let v2 = test.elements.v2
let v3 = test.elements.v3
let v4 = test.elements.v4

let radio  = [v1, v2, v3, v4]

let v5 = test.elements.v5
let v6 = test.elements.v6
let v7 = test.elements.v7
let v8 = test.elements.v8

let text = [v5, v6, v7, v8]

let o1 = document.getElementById("v1")
let o2 = document.getElementById("v2")
let o3 = document.getElementById("v3")
let o4 = document.getElementById("v4")

let o5 = document.getElementById("v5")
let o6 = document.getElementById("v6")
let o7 = document.getElementById("v7")
let o8 = document.getElementById("v8")

let otvets = [o1, o2, o3, o4, o5, o6, o7, o8]



document.getElementById("result").innerText = sessionStorage.getItem("result"); 


test.addEventListener('submit', (event)=>{
    event.preventDefault();
    document.documentElement.style.setProperty("--el", 0  + 'vw') 
    document.getElementById("btn_next").innerText = "Дальше"
    n = 0
    result = 0


    for (i = 0; i< otvets.length; i++) {
        otvets[i].style.backgroundColor = "#23a158";
        otvets[i].style.color = "#ffffff";
    }

    o5.innerText = "Док Хадсон"
    o6.innerText = "Луиджи"
    o7.innerText = "Маккуин"
    o8.innerText = "Гвидо"


    for (i = 0; i< radio.length; i++) {
        if(radio[i].value == "1"){
            result++
        }
    }

    for (i = 0; i< text.length; i++) {
        if(text[i].validity.valid){
            result++
        }
    }
    sessionStorage.setItem("result", result); 

    document.getElementById("result").innerText = sessionStorage.getItem("result"); 





})



function next(){
    if(n < 4){
        n++
        if (n <= 3){
            document.documentElement.style.setProperty("--el", -42 * n + 'vw') 
        }else{
            document.documentElement.style.setProperty("--el", -42 * n + 'vw') 
            document.getElementById("btn_next").innerText = "Начать заново"
        }
    }else{
        reset()
    }
}

function reset(){
    document.documentElement.style.setProperty("--el", 0  + 'vw') 
    document.getElementById("btn_next").innerText = "Дальше"
    n=0
    result= 0
    sessionStorage.setItem("result", result); 

    document.getElementById("result").innerText = sessionStorage.getItem("result"); 


    for (i = 0; i < radio.length; i++) {
        for (j = 0; j < v1.length; j++) {
            radio[j][i].checked = false
        }
    }

    for (i = 0; i< text.length; i++) {
        text[i].value = ""
    }

    for (i = 0; i< otvets.length; i++) {
        otvets[i].style.backgroundColor = "";
        otvets[i].style.color = "black";
    }

    o5.innerText = ""
    o6.innerText = ""
    o7.innerText = ""
    o8.innerText = ""


}






document.getElementById("btn_next").addEventListener('click', next)