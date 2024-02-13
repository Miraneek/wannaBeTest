function sumbit(){
    console.log("dcfhnjmkl")
    let username = document.querySelector("input[type=text]").value
    let password = document.querySelector("input[type=password]").value
    let usernameRegex = /^[a-zA-Z0-9]+$/;

    if(!usernameRegex.test(username)){
        document.querySelector("input[type=text]").style.border = "solid red 4px"
        return false
    } else {
        document.querySelector("input[type=text]").style.border = ""
    }

    if (password.length < 8){
        document.querySelector("input[type=password]").style.border = "solid red 4px"
        return false
    } else {
        document.querySelector("input[type=password]").style.border = ""
    }

}

document.querySelector("input[type=text]").addEventListener("blur", sumbit)
document.querySelector("input[type=password]").addEventListener("blur", sumbit)
