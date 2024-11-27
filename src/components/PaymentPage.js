import React, { useState } from 'react';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed!');
  };

  return (
    <div style={{
      paddingTop: '50px',
      background: 'linear-gradient(135deg, #6DD5FA, #2980B9)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        maxWidth: '700px',
        width: '100%',
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#2c3e50',
          fontWeight: 'bold',
        }}>
          Payment Information
        </h2>

        <form onSubmit={handleFormSubmit}>
          {/* User Details */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold', color: '#2c3e50' }}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginTop: '5px',
              }}
            />
          </div>

          {/* Rental Dates */}
          <div style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '15px'
          }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 'bold', color: '#2c3e50' }}>Pickup Date:</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  marginTop: '5px',
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 'bold', color: '#2c3e50' }}>Drop-off Date:</label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  marginTop: '5px',
                }}
              />
            </div>
          </div>

          {/* Payment Methods */}
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '20px',
            }}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>

          {/* Terms and Conditions */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
              style={{ marginRight: '10px' }}
            />
            <label style={{ color: '#2c3e50' }}>I agree to the Terms and Conditions</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
            }}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
