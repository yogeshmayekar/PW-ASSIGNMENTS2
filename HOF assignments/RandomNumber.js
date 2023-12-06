function generateRandomNumberWithDelay(delayInSeconds) {

    let remainingTime = delayInSeconds;
    const countdownInterval = setInterval(() => {
      if (remainingTime > 0) {
        console.log(`Time remaining: ${remainingTime} seconds...`);
        remainingTime--;
      } else {
        clearInterval(countdownInterval); 
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000); 
  }
  

  const delayInSeconds = 3;
  
  generateRandomNumberWithDelay(delayInSeconds);