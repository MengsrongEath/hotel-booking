import React, { useState } from 'react';
import { 
  Share2, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  User, 
  Wifi, 
  Coffee, 
  Tv, 
  Snowflake,
  Sun,
  Clock,
  MapPin,
  Leaf
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RoomDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const images = [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  ];

  const amenities = [
    { icon: Snowflake, label: 'Air Conditioning' },
    { icon: Coffee, label: 'Coffee Machine' },
    { icon: Tv, label: 'Smart TV' },
    { icon: Wifi, label: 'Free WiFi' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-20 px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <button 
              onClick={() => navigate('/')}
              className="hover:text-teal-600 transition-colors"
            >
              ROOM
            </button>
            <span>/</span>
            <span className="text-teal-600 font-medium">DETAIL - Room {id}</span>
          </nav>
        </div>
      </div>

      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Card - Room Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                
                {/* Image Gallery */}
                <div className="relative mb-8">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <img
                      src={images[currentImage]}
                      alt="Room"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {images.slice(0, 4).map((image, index) => (
                      <div
                        key={index}
                        className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                          currentImage === index ? 'ring-2 ring-teal-500' : ''
                        }`}
                        onClick={() => setCurrentImage(index)}
                      >
                        <img
                          src={image}
                          alt={`Room view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {index === 3 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">See all photos</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 mb-6">
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
                      isLiked 
                        ? 'border-red-200 bg-red-50 text-red-600' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span>{isLiked ? 'Saved' : 'Save'}</span>
                  </button>
                </div>

                {/* Room Title & Description */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Luxury Ocean View Suite - Room {id}</h1>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <amenity.icon className="w-5 h-5 text-teal-600" />
                        <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Island Experience */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Leaf className="w-5 h-5 text-green-600 mr-2" />
                    Island Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className="font-medium text-gray-800">Sunrise Viewing Times</div>
                        <div className="text-sm text-gray-600">6:00 AM - 7:30 AM daily</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Sun className="w-5 h-5 text-orange-500" />
                      <div>
                        <div className="font-medium text-gray-800">Sunset Viewing Times</div>
                        <div className="text-sm text-gray-600">7:00 PM - 8:30 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-medium text-gray-800">Pool Access Hours</div>
                        <div className="text-sm text-gray-600">24/7 infinity pool access with ocean views</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Services</h3>
                  <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="font-medium text-gray-800">Island Transfers</div>
                      <div className="text-sm text-gray-600">Complimentary shuttle service to main island</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Booking Widget */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-24">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-800 mb-2">$345</div>
                  <div className="text-sm text-gray-600">per night</div>
                </div>

                {/* Check-in/Check-out */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <Calendar className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">CHECK-IN</div>
                      <div className="font-semibold text-gray-800">7/05/2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <Calendar className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">CHECK-OUT</div>
                      <div className="font-semibold text-gray-800">7/08/2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <User className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="text-sm text-gray-500">GUEST</div>
                      <div className="font-semibold text-gray-800">1 guest</div>
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                  Book Now
                </button>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">No credit card required</p>
                  <p className="text-sm text-gray-600">Free cancellation up to 24h before check-in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RoomDetail; 