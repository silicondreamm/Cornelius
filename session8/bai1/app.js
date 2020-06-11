// Bài 1: Tạo Form Đăng Ký

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

const error = document.querySelector(".error");

let button = document.getElementById("click")
    .addEventListener("click", onClickEvent)
const errors= []
const mainForm = document.getElementById("main-form");


function onClickEvent() {
    let email = input1.value
    let password = input2.value
    let confirm = input3.value
    if (!email) {
        errors.push("invalid email")
    }
    if (!password){
        errors.push("invalid password")
    }
    if (confirm!== password || !confirm){
        errors.push("password and confirm password are not match")
    }
    if (errors.length == 0){
        alert("successfully")
        error.innerHTML=" "
    }
    for(err of errors){
        error.innerHTML += `${err} <br/>`
        errors.pop()       
    }   

}

