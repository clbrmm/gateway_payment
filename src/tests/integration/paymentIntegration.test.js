// src/tests/integration/paymentIntegration.test.js
import paymentGateway from '../../services/paymentGateway';

test('processPayment should return success status', async () => {
  const paymentDetails = { /* mock payment details */ };
  const result = await paymentGateway.processPayment(paymentDetails);
  expect(result.status).toBe('success');
});
