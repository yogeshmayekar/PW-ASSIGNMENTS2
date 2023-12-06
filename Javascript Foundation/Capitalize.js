function capitalizeName(name) {
    const modifiedName = name && name.length > 0
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : name;
  
    return modifiedName;
  }
  
  const userName = prompt("Enter your name:");
  
  const modifiedUserName = capitalizeName(userName);
  
  console.log(`Original Name: ${userName}`);
  console.log(`Modified Name: ${modifiedUserName}`);