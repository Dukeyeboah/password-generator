const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password1 = ""
let password2 = ""
let passwordBox1 = document.getElementById("box1")
let passwordBox2 = document.getElementById("box2")


function genPassword() {
    password1 = ""
    password2 = ""
    for (let i = 0; i < 15; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordBox1.textContent = password1
    passwordBox2.textContent = password2
}

function clearPasswords() {
    password1 = ""
    password2 = ""
    passwordBox1.textContent = ""
    passwordBox2.textContent = ""
}


