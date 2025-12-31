
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react'; // Example icon library

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f4f7fe] relative overflow-hidden font-sans">
      {/* Background Subtle Wave Pattern (Simplified) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="#5b45e0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Login Card */}
        <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="flex items-center gap-2 mb-8">
            {/*  Logo Placeholder */}
            <div className="text-[#5b45e0] font-bold text-2xl flex items-center">
              <span className="mr-1 text-3xl">∽</span> FinPE
            </div>
          </div>

          <h1 className="text-xl font-semibold text-gray-800 mb-8">Login to your account</h1>

          <div className="space-y-4">
            {/* Google Button */}
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 shadow-sm rounded-lg hover:bg-gray-50 transition-colors">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>

            {/* Apple Button */}
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 shadow-sm rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <span className="text-sm font-medium text-gray-700">Continue with Apple</span>
            </button>

            {/* Email Button */}
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 shadow-sm rounded-lg bg-white hover:bg-indigo-50 transition-colors">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Continue with Email</span>
            </button>
          </div>

          <p className="mt-8 text-xs text-gray-500 leading-relaxed">
            By logging in, you confirm that you have read our{' '}
            <a href="#" className="text-[#5b45e0] hover:underline">Privacy Policy</a> and agree to FinPE's{' '}
            <a href="#" className="text-[#5b45e0] hover:underline">Terms of Service</a>.
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#5b45e0] font-medium hover:underline">Sign Up!</Link>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="hidden md:block w-1/2 relative h-[500px]">
          <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/group-of-friends-jumping-and-celebrating-11019623-8869711.png" 
            alt="Celebrating people"
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;