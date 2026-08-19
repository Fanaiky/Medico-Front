import React from 'react';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#F5F9FC] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto w-full max-w-md text-center">
        <span className="text-4xl font-bold text-[#0B6E99]">Medico</span>
        <p className="mt-2 text-sm text-gray-500">
          Veuillez vous connecter pour accéder au catalogue et à vos factures
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse Email Professionnelle
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="nom@entreprise.mg"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B6E99] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B6E99] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#0B6E99] focus:ring-[#0B6E99] border-gray-300 rounded-sm"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#0B6E99] hover:text-[#065375]">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-xs text-sm font-semibold text-white bg-[#0B6E99] hover:bg-[#065375] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B6E99] transition-all"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
