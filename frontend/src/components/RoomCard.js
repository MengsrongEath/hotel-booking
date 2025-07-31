import React, { useState } from 'react';
import { Heart, Star, MapPin, Users, Wifi, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const amenities = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Car, label: 'Parking' },
    { icon: Users, label: '2 Guests' }
  ];

  const handleViewDetails = () => {
    navigate(`/room/${room.id}`);
  };

  return (
    <div 
      className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tag and Heart */}
      <div className="flex justify-between items-start mb-3">
        <span className="bg-gradient-to-r from-teal-600 to-teal-700 text-white text-xs px-3 py-1 rounded-full font-medium">
          {room.type}
        </span>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`p-2 rounded-full transition-all duration-300 ${
            isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-100 text-gray-400 hover:bg-red-50'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Room Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={room.image}
          alt={room.name}
          className={`w-full h-48 object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
          <Star className="w-3 h-3 fill-current" />
          <span>4.8</span>
        </div>
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
          <MapPin className="w-3 h-3 inline mr-1" />
          Ocean View
        </div>
      </div>

      {/* Price */}
      <div className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-between">
        <span>${room.price}</span>
        <span className="text-sm text-gray-500 font-normal">per night</span>
      </div>

      {/* Hotel Name */}
      <div className="text-lg font-semibold text-gray-700 mb-1">
        {room.hotelName}
      </div>

      {/* Offer */}
      <div className="text-sm text-teal-600 font-medium mb-3 flex items-center">
        <span className="bg-teal-100 px-2 py-1 rounded-full text-xs">
          {room.offer}
        </span>
      </div>

      {/* Amenities */}
      <div className="flex items-center space-x-4 mb-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-1 text-gray-600">
            <amenity.icon className="w-4 h-4" />
            <span className="text-xs">{amenity.label}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
      </p>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 font-semibold">
          Book Now
        </button>
        <button 
          onClick={handleViewDetails}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
        >
          View Details
        </button>
      </div>

      {/* Availability Indicator */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-600 font-medium">Available</span>
        </div>
        <span className="text-xs text-gray-500">Last booked 2 hours ago</span>
      </div>
    </div>
  );
};

export default RoomCard; 