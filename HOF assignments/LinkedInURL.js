function validateLinkedInURL(url) {
    // Regular expression for valid LinkedIn profile URLs
    const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    const isValidLinkedInURL = linkedInRegex.test(url);

    if (isValidLinkedInURL) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  }
  

  const inputURL = prompt("Enter a LinkedIn profile URL:");
  

  validateLinkedInURL(inputURL);