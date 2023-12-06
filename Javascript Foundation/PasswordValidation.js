function validatePasswords(password, confirmedPassword) {
    if (password === confirmedPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
  }
  

  const password = prompt("Enter your password:"); 
  const confirmedPassword = prompt("Confirm your password:");
  
  validatePasswords(password, confirmedPassword);