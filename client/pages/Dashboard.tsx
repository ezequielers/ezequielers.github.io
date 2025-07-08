
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Home, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Oliver Bennet</h2>
            <button 
              onClick={() => navigate('/payment')}
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
            >
              $37,657.00
            </button>
          </div>
        </div>
        
        {/* Centralized Starz logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <span className="text-yellow-400 text-xl">⭐</span>
          <span className="text-white font-bold text-lg">starz</span>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Games made for you */}
      <div className="px-4 mt-6">
        <h3 className="text-white text-lg font-medium mb-4">Games made for you</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <div className="flex-shrink-0 text-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-2 bg-gray-800">
              <img 
                src="/lovable-uploads/ddc7bc58-bb56-4976-bdff-d87dc56ce56d.png" 
                alt="Roxz"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-sm">Roxz</p>
          </div>
          
          <div className="flex-shrink-0 text-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-2 bg-gray-800">
              <img 
                src="/lovable-uploads/ddc7bc58-bb56-4976-bdff-d87dc56ce56d.png" 
                alt="Lynx"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-sm">Lynx</p>
          </div>
          
          <div className="flex-shrink-0 text-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-2 bg-gray-800">
              <img 
                src="/lovable-uploads/ddc7bc58-bb56-4976-bdff-d87dc56ce56d.png" 
                alt="Zyra"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-sm">Zyra</p>
          </div>
          
          <div className="flex-shrink-0 text-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-2 bg-gray-800">
              <img 
                src="/lovable-uploads/ddc7bc58-bb56-4976-bdff-d87dc56ce56d.png" 
                alt="Fynn"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-sm">Fynn</p>
          </div>
        </div>
      </div>

      {/* Most popular games */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-medium">Most popular games</h3>
          <button className="text-blue-400 text-sm">See all</button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {/* MEET CODY */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 h-24 relative overflow-hidden">
            <div className="absolute right-2 top-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="absolute right-4 top-4 w-6 h-6 bg-yellow-300 rounded-full"></div>
            <div className="absolute right-0 top-0 w-16 h-24 overflow-hidden">
              <img 
                src="/lovable-uploads/ddc7bc58-bb56-4976-bdff-d87dc56ce56d.png" 
                alt="Meet Cody"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white font-bold text-sm">MEET</h4>
            <h4 className="text-white font-bold text-sm">CODY</h4>
            <p className="text-white/80 text-xs mt-1">Most viewed Creator</p>
          </div>

          {/* ZIRK A STREAM */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-4 h-24">
            <h4 className="text-white font-bold text-sm">ZIRK A</h4>
            <h4 className="text-white font-bold text-sm">STREAM</h4>
            <p className="text-white/80 text-xs mt-1">The New Trend</p>
          </div>

          {/* Bottom row */}
          <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-xl p-4 h-24 relative overflow-hidden">
            <div className="absolute right-2 top-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
            <div className="absolute right-0 top-0 w-16 h-24 overflow-hidden">
              <img 
                src="/lovable-uploads/ddc7bc58-bb56-4976-bdff-d87dc56ce56d.png" 
                alt="Game"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white font-bold text-sm">Game</h4>
            <p className="text-white/80 text-xs mt-1">Description</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 h-24">
            <h4 className="text-white font-bold text-sm">ZIRK A</h4>
            <h4 className="text-white font-bold text-sm">EVENT</h4>
            <p className="text-white/80 text-xs mt-1">Most Engage Host</p>
          </div>
        </div>
      </div>

      {/* Crash Games */}
      <div className="px-4 mt-8 pb-24">
        <h3 className="text-white text-lg font-medium mb-4">Crash Games</h3>
        <div className="flex space-x-3 overflow-x-auto">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                <img 
                  src="/lovable-uploads/ddc7bc58-bb56-4976-bdff-d87dc56ce56d.png" 
                  alt={`Crash Game ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-xl border-t border-gray-800">
        <div className="flex items-center justify-around py-3 px-6">
          <button className="flex flex-col items-center space-y-1">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </button>
          
          <button className="flex flex-col items-center space-y-1">
            <Home className="w-6 h-6 text-gray-400" />
          </button>
          
          <button 
            onClick={() => navigate('/search')}
            className="flex flex-col items-center space-y-1"
          >
            <Search className="w-6 h-6 text-gray-400" />
          </button>
          
          <button className="flex flex-col items-center space-y-1">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <User className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
