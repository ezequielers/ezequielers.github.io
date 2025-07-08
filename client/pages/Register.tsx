import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Paperclip } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Simulate registration success and navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
      
      {/* Register container */}
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-yellow-400 text-2xl mr-2">⭐</span>
              <span className="text-white text-xl font-bold">starz</span>
            </div>
            <h1 className="text-purple-400 text-lg font-medium mb-2">
              Be Inspired by the Unexpected
            </h1>
            <p className="text-gray-400 text-sm">
              Play responsibly, platform for over 18s only
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Full Name Input */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Oliver Bennett"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-300 rounded-xl h-12 px-4 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 rounded-xl h-12 px-4 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 rounded-xl h-12 px-4 pr-12 focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300"
              >
                <Eye size={20} />
              </button>
            </div>

            {/* CPF Input */}
            <div className="relative">
              <Input
                type="text"
                placeholder="CPF document"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 rounded-xl h-12 px-4 pr-12 focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300"
              >
                <Paperclip size={20} />
              </button>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-center space-x-3 mt-6">
              <Checkbox
                id="privacy"
                checked={acceptPrivacy}
                onCheckedChange={(checked) => setAcceptPrivacy(checked === true)}
                className="border-gray-600 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
              />
              <label htmlFor="privacy" className="text-blue-400 cursor-pointer text-sm">
                Privacy Policy
              </label>
            </div>

            {/* Sign Up Button */}
            <Button 
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl h-12 mt-6"
            >
              Sign Up
            </Button>

            {/* Sign in link */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?{" "}
              <button 
                onClick={() => navigate('/login')}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
