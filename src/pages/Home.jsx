import React, { useState } from 'react';

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [recherche, setRecherche] = useState("");

  const categoriesDeTest = [
    { id: 1, label: 'Soin du visage', slug: 'soin-du-visage', icon: '💊' },
    { id: 2, label: 'Bébé', slug: 'bebe', icon: '👶' },
    { id: 3, label: 'Compléments', slug: 'complements', icon: '💪' },
    { id: 4, label: 'Capillaire', slug: 'capillaire', icon: '🧴' },
    { id: 5, label: 'Solaire', slug: 'solaire', icon: '☀️' },
    { id: 6, label: 'Minceur', slug: 'minceur', icon: '⚖️' }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (recherche.trim()) {
      window.location.href = `/catalogue?search=${encodeURIComponent(recherche)}`;
    }
  };

  return (
    <div className="bg-[#F5F9FC] text-[#333333] font-sans antialiased">

      <section className="bg-white border-b border-gray-100 overflow-hidden relative">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0B6E99]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#27AE60]/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#0B6E99]/10 text-[#0B6E99] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0 select-none">
              🌐 Centrale d'Achat Répartiteur • Madagascar
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Le carrefour du <br />
              <span className="bg-gradient-to-r from-[#0B6E99] to-[#27AE60] bg-clip-text text-transparent">
                médicament générique
              </span>
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Accédez instantanément aux catalogues des laboratoires. Passez vos commandes d'officine et suivez vos livraisons en temps réel.
            </p>

            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto lg:mx-0 pt-2">
              <div className="bg-[#F5F9FC] border border-gray-200/80 p-2 rounded-2xl flex items-center shadow-xs focus-within:border-[#0B6E99] focus-within:bg-white focus-within:shadow-md transition-all duration-300">
                <div className="pl-3 text-gray-400 text-xl">🔍</div>
                <input 
                  type="text" 
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                  placeholder="Rechercher un générique, un produit, un labo..." 
                  className="w-full bg-transparent border-none outline-none px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 font-medium"
                />
                <button 
                  type="submit"
                  className="bg-[#0B6E99] hover:bg-[#065375] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-xs transition-colors shrink-0"
                >
                  Rechercher
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-4 text-xs font-semibold text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="text-[#27AE60] text-sm bg-[#27AE60]/10 h-5 w-5 rounded-full flex items-center justify-center">✓</span> Stock Réel Garanti
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#27AE60] text-sm bg-[#27AE60]/10 h-5 w-5 rounded-full flex items-center justify-center">✓</span> Livraison Express Antananarivo
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#27AE60] text-sm bg-[#27AE60]/10 h-5 w-5 rounded-full flex items-center justify-center">✓</span> Tarifs Grossistes
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 w-full max-w-[420px] mx-auto">
            
            <div className="bg-[#F5F9FC] border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-shadow duration-300">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Dernière Commande</p>
                  <h4 className="font-bold text-gray-800 text-sm mt-0.5">CMD-2026-0892</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs flex flex-col justify-between h-24">
                <span className="text-xl">📦</span>
                <div>
                  <div className="text-2xl font-black text-gray-800 leading-none">1 420</div>
                  <p className="text-xs font-semibold text-gray-400 mt-1">Génériques dispos</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs flex flex-col justify-between h-24">
                <span className="text-xl">📄</span>
                <div>
                  <div className="text-2xl font-black text-gray-800 leading-none">02</div>
                  <p className="text-xs font-semibold text-gray-400 mt-1">Factures à régler</p>
                </div>
              </div>
            </div>

            <div className="bg-[#27AE60]/5 border border-[#27AE60]/10 rounded-2xl p-4 flex items-center gap-3">
              <span className="text-xl select-none">🔔</span>
              <p className="text-xs text-gray-600 font-medium leading-normal">
                <span className="font-bold text-[#27AE60]">Rappel Pharmacie :</span> Pensez à renouveler vos stocks d'antibiotiques avant la fin de semaine.
              </p>
            </div>

          </div>

        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Feuilleter par catégories</h2>
              <p className="text-sm text-gray-500">Trouvez rapidement les produits adaptés à vos besoins officinaux.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categoriesDeTest.map((cat) => (
              <a 
                key={cat.id} 
                href={`/catalogue?categorie=${cat.slug}`}
                className="group bg-white p-5 rounded-2xl border border-gray-100 text-center shadow-2xs hover:shadow-lg hover:border-[#0B6E99]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[120px]"
              >
                
                <div className="text-3xl mb-3 p-3 bg-gray-50 rounded-xl group-hover:bg-[#0B6E99]/10 group-hover:scale-110 transition-all duration-300">
                  {cat.icon}
                </div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-[#0B6E99] transition-colors line-clamp-1">
                  {cat.label}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Produits populaires</h2>
            <span className="bg-[#0B6E99]/10 text-[#0B6E99] px-3 py-1 rounded-full text-xs font-bold">Panier : {cartCount} art.</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between">
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">Promo</span>
              <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center text-4xl select-none">🧴</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Crème hydratante</h3>
                <div className="text-[#27AE60] font-bold text-xl mt-1 mb-4">25 000 Ar</div>
              </div>
              <button onClick={addToCart} className="w-full bg-[#0B6E99] text-white py-2.5 rounded-lg font-medium hover:bg-[#065375] transition-colors">Ajouter au panier</button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center text-4xl select-none">💪</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Vitamines</h3>
                <div className="text-[#27AE60] font-bold text-xl mt-1 mb-4">18 000 Ar</div>
              </div>
              <button onClick={addToCart} className="w-full bg-[#0B6E99] text-white py-2.5 rounded-lg font-medium hover:bg-[#065375] transition-colors">Ajouter au panier</button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between">
              <span className="absolute top-3 left-3 bg-[#0B6E99] text-white text-xs font-bold px-2 py-1 rounded-md">Nouveau</span>
              <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center text-4xl select-none">🧼</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Gel nettoyant</h3>
                <div className="text-[#27AE60] font-bold text-xl mt-1 mb-4">15 000 Ar</div>
              </div>
              <button onClick={addToCart} className="w-full bg-[#0B6E99] text-white py-2.5 rounded-lg font-medium hover:bg-[#065375] transition-colors">Ajouter au panier</button>
            </div>

          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-[#0B6E99] to-[#27AE60] text-white p-8 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span className="bg-white/20 text-white font-bold px-3 py-1 rounded-full text-sm">🔥 Jusqu'à -20%</span>
              <h3 className="text-2xl font-bold mt-2">Profitez des meilleures offres sur nos produits sélectionnés.</h3>
            </div>
            <a href="/catalogue" className="bg-white text-[#0B6E99] px-6 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shrink-0 inline-block">Découvrir l'offre</a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Livraison rapide', icon: '🚚' },
              { title: 'Paiement sécurisé', icon: '🔒' },
              { title: 'Produits certifiés', icon: '💊' },
              { title: 'Support client', icon: '📞' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 text-center shadow-xs">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Contactez-nous</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nom" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0B6E99] focus:bg-white" />
              <input type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0B6E99] focus:bg-white" />
              <textarea placeholder="Message" rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0B6E99] focus:bg-white"></textarea>
              <button className="bg-[#0B6E99] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#065375] transition-colors">Envoyer</button>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-4 bg-[#F5F9FC] p-6 rounded-xl border border-gray-100">
            <h4 className="font-bold text-lg text-[#0B6E99]">Nos Coordonnées</h4>
            <p className="text-sm text-gray-600">📞 <span className="font-medium ml-2">Téléphone :</span> 034 00 000 00</p>
            <p className="text-sm text-gray-600">✉️ <span className="font-medium ml-2">Email :</span> contact@medico.mg</p>
            <p className="text-sm text-gray-600">📍 <span className="font-medium ml-2">Adresse :</span> Antananarivo</p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-6 mt-12 text-center text-sm text-gray-500">
        <p>© 2026 Medico - Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Home;