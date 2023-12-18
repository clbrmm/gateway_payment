// src/hooks/usePayment.js
import { useState } from 'react';
import paymentGateway from '../services/paymentGateway';

const usePayment = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);

  const processPayment = async (paymentDetails) => {
    try {
      const result = await paymentGateway.processPayment(paymentDetails);
      setPaymentStatus(result.status);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    paymentStatus,
    error,
    processPayment,
  };
};

export default usePayment;
