// src/pages/payment/index.js
import { useRouter } from 'next/router';
import Success from './success';
import Failure from './failure';

const PaymentPage = () => {
  const router = useRouter();
  const { status } = router.query;

  return status === 'success' ? <Success /> : <Failure />;
};

export default PaymentPage;
