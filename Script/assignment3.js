

function isValidPassword(password, username) {
    if (password.length <8) {
         return false;}
    if (password.includes (" ")) {
        return false;}
    if (password.includes (username)) {
        return false;}
    return true;
}

    console.log("Hej!");
    console.log(isValidPassword("pass1234", "leana"));
    console.log(isValidPassword("pass", "leana"));
      console.log(isValidPassword("leana", "leana"));
        console.log(isValidPassword("password1234", "leana"));
    
    



