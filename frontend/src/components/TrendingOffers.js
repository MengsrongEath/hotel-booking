import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Sparkles } from 'lucide-react';

const TrendingOffers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);

  const offers = [
    {
      id: 1,
      title: 'Boat Transfer',
      discount: '30% Off',
      daysLeft: '3 DAY LEFT >',
      icon: '🚤',
      bgColor: 'bg-gradient-to-br from-teal-500 to-teal-600',
      description: 'Luxury boat transfer to nearby islands'
    },
    {
      id: 2,
      title: 'Kayak Rentals',
      discount: '30% Off',
      daysLeft: '3 DAY LEFT >',
      icon: '🛶',
      bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      description: 'Explore crystal clear waters'
    },
    {
      id: 3,
      title: 'Island Bike Tour',
      discount: '30% Off',
      daysLeft: '3 DAY LEFT >',
      icon: '🚴',
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
      description: 'Scenic cycling adventure'
    },
    {
      id: 4,
      title: 'Spa Treatment',
      discount: '25% Off',
      daysLeft: '2 DAY LEFT >',
      icon: '💆',
      bgColor: 'bg-gradient-to-br from-pink-400 to-pink-500',
      description: 'Relaxing spa experience'
    },
    {
      id: 5,
      title: 'Diving Package',
      discount: '40% Off',
      daysLeft: '1 DAY LEFT >',
      icon: '🤿',
      bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
      description: 'Underwater exploration'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 3));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const visibleOffers = offers.slice(currentSlide, currentSlide + 3);

  return (
    <section className="relative -mt-20 z-20 px-8">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 shadow-2xl border border-teal-500/20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            <h2 className="text-3xl font-bold text-white">Trending Offers</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">{timeLeft} days left</span>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleOffers.map((offer, index) => (
            <div 
              key={offer.id} 
              className={`${offer.bgColor} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {offer.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <div className="text-2xl font-bold mb-2">{offer.discount}</div>
                <p className="text-sm opacity-90 mb-3">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {offer.daysLeft}
                  </span>
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index >= currentSlide && index < currentSlide + 3
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingOffers; 