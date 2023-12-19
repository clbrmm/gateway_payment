// src/pages/api/payment.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Lógica de processamento de pagamento aqui
    res.status(200).json({ success: true, message: 'Payment processed successfully' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
