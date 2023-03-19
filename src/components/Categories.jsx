import React from 'react';
import { Link } from 'react-router-dom';

const plantTypes = [
  { id: 1, name: 'Herbs' },
  { id: 2, name: 'Shrubs' },
  { id: 3, name: 'Trees' },
  { id: 4, name: 'Climbers' },
  { id: 5, name: 'Creepers' },
];

const Categories = () => {
  return (
    <section className="px-6 sm:px-0">
      <h2 className="text-lg font-medium mb-5">Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {plantTypes &&
          plantTypes.map((plant) => (
            <div
              className="flex items-center bg-gray-200 hover:bg-green-300 justify-center p-5 rounded-lg w-full"
              key={plant.id}
            >
              <span>{plant.name}</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Categories;
