// src/pages/index.js
import React from 'react';
import Head from 'next/head';

import { Button } from '../components/common/Button';

import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const handlePaymentButtonClick = () => {
    // Redirect to the payment page or initiate the payment process
    router.push('/payment');
  };

  return (
    <div>
      <Head>
        <title>Your App Title</title>
        {/* Add other meta tags and links as needed */}
      </Head>

      <h1>Welcome to Your App</h1>
      <p>Explore our features and enjoy a seamless experience.</p>

      <Button onClick={handlePaymentButtonClick}>Proceed to Payment</Button>

      {/* Add more content or components as needed */}
    </div>
  );
};

export default HomePage;
