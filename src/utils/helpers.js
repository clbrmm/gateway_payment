// src/utils/helpers.js
const formatCurrency = (amount) => {
    // Define your currency formatting logic here
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  // Add more helper functions as needed
  
  export { formatCurrency };
  