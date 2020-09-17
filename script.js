//create random password maximum 10 characters

function generate(){
    let complexity = document.getElementById("slider").value;

    //passwords will generate from these characters
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    //loop of password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

//password will appear in generator box
    document.getElementById("display").value = password;
}

//ask user for password criteria
prompt "How long do you want your password to be? Maximum 10 characters."