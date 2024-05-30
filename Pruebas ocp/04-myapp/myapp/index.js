var txtname = document.getElementById("name");
var txtemail = document.getElementById("email");
var txtphone_number = document.getElementById("phone_number");

console.log("Executing...");

function save(){
    localStorage.setItem("name", txtname.value);
    localStorage.setItem("email", txtemail.value);
    localStorage.setItem("phone_number", txtphone_number.value);
    location.reload();
}

document.getElementById("hero_name").innerHTML= localStorage.getItem("name");
document.getElementById("hero_email").innerHTML= localStorage.getItem("email");
document.getElementById("hero_p_number").innerHTML= localStorage.getItem("phone_number");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("phone_number"));
