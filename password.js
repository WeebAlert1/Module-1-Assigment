 var password = "Who45jei54i"

 // Checks for Length and if it has numbers
// /\s/ checks if the password has Spaces in it
// Checks for 4 things, Lenght greater than 10, /\d/ for numbers, /\s/ for spaces, and length over 25
 if (password.length > 10 && /\d/.test(password) === true && /\s/.test(password) === false && password.length < 25){
    console.log('Password Success!');
 } else if (password.length < 10){
    console.log(`Password is too short`);
 }  else if (/\d/.test(password) === false){
    console.log(`Password requires at least one number, please include a number`);
 } else if (/\s/.test(password) === true){
    console.log(`Password cannot contain spaces`);
 } else if (password.length > 25){
    console.log(`Password is too long, 25 character limit`);
 }

 
