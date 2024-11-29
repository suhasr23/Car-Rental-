import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?pickup=${pickup}&dropoff=${dropoff}`);
  };

  return (
    <div style={{
      backgroundImage: `url('/home.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Find Your Perfect Ride
      </h1>
      <form onSubmit={handleSearch} style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Pickup Location:
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px' }}
            required
          >
            <option value="">Select Pickup</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Drop-off Location:
          <select
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px' }}
            required
          >
            <option value="">Select Drop-off</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </label>

        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#ff5f6d',
          border: 'none',
          color: '#fff',
          fontSize: '18px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default HomePage;
