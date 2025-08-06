import React from 'react';
import { 
  CheckCircle, 
  MapPin, 
  Star, 
  Clock, 
  Wifi, 
  Coffee,
  Heart,
  Leaf
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Located near the sea",
      description: "Just minutes from major tourist attractions and transportation hubs"
    },
    {
      icon: Star,
      title: "Comfortable and modern rooms",
      description: "Designed with your comfort in mind"
    },
    {
      icon: Clock,
      title: "Exceptional service",
      description: "Friendly staff ready to assist you at all hours"
    },
    {
      icon: Wifi,
      title: "Online booking",
      description: "Quick, easy and secure booking"
    },
    {
      icon: Coffee,
      title: "Amenities",
      description: "Free Wi-Fi, swimming pool, spa, meeting rooms and more"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8 bg-gradient-to-br from-blue-100 to-teal-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-slide-up">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Welcome to Grand Plaza Hotel Where Comfort Meets Luxury
          </p>
        </div>
      </section>

      {/* Top Image Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Left Image */}
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                  alt="Beach with paddleboards"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Column - Two Images */}
            <div className="space-y-8">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Aerial view of bungalows"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Village by the water"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introductory Text */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Located in Sihanoukville, Grand Plaza Hotel is your ultimate destination for elegance, 
            comfort and exceptional service. Whether you are traveling for business or pleasure, 
            we offer a relaxing atmosphere with modern amenities to make your stay unforgettable.
          </p>
        </div>
      </section>

      {/* Middle Image Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Circular Images */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-32 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt="Hotel room with ocean view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt="Modern room with window"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt="Neatly made bed"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Rectangular Images */}
            <div className="space-y-6">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Sunset over water"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Beach setup with umbrella"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Aerial view of resort"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Text */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            With stylish rooms, fine dining options, and top-notch hospitality, Grand Plaza Hotel 
            has become a trusted name for travelers from around the world. From our 24/7 front desk 
            service to our personalized guest experiences, we're committed to making every stay special. 
            The best escape you can have is getting a hotel room and doing what you love.
          </p>
        </div>
      </section>

      {/* Bottom Image Grid - Pool Facilities */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                alt="Infinity pool with decking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Swimming pool with palm trees"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Grand Plaza Hotel</h2>
            <p className="text-gray-600 text-lg">Experience the perfect blend of luxury and comfort</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <feature.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concluding Statement */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            At Grand Plaza Hotel, we don't just provide rooms - we provide an experience. 
            Discover the true meaning of hospitality with us.
          </p>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-teal-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
              Thank you for Staying
            </h2>
            <p className="text-xl text-white">
              with Us at Grand Plaza Hotel Dear Valued Guest
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <p className="text-white text-lg leading-relaxed mb-6">
              We are grateful for your trust in choosing Grand Plaza Hotel for your stay. 
              Your satisfaction is our top priority, and we strive to provide you with 
              exceptional service and unforgettable experiences.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="text-white text-sm">From The Grand Plaza Hotel Team</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 