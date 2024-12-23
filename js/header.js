document.getElementById('header_name').innerText = sessionStorage.getItem("name")



function out(){

    sessionStorage.removeItem("name"); 
    sessionStorage.removeItem("bday"); 
    sessionStorage.removeItem("gender"); 

    window.location.href = "../index.html"
}

document.getElementById("out_btn").addEventListener('click', out);
