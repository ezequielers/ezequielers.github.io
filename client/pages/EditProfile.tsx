
import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-yellow-400 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl transform rotate-12"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
        <div className="absolute bottom-40 left-8 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg transform rotate-45"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12 relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        
        <h1 className="text-white text-lg font-semibold">Edit Profile</h1>
        
        <div className="w-10 h-10"></div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6 relative z-10">
        {/* Profile Images Section */}
        <div className="relative mb-8">
          {/* Main Car Image */}
          <div className="relative w-full h-32 bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden mb-4">
            <img 
              src="/lovable-uploads/0b2e1a74-6de3-4565-a250-4a759549a602.png"
              alt="Profile banner"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Profile Avatar */}
          <div className="absolute -bottom-8 left-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white/30">
              <img 
                src="/lovable-uploads/d88bd055-8f32-41fd-980a-2ef7f2d78078.png"
                alt="Profile avatar"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <Camera className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 pt-4">
          {/* Profile Name */}
          <div>
            <Input
              placeholder="Profile name"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl h-12"
            />
          </div>

          {/* Username */}
          <div>
            <Input
              placeholder="@username"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl h-12"
            />
          </div>

          {/* Bio */}
          <div>
            <Textarea
              placeholder="Bio"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl min-h-[48px] resize-none"
              rows={2}
            />
          </div>

          {/* Age and DOB Row */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Age"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl h-12"
            />
            <Input
              placeholder="DOB"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl h-12"
            />
          </div>

          {/* Email */}
          <div>
            <Input
              placeholder="Email address"
              type="email"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl h-12"
            />
          </div>

          {/* Mobile */}
          <div>
            <Input
              placeholder="Mobile number"
              type="tel"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl h-12"
            />
          </div>

          {/* Change Password */}
          <div>
            <Input
              placeholder="Change password"
              type="password"
              className="bg-black/30 backdrop-blur-sm border-0 text-white placeholder-white/70 rounded-2xl h-12"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-8 mb-8">
          {/* Avatar and Balance */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold">$NAME•$0.00</p>
              <p className="text-white/70 text-sm">MCAP $0K</p>
            </div>
          </div>

          {/* Update Button */}
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold">
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
