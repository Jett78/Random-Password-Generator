const passwordbox = document.getElementById("password");
const length = 16;
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&()+[/\]{}|?><]"

function createpassword(){
    let password = "";
    password += characters[Math.floor(Math.random() * characters.length)];
    while(length>password.length)
    {
    password += characters[Math.floor(Math.random() * characters.length)];
    }
}

document.querySelector(".submit").addEventListener("click",()=>{
    createpassword()
})

