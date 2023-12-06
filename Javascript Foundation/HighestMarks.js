function findHighestMarks(marks) {
    const highestMarks = Math.max(...marks);
  
    console.log(`The highest marks in the class: ${highestMarks}`);
  }
  
  const marks = [85, 92, 78, 96, 89];
  
  findHighestMarks(marks);