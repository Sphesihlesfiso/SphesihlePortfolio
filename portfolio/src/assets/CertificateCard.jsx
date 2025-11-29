import React from 'react';
import './CertificationCard.css';

export default function CertificateCard({ name, image }) {
  
  return (
    <div className="Certificate-container Certificate">
      <div className="Certificate-image">
        <img
          src={image.startsWith('http') 
            ? image 
            : `${process.env.PUBLIC_URL}/images/${image}`}
          alt={name}
          style={{ width: '100%',height:'150px', borderRadius: '12px' }}
        />
      </div>
      <h3>{name}</h3>
    </div>
  );
}
