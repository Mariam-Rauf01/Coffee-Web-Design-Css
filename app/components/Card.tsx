import React from 'react';
import Image from 'next/image';
import '../style/Card.css';

interface CardProps {
  title: string[];
  description: string;
  imageUrl: string;
}

function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="card">
      {/* Card content here */}
      <Image
        src={imageUrl}
        alt={title.join(' ')}
        width={500} // Specify a width
        height={300} // Specify a height
        quality={75} // Optional: Set the image quality
      />

      {/* Title and description in a transparent box below the card */}
      <div className="card-content">
        <h3 className="card-title">
          {title.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
