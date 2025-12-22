import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [selection, setSelection] = useState('new');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f4f7fe] relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
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

      <div className="z-10 w-full max-w-lg px-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="text-[#5b45e0] font-bold text-2xl flex items-center">
             <span className="mr-1 text-3xl">∽</span> coingate
          </div>
        </div>

        {/* Card */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-xl font-semibold text-gray-800 mb-6">Create Business Account</h1>
          
          <div className="space-y-4">
            {/* Setup New Business Option */}
            <label 
              className={`block p-5 rounded-lg border-2 cursor-pointer transition-all ${
                selection === 'new' ? 'border-[#5b45e0] bg-indigo-50/30' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <input 
                  type="radio" 
                  name="accountType" 
                  className="mt-1 w-4 h-4 text-[#5b45e0] focus:ring-[#5b45e0]" 
                  checked={selection === 'new'}
                  onChange={() => setSelection('new')}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">Setup a new business</h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Accept crypto payments, manage payouts, exchange currencies, and handle billing.
                  </p>
                </div>
              </div>
            </label>

            {/* Join Existing Business Option */}
            <label 
              className={`block p-5 rounded-lg border-2 cursor-pointer transition-all ${
                selection === 'join' ? 'border-[#5b45e0] bg-indigo-50/30' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <input 
                  type="radio" 
                  name="accountType" 
                  className="mt-1 w-4 h-4 text-[#5b45e0] focus:ring-[#5b45e0]" 
                  checked={selection === 'join'}
                  onChange={() => setSelection('join')}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">Join an existing business</h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Invited users to access a business already registered on CoinGate.
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* Warning Message */}
          <p className="mt-8 text-xs text-gray-400 italic">
            *We currently do not support personal or individual traded accounts.
          </p>

          {/* Footer Link */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#5b45e0] font-medium hover:underline">Log in!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;