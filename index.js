// index.js (your JavaScript file)  

// Define the battery batches array with values that sum to 31  
const batteryBatches = [10, 5, 10, 6]; // This will sum to 31  

// Calculate the total number of batteries using the reduce method  
const totalBatteries = batteryBatches.reduce((accumulator, current) => accumulator + current, 0);  

// Log the output to the console  
console.log(totalBatteries); // Expected output: 31
