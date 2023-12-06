function convertToINR(item) {
    const exchangeRate = 80;
    const convertedPrice = item.price * exchangeRate;
    return { ...item, price: convertedPrice };
  }
  
  const storeInventory = [
    { item: "Laptop", price: 1200 },
    { item: "Smartphone", price: 600 },
    { item: "Headphones", price: 80 },
  ];
  

  const inventoryInRupees = storeInventory.map(convertToINR);
  
 
  console.log("Original Inventory:", storeInventory);
  console.log("Converted Inventory (INR):", inventoryInRupees);