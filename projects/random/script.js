const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const symbol = "!@#$%^&*()?><}|_+/*-+"
const allChars = upperCase + lowerCase + symbol;
const length = 12; 
const valueUser = document.getElementById("valueUser");

function createPassword(){
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + symbol[Math.floor(Math.random() * symbol.length)];
     while(length > password.length){
         password += allChars[Math.floor(Math.random() * allChars.length)]
     }
     valueUser.value = password;
}

function copyPassword(){
    valueUser.select();
    document.execCommand("copy");
} 