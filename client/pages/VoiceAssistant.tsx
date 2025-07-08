
import { ArrowLeft, MoreHorizontal, MessageCircle, Mic, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VoiceAssistant = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-black text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex-1 text-center">
          <p className="text-white text-base font-medium">Sara is listening...</p>
        </div>
        
        <button className="w-10 h-10 flex items-center justify-center">
          <MoreHorizontal className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Voice Visualization */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="relative w-64 h-64">
          {/* Outer animated ring */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-4 rounded-full border border-purple-400/40"></div>
          
          {/* Inner glowing orb */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500/60 via-blue-500/40 to-purple-600/60 shadow-lg">
            {/* Inner dots pattern */}
            <div className="absolute inset-2 rounded-full bg-black/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/30 to-blue-400/30 flex items-center justify-center">
                {/* Dot pattern */}
                <div className="grid grid-cols-8 gap-1 opacity-60">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 h-1 bg-purple-300/80 rounded-full"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Outer glow effect */}
          <div className="absolute -inset-4 rounded-full bg-purple-500/10 blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Message */}
      <div className="px-6 pb-8">
        <div className="text-left">
          <p className="text-white text-lg font-medium mb-1">Hi Sara, I want to create a new email</p>
          <p className="text-white text-lg font-medium">
            template with <span className="text-gray-400">existing design</span>
          </p>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-center space-x-8 pb-8">
        {/* Message Button */}
        <button className="w-14 h-14 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
        
        {/* Mic Button - Active */}
        <button className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
          <Mic className="w-7 h-7 text-white" />
        </button>
        
        {/* Close Button */}
        <button className="w-14 h-14 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm">
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default VoiceAssistant;
