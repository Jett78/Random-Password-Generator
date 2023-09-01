const passwordbox = document.getElementById("password");
const length = 16;
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&()+[/\]{}|?><]"

function createpassword(){
    var password = "";    //new variable that is initialized with null value
    password = characters[Math.floor(Math.random() * characters.length)];   //randomly takes only single character
    while(length>password.length)   //loops around 16 times to print number
    {
    password += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordbox.value=password   //passing the value to passworbox field
}
function copypaste(){
    passwordbox.select()
    document.execCommand("copy")
}

document.querySelector(".submit").addEventListener("click",()=>{
    createpassword()
})

