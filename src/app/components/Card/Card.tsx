'use client';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  name: string;
  model: string;
  manufacturer: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ name, model, manufacturer, href }) => {
  return (
    <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <div className="card-actions justify-end">
          <Link href={href} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
