// src/services/paymentGateway.js
import api from '../utils/api';

const paymentGateway = {
  processPayment: async (paymentDetails) => {
    // Implement payment processing logic using the API
    try {
      const response = await api.post('/payments', paymentDetails);
      return response.data;
    } catch (error) {
      throw new Error('Payment processing failed');
    }
  },
  // Add more payment gateway functions as needed
};

export default paymentGateway;
