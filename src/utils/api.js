// src/utils/api.js
const BASE_URL = 'https://api.example.com';

const api = {
  // Define your API functions here
  fetchPaymentDetails: async (paymentId) => {
    const response = await fetch(`${BASE_URL}/payments/${paymentId}`);
    return response.json();
  },
  // Add more API functions as needed
};

export default api;
