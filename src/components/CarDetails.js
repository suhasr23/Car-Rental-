import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const carData = {
  1: {
    name: 'Toyota Fortuner',
    image: '/car1.png',
    type: 'SUV',
    mileage: '15 km/l',
    seats: 5,
    price: '5000/day',
    description: 'A powerful SUV with a luxurious interior and advanced safety features.',
  },
  2: {
    name: 'Honda Civic',
    image: '/car2.png',
    type: 'Sedan',
    mileage: '18 km/l',
    seats: 4,
    price: '4000/day',
    description: 'A stylish sedan known for its comfort, efficiency, and cutting-edge technology.',
  },
  3: {
    name: 'Maruti Swift',
    image: '/car3.png',
    type: 'Hatchback',
    mileage: '20 km/l',
    seats: 4,
    price: '3000/day',
    description: 'A compact and fuel-efficient hatchback, perfect for city drives.',
  },
};

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carData[id];

  if (!car) {
    return <h2 style={{ textAlign: 'center' }}>Car not found</h2>;
  }

  const handleBooking = () => {
    navigate('/payment'); // Redirect to the payment page
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
      minHeight: '100vh',
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        maxWidth: '900px',
        overflow: 'hidden',
        marginTop: '60px', // Increased margin to move card further down
      }}>
        <img
          src={car.image}
          alt={car.name}
          style={{ width: '50%', height: 'auto', objectFit: 'cover', flex: '1' }}
        />
        <div style={{
          padding: '20px',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <h2>{car.name}</h2>
            <p><strong>Type:</strong> {car.type}</p>
            <p><strong>Mileage:</strong> {car.mileage}</p>
            <p><strong>Seats:</strong> {car.seats} seats</p>
            <p><strong>Price:</strong> {car.price}</p>
            <p style={{ marginTop: '15px' }}>{car.description}</p>
          </div>
          <button onClick={handleBooking} style={{
            backgroundColor: '#ff5f6d',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            Proceed to Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
