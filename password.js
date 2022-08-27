 var password = "thECatus6pt"

 // Checks for Length and if it has numbers
// /\s/ checks if the password has Spaces in it
 if (password.length > 10 && /\d/.test(password) === true && /\s/.test(password) === false && password.length < 25){
    console.log('Password Success!')
 } 

 
