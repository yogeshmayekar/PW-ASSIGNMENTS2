function mixColors(color1, color2) {
    let resultColor;
  
    switch (`${color1.toLowerCase()} ${color2.toLowerCase()}`) {
      case 'red blue':
      case 'blue red':
        resultColor = 'purple';
        break;
      case 'red yellow':
      case 'yellow red':
        resultColor = 'orange';
        break;
      case 'blue yellow':
      case 'yellow blue':
        resultColor = 'green';
        break;
      default:
        resultColor = 'Invalid color combination';
    }
  

    console.log(`Resulting Color: ${resultColor}`);
  }
  
  const color1 = prompt("Enter the first color:");
  const color2 = prompt("Enter the second color:");
  
  mixColors(color1, color2);