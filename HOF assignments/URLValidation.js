function validateURL(url) {
    const urlRegex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]$/;
  
   
    const isValidURL = urlRegex.test(url);
  
  
    if (isValidURL) {
      console.log(`${url} is a valid URL.`);
    } else {
      console.log(`${url} is not a valid URL.`);
    }
  }
  
  
  const inputURL = prompt("Enter a URL:");
  

  validateURL(inputURL);