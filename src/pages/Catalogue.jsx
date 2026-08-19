import React, { useState } from 'react';

const PRODUITS_MOCK = [
  { id: 1, nom: 'Paracétamol', laboratoire: 'Sandoz', dosage: '500 mg', forme: 'Comprimé', boite: 'Boîte de 30', prix: 12000, stock: 150, categorie: 'soin-du-visage', image: '💊', promo: true },
  { id: 2, nom: 'Amoxicilline', laboratoire: 'Sanofi', dosage: '1 g', forme: 'Gélule', boite: 'Boîte de 12', prix: 24000, stock: 85, categorie: 'soin-du-visage', nouveau: true },
  { id: 3, nom: 'Sirop Paracétamol Enfants', laboratoire: 'Biogaran', dosage: '2.4 %', forme: 'Sirop', boite: 'Flacon 100ml', prix: 15000, stock: 40, categorie: 'bebe' },
  { id: 4, nom: 'Vitamine C Liposomale', laboratoire: 'Arkopharma', dosage: '1000 mg', forme: 'Comprimé', boite: 'Boîte de 20', prix: 32000, stock: 200, categorie: 'complements' },
  { id: 5, nom: 'Shampooing Traitant Kératine', laboratoire: 'Ducray', dosage: 'Ph neutre', forme: 'Lotion', boite: 'Flacon 200ml', prix: 45000, stock: 0, categorie: 'capillaire' }, // Rupture de stock
  { id: 6, nom: 'Écran Solaire SPF 50+', laboratoire: 'La Roche-Posay', dosage: 'UVA/UVB', forme: 'Crème', boite: 'Tube 50ml', prix: 65000, stock: 12, categorie: 'solaire', promo: true }
];

const CATEGORIES = [
  { slug: 'tous', label: '🗂️ Tous les produits' },
  { slug: 'soin-du-visage', label: '💊 Médicaments / Soins' },
  { slug: 'bebe', label: '👶 Espace Bébé' },
  { slug: 'complements', label: '💪 Compléments' },
  { slug: 'capillaire', label: '🧴 Capillaire' },
  { slug: 'solaire', label: '☀️ Solaire' },
  { slug: 'minceur', label: '⚖️ Minceur' }
];

function Catalogue() {
  const queryParams = new URLSearchParams(window.location.search);
  const categorieInitiale = queryParams.get('categorie') || 'tous';

  const [categorieFiltre, setCategorieFiltre] = useState(categorieInitiale);
  const [recherche, setRecherche] = useState(queryParams.get('search') || "");
  const [quantites, setQuantites] = useState({}); // Stocke les quantités saisies par produit (ex: { 1: 5, 2: 12 })

  const ajusterQuantite = (id, delta, maxStock) => {
    const qteActuelle = quantites[id] || 1;
    const nouvelleQte = Math.max(1, Math.min(maxStock, qteActuelle + delta));
    setQuantites({ ...quantites, [id]: nouvelleQte });
  };

  const handleSaisieQuantite = (id, valeur, maxStock) => {
    const numValue = parseInt(valeur, 10);
    if (isNaN(numValue) || numValue < 1) {
      setQuantites({ ...quantites, [id]: 1 });
    } else {
      setQuantites({ ...quantites, [id]: Math.min(maxStock, numValue) });
    }
  };

  const produitsFiltres = PRODUITS_MOCK.filter(produit => {
    const correspondCategorie = categorieFiltre === 'tous' || produit.categorie === categorieFiltre;
    const correspondRecherche = produit.nom.toLowerCase().includes(recherche.toLowerCase()) || 
                                produit.laboratoire.toLowerCase().includes(recherche.toLowerCase());
    return correspondCategorie && correspondRecherche;
  });

  const handleAjouterAuPanier = (produit) => {
    const qte = quantites[produit.id] || 1;
    alert(`Ajouté au panier : ${qte}x ${produit.nom} (${produit.laboratoire})`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Catalogue des produits</h1>
        <p className="text-gray-500 text-sm mt-1">Commandez vos stocks directement auprès de la centrale Medico.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <aside className="lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs space-y-6 sticky top-20">
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Recherche rapide</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 flex items-center focus-within:border-[#0B6E99] focus-within:bg-white transition-all">
              <span className="text-gray-400 mr-2">🔍</span>
              <input 
                type="text" 
                placeholder="Ex: Paracétamol, Sanofi..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="bg-transparent text-sm w-full focus:outline-none font-medium text-gray-700"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Filtrer par rayons</h3>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setCategorieFiltre(cat.slug)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all flex justify-between items-center
                    ${categorieFiltre === cat.slug 
                      ? 'bg-[#0B6E99]/10 text-[#0B6E99]' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <span>{cat.label}</span>
                  {categorieFiltre === cat.slug && <span className="h-2 w-2 rounded-full bg-[#0B6E99]"></span>}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9">
          
          {produitsFiltres.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
              <div className="text-4xl mb-3">📦</div>
              <p className="font-semibold text-gray-600 text-base">Aucun produit ne correspond à votre recherche.</p>
              <button 
                onClick={() => { setCategorieFiltre('tous'); setRecherche(''); }}
                className="text-[#0B6E99] font-bold text-sm mt-2 hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {produitsFiltres.map((produit) => {
                const enRupture = produit.stock === 0;
                const qteChoisie = quantites[produit.id] || 1;

                return (
                  <div 
                    key={produit.id} 
                    className={`bg-white rounded-2xl border p-5 shadow-2xs flex flex-col justify-between transition-all relative group hover:shadow-md
                      ${enRupture ? 'border-gray-100 opacity-65' : 'border-gray-100 hover:border-gray-200'}`}
                  >

                    <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                      {produit.promo && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">Promo</span>}
                      {produit.nouveau && <span className="bg-[#0B6E99] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">Nouveau</span>}
                    </div>

                    <div>
                      <div className="bg-gray-50 h-36 rounded-xl mb-4 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300 select-none">
                        {produit.image || '📦'}
                      </div>
                      
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex justify-between">
                        <span>{produit.laboratoire}</span>
                        <span className="text-gray-500 font-medium">{produit.forme}</span>
                      </div>
                      
                      <h3 className="font-bold text-gray-800 text-lg mt-0.5 leading-tight group-hover:text-[#0B6E99] transition-colors">
                        {produit.nom} <span className="text-sm font-medium text-gray-500">({produit.dosage})</span>
                      </h3>
                      
                      <p className="text-xs text-gray-400 mt-1">{produit.boite}</p>
                    </div>

                    <div className="mt-5 space-y-4">
                      
                      <div className="flex justify-between items-baseline">
                        <div className="text-xl font-extrabold text-[#27AE60]">{produit.prix.toLocaleString()} Ar</div>
                        <div className="text-xs font-semibold">
                          {enRupture ? (
                            <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded-md">En rupture</span>
                          ) : (
                            <span className="text-gray-400">Stock : <span className="text-gray-700">{produit.stock} bte(s)</span></span>
                          )}
                        </div>
                      </div>

                      {!enRupture && (
                        <div className="space-y-2">
                          <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden h-10">
                            <button 
                              type="button"
                              onClick={() => ajusterQuantite(produit.id, -1, produit.stock)}
                              className="w-10 h-full font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                            >

                            </button>
                            <input 
                              type="text"
                              value={qteChoisie}
                              onChange={(e) => handleSaisieQuantite(produit.id, e.target.value, produit.stock)}
                              className="w-full text-center bg-transparent text-sm font-bold text-gray-700 focus:outline-none"
                            />
                            <button 
                              type="button"
                              onClick={() => ajusterQuantite(produit.id, 1, produit.stock)}
                              className="w-10 h-full font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                              +
                            </button>
                          </div>

                          <button 
                            onClick={() => handleAjouterAuPanier(produit)}
                            className="w-full bg-[#0B6E99] hover:bg-[#065375] text-white py-2.5 rounded-xl font-bold text-sm shadow-2xs transition-colors"
                          >
                            Ajouter au panier
                          </button>
                        </div>
                      )}

                      {enRupture && (
                        <button 
                          disabled
                          className="w-full bg-gray-100 text-gray-400 py-2.5 rounded-xl font-semibold text-sm cursor-not-allowed text-center"
                        >
                          Commande indisponible
                        </button>
                      )}

                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default Catalogue;
