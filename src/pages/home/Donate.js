import React from 'react';

const Donate = () => {
  const banks = [
    { name: 'Jaiz Bank', accountName: 'Maktab for Dahwah and Charity', accountNumber: '0017226109' },
    { name: 'Lotus Bank', accountName: 'Maktab for Dahwah and Charity', accountNumber: '1000864711' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Donate Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banks.map((bank, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-md">
            <h2 className="text-xl font-bold mb-2">{bank.name}</h2>
            <p className="mb-2">Account Name: {bank.accountName}</p>
            <p>Account Number: {bank.accountNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donate;