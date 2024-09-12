import { Starship } from '@/app/interfaces/starship';
import React from 'react';

const DetailsCard: React.FC<Starship> = ({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  MGLT,
  starship_class,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <p>
              <strong>Model:</strong> {model}
            </p>
            <p>
              <strong>Manufacturer:</strong> {manufacturer}
            </p>
            <p>
              <strong>Cost in Credits:</strong> {cost_in_credits}
            </p>
            <p>
              <strong>Length:</strong> {length}
            </p>
            <p>
              <strong>Max Speed:</strong> {max_atmosphering_speed}
            </p>
            <p>
              <strong>Crew:</strong> {crew}
            </p>
            <p>
              <strong>Passengers:</strong> {passengers}
            </p>
          </div>
          <div>
            <p>
              <strong>Cargo Capacity:</strong> {cargo_capacity}
            </p>
            <p>
              <strong>Consumables:</strong> {consumables}
            </p>
            <p>
              <strong>Hyperdrive Rating:</strong> {hyperdrive_rating}
            </p>
            <p>
              <strong>MGLT:</strong> {MGLT}
            </p>
            <p>
              <strong>Starship Class:</strong> {starship_class}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
