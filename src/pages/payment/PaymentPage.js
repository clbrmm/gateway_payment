// src/pages/payment/PaymentPage.js
import React, { useState } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Adicione a lógica de processamento de pagamento aqui

    // Exemplo: console.log('Pagamento processado com sucesso!');

    // Você pode redirecionar para uma página de confirmação, exibir um modal, etc.
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Número do Cartão:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            placeholder="**** **** **** ****"
            required
          />
        </label>
        <label>
          Data de Expiração:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength="5"
            placeholder="MM/YY"
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            maxLength="3"
            placeholder="***"
            required
          />
        </label>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default PaymentPage;
