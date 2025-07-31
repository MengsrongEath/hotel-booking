import React, { useState } from 'react';
import { Menu, Home, Search, Filter } from 'lucide-react';
import RoomCard from './RoomCard';

const RoomListings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample room data
  const rooms = [
    {
      id: 1,
      type: 'Solo',
      price: 145,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 4.8,
      location: 'Ocean View'
    },
    {
      id: 2,
      type: 'Double',
      price: 245,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      rating: 4.9,
      location: 'Garden View'
    },
    {
      id: 3,
      type: 'Suite',
      price: 345,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 4.7,
      location: 'Mountain View'
    },
    {
      id: 4,
      type: 'Solo',
      price: 165,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.6,
      location: 'City View'
    },
    {
      id: 5,
      type: 'Double',
      price: 265,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.8,
      location: 'Ocean View'
    },
    {
      id: 6,
      type: 'Suite',
      price: 365,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.9,
      location: 'Garden View'
    },
    {
      id: 7,
      type: 'Solo',
      price: 185,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.7,
      location: 'Mountain View'
    },
    {
      id: 8,
      type: 'Double',
      price: 285,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.8,
      location: 'City View'
    },
    {
      id: 9,
      type: 'Suite',
      price: 385,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.9,
      location: 'Ocean View'
    },
    {
      id: 10,
      type: 'Solo',
      price: 205,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 4.6,
      location: 'Garden View'
    },
    {
      id: 11,
      type: 'Double',
      price: 305,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      rating: 4.8,
      location: 'Mountain View'
    },
    {
      id: 12,
      type: 'Suite',
      price: 405,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 4.9,
      location: 'City View'
    },
    {
      id: 13,
      type: 'Solo',
      price: 225,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.7,
      location: 'Ocean View'
    },
    {
      id: 14,
      type: 'Double',
      price: 325,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.8,
      location: 'Garden View'
    },
    {
      id: 15,
      type: 'Suite',
      price: 425,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      rating: 4.9,
      location: 'Mountain View'
    },
    {
      id: 16,
      type: 'Solo',
      price: 245,
      hotelName: 'Grand Plaza Hotel',
      offer: 'Early Bird Special',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 4.6,
      location: 'City View'
    }
  ];

  const filteredRooms = rooms.filter(room => {
    const matchesFilter = activeFilter === 'all' || room.type.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = room.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Your Perfect Room</h2>
          <p className="text-gray-600 text-lg">Choose from our carefully curated selection of luxurious accommodations</p>
        </div>

        {/* Enhanced Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300"
              />
            </div>

            {/* Price Range */}
            <div className="relative">
              <Menu className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 appearance-none">
                <option>Price Range</option>
                <option>$0 - $200</option>
                <option>$200 - $400</option>
                <option>$400+</option>
              </select>
            </div>

            {/* Room Type */}
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select 
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 appearance-none"
              >
                <option value="all">All Room Types</option>
                <option value="solo">Solo</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            {/* Filter Button */}
            <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-teal-600">{filteredRooms.length}</span> of {rooms.length} rooms
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by:</span>
            <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:border-teal-500">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Popularity</option>
            </select>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredRooms.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-teal-600 text-teal-600 py-3 px-8 rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold">
              Load More Rooms
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No rooms found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomListings; 