import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const cars = [
  {
    id: 1,
    name: 'SUV - Toyota Fortuner',
    image: '/car1.png',
    price: '5000/day',
    seats: 5,
  },
  {
    id: 2,
    name: 'Sedan - Honda Civic',
    image: '/car2.png',
    price: '4000/day',
    seats: 4,
  },
  {
    id: 3,
    name: 'Hatchback - Maruti Swift',
    image: '/car3.png',
    price: '3000/day',
    seats: 4,
  },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');

  return (
    <div style={{
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb)',
      minHeight: '100vh',
      padding: '20px',
      color: '#333',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '100px', color: '#fff' }}>
        Available Cars
      </h2>
      <p style={{
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        padding: '10px',
        borderRadius: '8px',
        display: 'inline-block',
        marginBottom: '20px',
      }}>
        <strong>Pickup Location:</strong> {pickup} | <strong>Drop-off Location:</strong> {dropoff}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cars.map((car) => (
          <div
            key={car.id}
            style={{
              backgroundColor: '#fff',
              margin: '15px',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '300px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
            <h3 style={{ marginTop: '15px' }}>{car.name}</h3>
            <p>{car.price}</p>
            <p>{car.seats} Seats</p>
            <Link to={`/car/${car.id}`}>
              <button
                style={{
                  backgroundColor: '#ff5f6d',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                Book
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
