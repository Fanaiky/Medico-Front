import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const [nomClient] = useState("Kindinavany");
  const [menuOuvert, setMenuOuvert] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Permet de savoir sur quelle page on se trouve

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOuvert(!menuOuvert);
  };

  // Fermer le menu si on clique n'importe où ailleurs
  useEffect(() => {
    const clickExterieur = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOuvert(false);
      }
    };
    document.addEventListener("click", clickExterieur);
    return () => document.removeEventListener("click", clickExterieur);
  }, []);

  // Fermer automatiquement le menu déroulant quand on change de page
  useEffect(() => {
    setMenuOuvert(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F5F9FC] text-[#333333] font-sans antialiased">
      
      {/* L'UNIQUE HEADER DE TOUTE L'APPLICATION */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo Medico cliquable vers l'accueil */}
            <a href="/" className="flex items-center gap-2 group cursor-pointer select-none">
              <span className="text-2xl font-bold text-[#0B6E99] group-hover:opacity-90 transition-opacity">Medico</span>
              <span className="text-xs bg-[#27AE60] text-white px-2 py-0.5 rounded-full font-medium">Extranet</span>
            </a>
            
            {/* Liens de navigation */}
            <nav className="hidden md:flex items-center gap-6 font-medium text-sm text-gray-600">
              <a href="/" className={`transition-colors ${location.pathname === '/' ? 'text-[#0B6E99] font-semibold' : 'hover:text-[#0B6E99]'}`}>Accueil</a>
              <a href="/catalogue" className={`transition-colors ${location.pathname === '/catalogue' ? 'text-[#0B6E99] font-semibold' : 'hover:text-[#0B6E99]'}`}>Catalogue</a>
              <a href="/panier" className={`transition-colors ${location.pathname === '/panier' ? 'text-[#0B6E99] font-semibold' : 'hover:text-[#0B6E99]'}`}>Mon Panier</a>
              <a href="/factures" className={`transition-colors ${location.pathname === '/factures' ? 'text-[#0B6E99] font-semibold' : 'hover:text-[#0B6E99]'}`}>Factures</a>
            </nav>

            <div ref={menuRef} className="relative z-50">
              <div 
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-3 py-1.5 border rounded-xl cursor-pointer select-none transition-all duration-200
                  ${menuOuvert 
                    ? 'border-[#0B6E99] bg-[#0B6E99]/5 shadow-xs' 
                    : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-xs'
                  }`}
              >
                <span className="text-sm font-medium text-gray-700">{nomClient}</span>
                <div className={`h-8 w-8 rounded-full text-white flex items-center justify-center font-bold text-sm transition-all duration-200 ${menuOuvert ? 'bg-[#065375]' : 'bg-[#0B6E99]'}`}>
                  {nomClient.charAt(0)}
                </div>
              </div>

              {menuOuvert && (
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 transition-all"
                >
                  <div className="px-4 py-1.5 border-b border-gray-50 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Mon Espace
                  </div>
                  <a 
                    href="/profil" 
                    className={`block px-4 py-2.5 text-sm font-medium transition-all ${location.pathname === '/profil' ? 'text-[#0B6E99] bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0B6E99]'}`}
                  >
                    👤 Mon Profil
                  </a>
                  <a 
                    href="/login" 
                    className="block px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-all border-t border-gray-50"
                  >
                    🚪 Déconnexion
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>
      <Outlet />

    </div>
  );
}

export default Layout;