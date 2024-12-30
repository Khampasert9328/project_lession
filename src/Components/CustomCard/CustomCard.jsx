import React from 'react';

function CustomCard({ title, image, description, actionText, onActionClick }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {/* Description */}
        <p className="text-gray-600 mt-2">{description}</p>
        {/* Action Button */}
        {actionText && (
          <button
            onClick={onActionClick}
            className="mt-4 bg-[#006897] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}

export default CustomCard;
