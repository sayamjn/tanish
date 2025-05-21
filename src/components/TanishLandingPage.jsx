import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

// Import your assets here
import image from "../assets/7251a15bab748424861b078662b6fa1cf42202e3.jpg";
import family from "../assets/b257394cb8a56c184ecd89f75fc0920da871fcc4.jpg";
import logo from "../assets/cfef378836e8e4ee7e504a167d28a1602d7115bc.png";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

import completedOne from "../assets/171b0b0622c16330b561352b47e2d379fdaee5a7.jpg";
import completedTwo from "../assets/fe60a726c042f9a0024daf15be8a5338a7f8d66f.jpg";
import completedThree from "../assets/51d47d919dc476f0e67c492cf3a32795b698d920.jpg";

import testimonialOne from "../assets/964edad00ce2f682d7d45bcd8b3e60ded55e1f22.jpg";
import testimonialTwo from "../assets/921d8068a86f8429b0fa05e6a3f9a1daeb14e9d4.jpg";
import testimonialThree from "../assets/1b5cbfe768bd93177af3752d7cc5f2aa13f10b6b.jpg";
import testimonialFour from "../assets/af6f9dfaf58256203c023faaf2562df61b22c07d.jpg";

import websiteLogo from "../assets/986af53c9068004156763db4d249ade550d64983.png";

const TanishLandingPage = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        setStatsVisible(rect.top < window.innerHeight * 0.75);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="font-sans text-gray-800">
      <div className="relative h-screen">
        <img 
          src={image}
          alt="Interior design of premium apartment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="absolute top-0 left-0 w-full">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
              <img src={websiteLogo} alt="Tanish Logo" className="w-16 h-auto object-contain" />
            </div>
            <div className="text-right">
              <button className="bg-transparent border-none">
                <div className="flex flex-col items-end">
                  <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                  <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
          <h1 className="text-3xl md:text-4xl font-light mb-2 leading-tight drop-shadow-lg">
            Where dreams find an address,<br />
            and every key unlocks a new beginning.
          </h1>
          <div className="absolute bottom-6 right-6">
            <div className="text-white bg-opacity-70 rounded-md">
              <span className="text-5xl text-yellow-500 font-bold">25</span>
              <span className="text-lg text-yellow-500 font-light ml-1">+ Projects</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl mb-6">
            At Tanish Developers, we blend vision and craftsmanship to create exceptional living spaces where every detail reflects our passion for quality and innovation.
          </h2>
          
          <div className="w-24 h-0.5 bg-amber-700 mb-8"></div>
          
          <div className="text-sm leading-relaxed mb-10">
            <p className="mb-4">
              We are a renowned construction house with an inspiring track record and a solid foundation of trust we have built with our customers. We have played a vital role in enhancing the skyline of Pune city and giving her a facelift in the growing urbanization era.
            </p>
            <p className="mb-4">
              Our projects embody our brand philosophy and exemplify the highest degree of precision standards we always strive to cope up with. The success mantra of our exceedingly appreciated exquisite creations, is the consistent dialogue with the customers to understand their needs & aspirations. With landmark projects across the city, we have built a cohesive bond that brings a genuine smile on thousands of satisfied customers.
            </p>
            <p className="mb-4">
              Continuing the tradition of a fulfilling relationship with them, the company in its second generation is poised to be a coveted, cherished and the most admired brand in construction industry.
            </p>
          </div>
          
          <div id="stats-section" className="flex flex-wrap border-t border-b border-gray-200 py-6">
            <div className={`w-1/3 text-center transition-all duration-700 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <h3 className="text-3xl font-bold">25</h3>
              <p className="text-xs mt-1">Iconic Projects</p>
            </div>
            <div className={`w-1/3 text-center transition-all duration-700 delay-150 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <h3 className="text-3xl font-bold">2000+</h3>
              <p className="text-xs mt-1">Happy Customers</p>
            </div>
            <div className={`w-1/3 text-center transition-all duration-700 delay-300 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-xs mt-1">Homes Under Development</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-600">
              Read More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="my-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block md:absolute md:right-14 lg:right-24 xl:right-72 md:top-10 z-10">
              <div className="flex flex-col space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                  <img src={one} alt="Value for Money" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                  <img src={two} alt="Modern Amenities" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                  <img src={three} alt="Timely Possession" className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                  <img src={four} alt="Brand Legacy" className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 left-0 p-4 z-10">
              <img 
                src={logo}
                alt="Tanish Park logo" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            
            <div className="relative">
              <img 
                src={family} 
                alt="Happy family" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
  <div className="flex mt-5 md:hidden flex-col space-y-3 mb-8">
      <div className="flex items-center bg-[#c1b283] rounded-full px-4 py-2.5">
        <div className="w-6 h-6 bg-[#f8ecbf] rounded-full flex items-center justify-center mr-3">
          <img src={one} alt="Value for Money" className="w-5 h-5" />
        </div>
        <span className="text-white text-base">Value for Money</span>
      </div>
      
      <div className="flex items-center bg-[#c1b283] rounded-full px-4 py-2.5">
        <div className="w-6 h-6 bg-[#f8ecbf] rounded-full flex items-center justify-center mr-3">
          <img src={two} alt="Modern Amenities" className="w-5 h-5" />
        </div>
        <span className="text-white text-base">Modern Amenities</span>
      </div>
      
      <div className="flex items-center bg-[#c1b283] rounded-full px-4 py-2.5">
        <div className="w-6 h-6 bg-[#f8ecbf] rounded-full flex items-center justify-center mr-3">
          <img src={three} alt="Timely Possession" className="w-5 h-5" />
        </div>
        <span className="text-white text-base">Timely Possession</span>
      </div>
      
      <div className="flex items-center bg-[#c1b283] rounded-full px-4 py-2.5">
        <div className="w-6 h-6 bg-[#f8ecbf] rounded-full flex items-center justify-center mr-3">
          <img src={four} alt="Brand Legacy" className="w-5 h-5" />
        </div>
        <span className="text-white text-base">Brand Legacy</span>
      </div>
    </div>
    
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl mb-6">The rock-solid foundation of Excellence, Innovation & Leadership</h2>
          
          <div className="w-24 h-0.5 bg-amber-700 mb-8"></div>
          
          <div className="text-sm leading-relaxed mb-10">
            <p className="mb-4">
              Our foundation has been deeply rooted in a profound legacy of spreading pristine delight. Our core business values, corporate philosophy and principles of ethical practices have further strengthened it. Tanish Homes today is synonymous with commitment and total integrity.
            </p>
            <p className="mb-4">
              We have earned this recognition by constructing landmark masterpieces on the prominent locations of PCMC, adhering to the supremely highest standards of quality and with innovation-led architectural designs that are leagues ahead of the contemporary benchmarks.
            </p>
            <p className="mb-4">
              15+ years of unmatched legacy, 25+ completed projects, 75,00,000+ Sq. Ft. of construction and 10000+ happy customers are the foundation blocks upon which our trust is continuously being built.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl">Completed Projects</h2>
            <a href="#" className="flex items-center text-sm font-medium text-gray-600">
              View All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Responsive grid with properly sized columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-48 md:h-64 rounded-md overflow-hidden shadow-md">
              <img 
                src={completedOne} 
                alt="Tanish Pearls" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black to-transparent w-full">
                <h3 className="text-white text-sm font-medium">Tanish Pearls</h3>
              </div>
            </div>
            
            <div className="relative h-48 md:h-64 rounded-md overflow-hidden shadow-md">
              <img 
                src={completedTwo}
                alt="Tanish Srushti" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black to-transparent w-full">
                <h3 className="text-white text-sm font-medium">Tanish Srushti</h3>
              </div>
            </div>
            
            <div className="relative h-48 md:h-64 rounded-md overflow-hidden shadow-md sm:col-span-2 md:col-span-1">
              <img 
                src={completedThree}
                alt="Tanish Vatika" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black to-transparent w-full">
                <h3 className="text-white text-sm font-medium">Tanish Vatika</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl mb-6">
            Experience life redefined at Tanish Developers — where contemporary comfort meets enduring craftsmanship.
          </h2>
          
          <div className="w-24 h-0.5 bg-amber-700 mb-8"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <div className="border border-amber-100 rounded-md overflow-hidden shadow-sm">
              <div className="relative h-40 bg-gray-100">
                <img 
                  src={testimonialOne}
                  alt="Client testimonial" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="text-sm font-semibold">Dr. Sachin & Dr. Sheetal Hingmire</p>
              </div>
            </div>
            
            <div className="border border-amber-100 rounded-md overflow-hidden shadow-sm">
              <div className="relative h-40 bg-gray-100">
                <img 
                  src={testimonialTwo}
                  alt="Client testimonial" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="text-sm font-semibold">Dr. Sachin & Dr. Sheetal Hingmire</p>
              </div>
            </div>
            
            <div className="border border-amber-100 rounded-md overflow-hidden shadow-sm">
              <div className="relative h-40 bg-gray-100">
                <img 
                  src={testimonialThree}
                  alt="Client testimonial" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="text-sm font-semibold">Dr. Sachin & Dr. Sheetal Hingmire</p>
              </div>
            </div>
            
            <div className="border border-amber-100 rounded-md overflow-hidden shadow-sm">
              <div className="relative h-40 bg-gray-100">
                <img 
                  src={testimonialFour}
                  alt="Client testimonial" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="text-sm font-semibold">Dr. Sachin & Dr. Sheetal Hingmire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer style={{backgroundColor: "#423F2C"}} className=" text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="flex items-center mb-4 justify-center sm:justify-start">
                <img src={websiteLogo} alt="Tanish Logo" className="w-16 h-auto object-contain" />
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-300">Home</a></li>
                <li><a href="#" className="hover:text-amber-300">About</a></li>
                <li><a href="#" className="hover:text-amber-300">Projects</a></li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-300">Channel Partner</a></li>
                <li><a href="#" className="hover:text-amber-300">Careers</a></li>
                <li><a href="#" className="hover:text-amber-300">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <p className="text-sm mb-3">Privacy Policy</p>
              <div className="flex space-x-3 justify-center sm:justify-start">
                <a href="#" className="text-white hover:text-amber-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.143 15.357h-2.143v-6.429h2.143v6.429zm-1.071-7.429c-.714 0-1.286-.571-1.286-1.286s.571-1.286 1.286-1.286 1.286.571 1.286 1.286-.571 1.286-1.286 1.286zm8.214 7.429h-2.143v-3.429c0-.857-.143-1.857-1.286-1.857-1.286 0-1.5.857-1.5 1.714v3.571h-2.143v-6.429h2.143v.857h.214c.429-.714 1.143-1.143 2.143-1.143 2.143 0 2.571 1.429 2.571 3.286v3.429z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.333c-4.601 0-8.333-3.732-8.333-8.333S7.399 3.667 12 3.667 20.333 7.399 20.333 12 16.601 20.333 12 20.333zm3.701-11.472l.157.011c.555.046.986.523.986 1.092 0 .558-.417 1.017-.958 1.084l-.181.007h-3.383v3.217c0 .605-.488 1.095-1.093 1.095-.553 0-1.008-.411-1.085-.943l-.01-.152v-3.217H6.765c-.605 0-1.094-.489-1.094-1.094 0-.554.411-1.009.942-1.085l.152-.01h3.293V5.649c0-.604.489-1.094 1.094-1.094.554 0 1.009.411 1.085.942l.01.152v3.219h3.217z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.333c-4.601 0-8.333-3.732-8.333-8.333S7.399 3.667 12 3.667 20.333 7.399 20.333 12 16.601 20.333 12 20.333zm3.933-9.794a1.898 1.898 0 11-3.795 0 1.898 1.898 0 013.795 0zm-7.856-3.546a1.898 1.898 0 110 3.795 1.898 1.898 0 010-3.795z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-700 mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start justify-center md:justify-start text-center md:text-left">
              <MapPin className="mr-2 h-5 w-5 flex-shrink-0 mt-1" />
              <p>
                GAT NO-519,520, Opp Ganesh Mandir, Nashik Pune Highway,<br />
                Borate Vasti Moshi Pune, Maharashtra, 412105
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <p>Sales enquiry: 9960 010 101, 9595 704 704</p>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                <div>
                  <p>info@tanishdevelopers.com</p>
                  <p>tanish108@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500 mt-8">
            <p>Copyright © 2025 Global Lotus Landmarks LLP. All right reserved. | Sansee Designs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TanishLandingPage;