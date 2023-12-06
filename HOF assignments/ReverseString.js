function reverseAfterDelay(input) {
  
    setTimeout(() => {
     
      const reversedString = input.split('').reverse().join('');
     
      console.log(`Reversed String: ${reversedString}`);
    }, 2000); // 2000 milliseconds (2 seconds) delay
  }
  
 
  const userInput = prompt("Enter a string:");
  
  reverseAfterDelay(userInput);