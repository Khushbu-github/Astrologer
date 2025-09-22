import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Phone, Mail, MapPin, Users, Zap, Shield, Clock, Menu, X } from 'lucide-react';

const AstrologyWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const carouselSlides = [
    { id: 1, image: "img1.png", alt: "Slide 1" },
    { id: 2, image: "img2.png", alt: "Slide 2" },
    { id: 3, image: "img3.png", alt: "Slide 3" },
    { id: 4, image: "img4.png", alt: "Slide 4" },
    { id: 5, image: "img5.png", alt: "Slide 5" }
  ];

  const services = [
    {
      id: 1,
      title: "Get Your Ex-Love Back",
      description: "Get Your Ex-Love Back with the Expertise of Master Deekshith Sharma's Intensive Love Spells and Relationship Advice. Trust His Proven Methods for a Lasting Reunion",
      image: "img6.jpeg",
      bgColor: "bg-red-600",
      customStyle: { backgroundColor: '#a51010ff' }
    },
    {
      id: 2,
      title: "Spiritual Healing",
      description: "Spiritual healing by Master Deekshith Sharma is a profoundly transformative experience that unlocks the power of your inner self to overcome obstacles and discover",
      image: "img7.jpeg",
      bgColor: "bg-blue-800",
      customStyle: { backgroundColor: '#1D274E' }
    },
    {
      id: 3,
      title: "Education Problem Solutions",
      description: "Education problem solutions by Master Deekshith Sharma refer to the various methods and techniques that can be employed.",
      image: "img8.jpeg",
      bgColor: "bg-red-600",
      customStyle: { backgroundColor: '#a51010ff' }
    },
    {
      id: 4,
      title: "Health Problem",
      description: "Get your health problems solved effectively by the best astrologer in town. Our expert astrologer brings years of experience and knowledge to the table to help the people from all the issues",
      image: "img9.jpeg",
      bgColor: "bg-red-600",
      customStyle: { backgroundColor: '#a51010ff' }
    },
    {
      id: 5,
      title: "Business Problem",
      description: "Business problem solutions are a highly sought-after specialty among astrologers. With their vast knowledge, extensive experience, and unparalleled expertise, they have the ability",
      image: "img10.jpeg",
      bgColor: "bg-blue-800",
      customStyle: { backgroundColor: '#1D274E' }
    },
    {
      id: 6,
      title: "Horoscope Reading",
      description: "Horoscope reading by an experienced astrologer can provide great insights into your future. Through the deep analysis of the planetary positions in your birth chart",
      image: "img11.jpeg",
      bgColor: "bg-red-600",
      customStyle: { backgroundColor: '#a51010ff' }
    },
    {
      id: 7,
      title: "Psychic Reading",
      description: "Get an insightful psychic reading by an experienced astrologer who can provide you with valuable guidance, clarity, and direction for your path ahead. Our skilled astrologer will connect with deep level",
      image: "img12.jpeg",
      bgColor: "bg-red-600",
      customStyle: { backgroundColor: '#a51010ff' }
    },
    {
      id: 8,
      title: "Negative Energy Removal",
      description: "With the guidance and expertise of the best astrologer in town, you can rid yourself of all negative energy and unlock the keys to living a truly fulfilling and positive life.",
      image: "img13.jpeg",
      bgColor: "bg-blue-800",
      customStyle: { backgroundColor: '#1D274E' }
    },
    {
      id: 9,
      title: "Divorce Problem",
      description: "There are a wide array of effective solutions available to help resolve divorce issues. Deekshit is well-equipped",
      image: "img14.jpeg",
      bgColor: "bg-red-600",
      customStyle: { backgroundColor: '#a51010ff' }
    }
  ];

  const testimonials = [
    {
      name: "Arjun",
      location: "Mysore",
      text: "I was skeptical about astrology until I came across this website. The detailed analysis of my birth chart was so accurate that it blew my mind. Highly recommended!",
      rating: 5,
      avatar: "per1.jpeg"
    },
    {
      name: "Priya Sharma",
      location: "Supervisor",
      text: "He is a very insightful reader and does all readings with accurate predictions and solutions. He is best psychic and astrologer in India",
      rating: 4,
      avatar: "per2.jpeg"
    },
    {
      name: "Rajesh Kumar",
      location: "Customer",
      text: "I had serious love problem, through his astrological wisdom he cleared all problems and helped me to put me on track with my love life, thank you Master Deepak",
      rating: 5,
      avatar: "per3.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .scrolling-text {
          animation: scroll 20s linear infinite;
          white-space: nowrap;
        }
        
        .marquee-container {
          overflow: hidden;
          position: relative;
        }
      `}</style>

      {/* Enhanced Header - Mobile Responsive */}
 <header className="bg-gradient-to-r from-red-800 to-red-800 text-white text-center py-4 sm:py-6 relative overflow-hidden">   
  <div className="flex items-center justify-between px-4 sm:px-6 max-w-full">     
    {/* Left God Image */}     
    <div className="flex-shrink-0">       
      <img         
        src="god1.jpeg"         
        alt="God 1"         
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-cover rounded-lg border-4 border-yellow-400 shadow-lg"       
      />     
    </div>          

    {/* Center Content */}     
    <div className="flex-1 mx-4 sm:mx-6 min-w-0">       
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6">         
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex-shrink-0" />         
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide whitespace-nowrap">           
          9008020919         
        </h1>       
      </div>       
      
      {/* Scrolling text container */}   
      <div className="marquee-container bg-red-800 bg-opacity-50 py-2 sm:py-3 mt-3 sm:mt-5 rounded">     
        <div className="scrolling-text text-sm sm:text-lg md:text-xl lg:text-2xl font-medium px-4 overflow-hidden whitespace-nowrap">       
          ✨ Embark on a journey of self-discovery and empowerment with Pandit Guru Ji's insightful astrology guidance, illuminating your path to cosmic fulfillment! ✨     
        </div>   
      </div>     
    </div>          

    {/* Right God Image */}     
    <div className="flex-shrink-0">       
      <img         
        src="god2.jpeg"         
        alt="God 2"         
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-cover rounded-lg border-4 border-yellow-400 shadow-lg"       
      />     
    </div>   
  </div>  
</header>

      {/* Mobile-Responsive Navigation */}
      <nav className="bg-white shadow-md border-b-4 border-red-500 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-10 sm:h-20 md:h-24 lg:h-auto px-4 sm:px-6 lg:px-0">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-12 sm:h-16 md:h-20 lg:h-60 xl:h-80 w-auto mr-2 sm:mr-4" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-pink-500 hover:text-red-500 p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-14">
              <a href="/" className="text-pink-500 hover:text-red-500 font-bold text-lg lg:text-2xl xl:text-3xl transition-colors">
                Home
              </a>
              <a href="/" className="text-pink-500 hover:text-red-500 font-bold text-lg lg:text-2xl xl:text-3xl transition-colors">
                About Us
              </a>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-pink-500 hover:text-red-500 font-bold text-lg lg:text-2xl xl:text-3xl transition-colors flex items-center">
                  Services
                  <svg
                    className="ml-1 lg:ml-3 h-4 w-4 lg:h-6 lg:w-6 xl:h-8 xl:w-8 transform group-hover:rotate-180 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
                      111.414 1.414l-4 4a1 1 0 
                      01-1.414 0l-4-4a1 1 0 
                      010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 lg:mt-4 w-64 lg:w-80 bg-white rounded-2xl shadow-2xl border 
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                  <div className="py-4">
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Health problem</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Horoscope Reading</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Job Problems</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Marriage Problems</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Negative Energy Removal</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Partner in Control</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Psychic Reading</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Spiritual Healing</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Spiritual Reading</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Astrology & Horoscope</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Bring Family Members Closer</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Business Problem Solution</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Career Problem</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Childless Couple Solutions</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Court Case Law Suits</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Divorce Problem</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Education Problem Solutions</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Family Problem Solutions</a>
                    <a href="#" className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-pink-50 hover:text-red-500">Get Your Ex Love Back</a>
                  </div>
                </div>
              </div>

              <a href="/" className="text-pink-500 hover:text-red-500 font-bold text-lg lg:text-2xl xl:text-3xl transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
              <div className="py-4 px-4 space-y-4">
                <a href="/" className="block text-pink-500 hover:text-red-500 font-bold text-lg">Home</a>
                <a href="/" className="block text-pink-500 hover:text-red-500 font-bold text-lg">About Us</a>
                <div className="space-y-2">
                  <div className="text-pink-500 font-bold text-lg">Services:</div>
                  <div className="pl-4 space-y-2 max-h-48 overflow-y-auto">
                    <a href="#" className="block text-sm text-gray-700">Health problem</a>
                    <a href="#" className="block text-sm text-gray-700">Horoscope Reading</a>
                    <a href="#" className="block text-sm text-gray-700">Job Problems</a>
                    <a href="#" className="block text-sm text-gray-700">Marriage Problems</a>
                    <a href="#" className="block text-sm text-gray-700">Negative Energy Removal</a>
                    <a href="#" className="block text-sm text-gray-700">Partner in Control</a>
                    <a href="#" className="block text-sm text-gray-700">Psychic Reading</a>
                    <a href="#" className="block text-sm text-gray-700">Spiritual Healing</a>
                  </div>
                </div>
                <a href="/" className="block text-pink-500 hover:text-red-500 font-bold text-lg">Contact Us</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Responsive Carousel */}
      <section className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselSlides.map((slide) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
              className="w-full h-64 sm:h-96 md:h-screen object-cover flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-4 rounded-full hover:bg-black/60"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-6 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-4 rounded-full hover:bg-black/60"
        >
          ❯
        </button>

        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${
                currentSlide === idx ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Responsive About Section */}
      <section
        className="flex flex-col lg:flex-row items-center justify-center bg-cover bg-center text-white p-4 sm:p-8 md:p-16 min-h-screen"
        style={{ backgroundImage: "url('gif1.gif')" }}
      >
        <div className="flex items-center justify-center w-full lg:w-1/2 min-h-[50vh] lg:h-[70vh] bg-black/50 rounded-2xl p-4 sm:p-6 mb-8 lg:mb-0">
          <div className="text-center lg:text-left">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 px-2 sm:px-4 py-2 rounded-md inline-block shadow-lg border-2 border-white">
              About Pandit Guruji
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Through years of devoted study, spiritual practice, and intuitive exploration,
              Pandit Guruji has cultivated a profound understanding of the cosmic forces that
              influence our lives. With a compassionate heart and wise intellect, he offers
              personalized consultations, enlightening discourses, and transformative workshops
              that guide individuals on their path of self-discovery and holistic growth.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Pandit Guruji's approach to astrology goes far beyond mere predictions. He views it
              as a sacred science and a divine path to understanding the deeper interconnectedness
              of the universe. With clarity and spiritual insight, he empowers individuals to
              navigate the challenges of love, career, health, and spirituality, offering guidance
              that is both practical and deeply transformative.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 min-h-[40vh] lg:h-[70vh]">
          <img
            src="god.png"
            alt="God"
            className="h-full w-full max-w-md lg:max-w-full object-contain rounded-2xl shadow-lg bg-white/10 p-2 sm:p-4"
          />
        </div>
      </section>

      {/* Responsive Services Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 sm:w-16 h-0.5 bg-red-500 mr-2 sm:mr-4"></div>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">
                SERVICES LIST
              </p>
              <div className="w-8 sm:w-16 h-0.5 bg-red-500 ml-2 sm:ml-4"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" style={{ color: '#1D274E' }}>
              Best Services We Can
            </h2>
            <h2 className="p-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" style={{ color: '#1D274E' }}>
              Offer For You !
            </h2>
          </div>
           
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={service.customStyle || { backgroundColor: service.bgColor }}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-300 rounded-xl flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                    <img
                      src={`/${service.image}`}
                      alt={service.title}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Stats Section */}
      <section 
        className="relative py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('/space.jpeg')",
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, #ff6b6b 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 flex-col xl:flex-row">
            {/* Left side - Goal section */}
            <div className="flex-1 w-full">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] flex flex-col items-center justify-center text-center relative mx-auto p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-6 h-6 opacity-60">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-red-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white px-3 sm:px-5 py-1 sm:py-2 rounded-full mb-4 sm:mb-6">
                  <span className="text-red-600 text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-600 rounded-full"></div>
                    OUR GOAL
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-600 rounded-full"></div>
                  </span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-3 leading-tight">Empowering</h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-3 leading-tight">Your Life</h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">Journey</h3>
                  
                  <p className="text-white text-xs sm:text-sm leading-relaxed max-w-xs text-center">
                    Empowering individuals through insightful guidance
                    for transformative growth and fulfillment.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Stats grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {/* Insights */}
                <div className="text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 sm:mb-4 md:mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 144 144">
                      <circle
                        cx="72"
                        cy="72"
                        r="65"
                        stroke="#374151"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="65"
                        stroke="#ef4444"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="408.4"
                        strokeDashoffset="20.42"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">95%</span>
                    </div>
                  </div>
                  <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Insights</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Providing clarity,<br />
                    understanding, and<br />
                    perspective.
                  </p>
                </div>
                
                {/* Guidance */}
                <div className="text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 sm:mb-4 md:mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 144 144">
                      <circle
                        cx="72"
                        cy="72"
                        r="65"
                        stroke="#374151"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="65"
                        stroke="#ef4444"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="408.4"
                        strokeDashoffset="40.84"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">90%</span>
                    </div>
                  </div>
                  <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Guidance</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Offering direction, support,<br />
                    and encouragement.
                  </p>
                </div>
                
                {/* Transformation */}
                <div className="text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 sm:mb-4 md:mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 144 144">
                      <circle
                        cx="72"
                        cy="72"
                        r="65"
                        stroke="#374151"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="65"
                        stroke="#ef4444"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="408.4"
                        strokeDashoffset="16.34"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">96%</span>
                    </div>
                  </div>
                  <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Transformation</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Facilitating growth, self-<br />
                    discovery, and inner<br />
                    awakening.
                  </p>
                </div>
                
                {/* Excellence */}
                <div className="text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 sm:mb-4 md:mb-6">
                    <svg className="w-full h-full" viewBox="0 0 144 144">
                      <circle
                        cx="72"
                        cy="72"
                        r="65"
                        stroke="#ef4444"
                        strokeWidth="6"
                        fill="none"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">100%</span>
                    </div>
                  </div>
                  <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Excellence</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Delivering exceptional<br />
                    results and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fixed positioned chat icons for mobile */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-2 sm:gap-3 z-50">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </div>
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Responsive Astrology Guide Section */}
      <section className="bg-yellow-400 py-10 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16 text-center lg:text-left">
            Best Astrology Guidance
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Zodiac Wheel - Responsive */}
            <div className="w-full max-w-md lg:max-w-none lg:w-[500px] xl:w-[600px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] bg-gradient-to-b from-teal-800 to-teal-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <img 
                src="chakra.jpeg" 
                alt="Astrology Wheel" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-b from-teal-800 to-teal-600">
                <div className="text-white text-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 border-4 border-white rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">Zodiac Wheel</span>
                  </div>
                  <div className="text-base sm:text-lg">Astrological Chart</div>
                </div>
              </div>
            </div>
            
            {/* Service Cards - Responsive */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
              <div className="bg-slate-800 text-white p-4 sm:p-6 lg:p-8 rounded-3xl w-full lg:w-80 xl:w-96 flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="bg-slate-700 p-2 sm:p-3 lg:p-4 rounded-full">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Client Details</h3>
              </div>
              <div className="bg-red-600 text-white p-4 sm:p-6 lg:p-8 rounded-3xl w-full lg:w-80 xl:w-96 flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="bg-red-700 p-2 sm:p-3 lg:p-4 rounded-full">
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Various Astrology</h3>
                  <p className="text-base sm:text-lg lg:text-xl">Service Provided</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text content - Responsive */}
          <div className="max-w-5xl space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
              Unlock the secrets of your past, present, and future with our expert astrologer and horoscope reader!
            </p>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl font-semibold">See beyond the veil</p>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
              Our skilled astrologer offers unparalleled insights into your life, guiding you through spiritual readings 
              that illuminate every aspect of your journey.
            </p>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl font-semibold">Love, career, and more</p>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
              Experience the power of love psychic services that can transform your relationships. Get personalized 
              phone readings tailored to your needs for clarity and direction.
            </p>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl font-semibold">Spiritual guidance at your fingertips</p>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed">
              Connect with our expert for spiritual consultations that will leave you feeling empowered and 
              enlightened. Experience the difference in every interaction as we serve clients across the USA with 
              dedication and care.
            </p>
            
            {/* Responsive Quote box */}
            <div className="mt-8 sm:mt-12 lg:mt-16 max-w-4xl">
              <div className="bg-red-500 rounded-3xl p-8 sm:p-12 lg:p-16 relative">
                <div className="text-4xl sm:text-6xl lg:text-8xl text-blue-900 mb-4 sm:mb-6 lg:mb-8 font-serif absolute top-4 sm:top-6 lg:top-8 left-6 sm:left-8 lg:left-12">"</div>
                <p className="text-white text-base sm:text-lg lg:text-2xl leading-relaxed italic pt-4 sm:pt-6 lg:pt-8">
                  "Unlocking destinies with deep insights and compassionate guidance, Deekshit Sharma 
                  illuminates paths to fulfillment and empowerment in astrology."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Services Features */}
      <section 
        className="relative py-8 sm:py-10 md:py-12 overflow-hidden"
        style={{
          backgroundImage: 'url("chakra.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex-1 text-white w-full">
              {/* Service List Badge */}
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6">
                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wider">SERVICE LIST</span>
                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Embracing the <br />
                <span className="text-red-500">Cycles</span> of Life
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 text-gray-300 leading-relaxed">
                With a mastery of astrology and a legacy of transformative 
                guidance, we stand as leaders in the field, empowering lives.
              </p>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Astrological mastery, transformative guidance: Leaders in empowering lives.</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Legacy of mastery, transformative guidance: Leading the field.</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Empowering lives through astrological mastery and transformative guidance.</p>
                </div>
              </div>

              {/* Astrologer Profile */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-red-500">
                  <img 
                    src="logo1.jpg" 
                    alt="Pandit Guru Ji" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg lg:text-xl">Pandit Guru Ji</h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg">Astrologer</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Privacy Guaranteed */}
                <div className="bg-gray-900/80 backdrop-blur-sm border border-red-500/50 p-6 sm:p-8 lg:p-10 rounded-2xl text-center hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">Privacy Guaranteed</h3>
                </div>
                
                {/* Fast Solutions */}
                <div className="bg-gray-900/80 backdrop-blur-sm border border-red-500/50 p-6 sm:p-8 lg:p-10 rounded-2xl text-center hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">Fast Solutions</h3>
                </div>
                
                {/* Transforming Challenges */}
                <div className="bg-gray-900/80 backdrop-blur-sm border border-red-500/50 p-6 sm:p-8 lg:p-10 rounded-2xl text-center hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Transforming</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">challenges into opportunities through Astrology seamlessly.</p>
                </div>
                
                {/* Vedic Astrology */}
                <div className="bg-gray-900/80 backdrop-blur-sm border border-red-500/50 p-6 sm:p-8 lg:p-10 rounded-2xl text-center hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">We follow the foot</h3>
                  <p className="text-gray-400 text-xs sm:text-sm lg:text-base">prints of Ancients vedic astrology and also modern psychic reading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Testimonials Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: '#ff5722' }}>
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 25%, rgba(255,255,255,0.08) 0.5px, transparent 0.5px),
              radial-gradient(circle at 45% 75%, rgba(255,255,255,0.06) 0.8px, transparent 0.8px),
              radial-gradient(circle at 75% 35%, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 90px 90px, 120px 120px'
          }} 
        />
        
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-18 lg:mb-24">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white bg-opacity-95 rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8 lg:mb-12 shadow-lg">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700 font-semibold text-sm sm:text-base lg:text-lg tracking-wider uppercase">CLIENT REVIEWS</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Review's Of Clients</h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                {/* Profile Image - Positioned above card */}
                <div className="absolute -top-6 sm:-top-8 lg:-top-10 left-6 sm:left-8 lg:left-10 z-10">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full overflow-hidden border-4 sm:border-5 border-white shadow-2xl bg-white">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Main Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl min-h-80 sm:min-h-96">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  
                  {/* Content */}
                  <div className="pt-12 sm:pt-14 lg:pt-16 relative z-10">
                    {/* Review Text */}
                    <p className="text-gray-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed text-sm sm:text-base lg:text-lg font-medium line-clamp-4">
                      {testimonial.text}
                    </p>

                    {/* Name and Location */}
                    <div className="mb-6 sm:mb-8">
                      <h4 className="font-bold text-white text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 tracking-wide">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base font-medium uppercase tracking-wider">
                        {testimonial.location}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 sm:gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-200 ${
                            i < testimonial.rating 
                              ? 'fill-orange-400 text-orange-400' 
                              : 'fill-gray-600 text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-bl-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive floating contact buttons */}
        <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 flex flex-col gap-2 sm:gap-3 z-50">
          <a 
            href="tel:+919008020919" 
            className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
          <a 
            href="https://wa.me/919008020919" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-green-400 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Responsive Contact Section */}
      <section 
        className="relative py-8 sm:py-12 md:py-16 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(59, 130, 246, 0.9)), url('gif2.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            
            {/* Left Side - Content & Map */}
            <div className="text-white space-y-6 sm:space-y-8">
              <div>
                <p className="text-orange-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 tracking-wider uppercase">
                  GET IN TOUCH
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Contact Us
                </h2>
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100">
                    Our experienced Pandit Guru Ji provides deep insights into your life journey, 
                    unraveling the mysteries of your past, shedding light on your present 
                    circumstances, and guiding you towards a brighter future. Tap into the spiritual 
                    realm with personalized readings that connect you to higher energies. Our 
                    Pandit offers love psychic services, spiritual consultations, Vedic astrology, 
                    puja ceremonies, and more to help you navigate life's challenges with clarity 
                    and purpose. No matter where you are in Mysore, our Pandit Guru Ji is just a 
                    phone call away. Get accurate readings and transformative solutions right at 
                    your fingertips, bringing you peace of mind and empowerment in every consultation.
                  </p>
                </div>
              </div>

              {/* Google Maps - Responsive */}
             <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62204.13450239775!2d76.57542864999999!3d12.311827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381e572bc9%3A0x2b69b44a6bc3de6a!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1642676924123!5m2!1sen!2sin"
    width="100%"
    height="200"
    className="sm:h-60 md:h-80"
    style={{border: 0, borderRadius: '12px'}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Mysore Location"
  />
  <div className="mt-3 sm:mt-4 text-center">
    <a
      href="https://maps.app.goo.gl/tHicMgjwh7cLkoeU9?g_st=aw"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 text-white font-medium text-sm sm:text-base"
    >
      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
      View larger map
    </a>
  </div>
</div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex items-center justify-center h-full">
              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b border-gray-200 pb-2 sm:pb-3">
                  Mysore Office :
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-red-100 rounded-full">
                      <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-base sm:text-lg">#266 ,16 th main 5th class,  Mysore - 570009</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-red-100 rounded-full">
                      <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <a 
                      href="tel:+919008020919" 
                      className="text-gray-700 font-medium text-base sm:text-lg hover:text-red-600 transition-colors"
                    >
                      +91 9008020919
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-orange-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Responsive Footer */}
      <footer className="relative bg-gray-900 text-white py-8 sm:py-10 md:py-12">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url("img11.jpeg")' }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2">
                <ul className="space-y-1 sm:space-y-2">
                  <li className="text-gray-300 text-sm sm:text-base">Astrology & Horoscope</li>
                  <li className="text-gray-300 text-sm sm:text-base">Business Problem Solution</li>
                  <li className="text-gray-300 text-sm sm:text-base">Bring Family Members Closer</li>
                  <li className="text-gray-300 text-sm sm:text-base">Career Problem</li>
                  <li className="text-gray-300 text-sm sm:text-base">Childless Couple Solutions</li>
                  <li className="text-gray-300 text-sm sm:text-base">Court Case Law Suits</li>
                  <li className="text-gray-300 text-sm sm:text-base">Divorce Problem</li>
                </ul>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="text-gray-300 text-sm sm:text-base">Education Problem Solutions</li>
                  <li className="text-gray-300 text-sm sm:text-base">Family Problem Solutions</li>
                  <li className="text-gray-300 text-sm sm:text-base">Get Your Ex Love Back</li>
                  <li className="text-gray-300 text-sm sm:text-base">Health Problems</li>
                  <li className="text-gray-300 text-sm sm:text-base">Horoscope Reading</li>
                  <li className="text-gray-300 text-sm sm:text-base">Job Problems</li>
                  <li className="text-gray-300 text-sm sm:text-base">Marriage Problems</li>
                </ul>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="text-gray-300 text-sm sm:text-base">Negative Energy Removal</li>
                  <li className="text-gray-300 text-sm sm:text-base">Partner in Control</li>
                  <li className="text-gray-300 text-sm sm:text-base">Psychic Reading</li>
                  <li className="text-gray-300 text-sm sm:text-base">Spiritual Healing</li>
                  <li className="text-gray-300 text-sm sm:text-base">Spiritual Reading</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Feel free to contact & reach us !!</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  <span className="text-sm sm:text-base">#266 ,16 th main 5th class,  Mysore - 570009</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  <span className="text-sm sm:text-base">9008020919</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">Copyright © Khushbu ajdigitals All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AstrologyWebsite;