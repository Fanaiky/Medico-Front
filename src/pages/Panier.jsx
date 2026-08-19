import React, { useState } from 'react';

function Panier() {
  const [articles, setArticles] = useState([
    { id: 1, nom: 'Crème hydratante', categorie: 'Soin du visage', prix: 25000, quantite: 2, image: '🧴', stockMax: 45 },
    { id: 2, nom: 'Vitamines C pro', categorie: 'Compléments', prix: 18000, quantite: 5, image: '💊', stockMax: 120 },
    { id: 5, nom: 'Écran Solaire 50+', categorie: 'Solaire', prix: 35000, quantite: 1, image: '☀️', stockMax: 80 },
  ]);

  const modifierQuantite = (id, valeur) => {
    setArticles(articles.map(art => {
      if (art.id === id) {
        const nouvelleQte = art.quantite + valeur;

        if (nouvelleQte >= 1 && nouvelleQte <= art.stockMax) {
          return { ...art, quantite: nouvelleQte };
        }
      }
      return art;
    }));
  };

  const supprimerArticle = (id) => {
    setArticles(articles.filter(art => art.id !== id));
  };

  const sousTotal = articles.reduce((acc, art) => acc + (art.prix * art.quantite), 0);
  const tva = Math.round(sousTotal * 0.20); // TVA à 20%
  const total = sousTotal + tva;

  const handleValiderCommande = (e) => {
    e.preventDefault();
    alert("Commande enregistrée avec succès ! Elle est en attente de validation par l'administrateur Medico.");
  };

  return (
    <div className="min-h-screen bg-[#F5F9FC] text-[#333333] font-sans antialiased">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Votre Panier de Commande</h1>

        {articles.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-xs">
            <div className="text-5xl mb-4">🛒</div>
            <p className="text-gray-500 font-medium">Votre panier est actuellement vide.</p>
            <a href="/catalogue" className="mt-4 inline-block bg-[#0B6E99] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#065375] transition-all">
              Parcourir le catalogue
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-4">
              {articles.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="bg-gray-50 h-16 w-16 rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {item.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 leading-tight">{item.nom}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{item.categorie}</p>
                      <p className="text-sm font-medium text-gray-500 sm:hidden mt-1">{item.prix.toLocaleString()} Ar</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => modifierQuantite(item.id, -1)}
                        className="h-8 w-8 bg-gray-100 rounded-lg font-bold flex items-center justify-center hover:bg-gray-200 text-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold text-sm text-gray-800">{item.quantite}</span>
                      <button 
                        onClick={() => modifierQuantite(item.id, 1)}
                        className="h-8 w-8 bg-gray-100 rounded-lg font-bold flex items-center justify-center hover:bg-gray-200 text-gray-600 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right hidden sm:block min-w-[100px]">
                      <p className="text-sm text-gray-400">Prix unitaire</p>
                      <p className="font-medium text-gray-700 text-sm">{item.prix.toLocaleString()} Ar</p>
                    </div>

                    <div className="text-right min-w-[100px]">
                      <p className="text-xs text-gray-400 sm:hidden">Total produit</p>
                      <p className="font-bold text-[#0B6E99] text-base">{(item.prix * item.quantite).toLocaleString()} Ar</p>
                    </div>

                    <button 
                      onClick={() => supprimerArticle(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm p-1"
                      title="Supprimer l'article"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Récapitulatif de la commande</h2>
                
                <div className="space-y-3 pb-4 border-b border-gray-100 text-sm font-medium">
                  <div className="flex justify-between text-gray-500">
                    <span>Sous-total HT</span>
                    <span>{sousTotal.toLocaleString()} Ar</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>TVA (20%)</span>
                    <span>{tva.toLocaleString()} Ar</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Frais de livraison</span>
                    <span className="text-[#27AE60]">Gratuit (Extranet)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 text-gray-900 font-bold text-lg mb-6">
                  <span>Total à payer</span>
                  <span className="text-[#27AE60]">{total.toLocaleString()} Ar</span>
                </div>

                <form onSubmit={handleValiderCommande} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Mode de Paiement</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0B6E99]">
                      <option>Virement Bancaire (Sous 48h)</option>
                      <option>Chèque à la livraison</option>
                      <option>Crédit Professionnel Medico</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#27AE60] text-white py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-[#219653] transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    🚀 Valider et Envoyer la Commande
                  </button>
                </form>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}

export default Panier;
