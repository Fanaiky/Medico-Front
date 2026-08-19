import React, { useState } from 'react';

function Factures() {
  // Liste fictive de factures professionnelles (Montants en Ariary)
  const [factures] = useState([
    { id: 'FAC-2026-001', date: '05/07/2026', echeance: '05/08/2026', montant: 450000, statut: 'Payé' },
    { id: 'FAC-2026-002', date: '28/06/2026', echeance: '28/07/2026', montant: 125000, statut: 'En attente' },
    { id: 'FAC-2026-003', date: '15/05/2026', echeance: '15/06/2026', montant: 890000, statut: 'En retard' },
    { id: 'FAC-2026-004', date: '10/05/2026', echeance: '10/06/2026', montant: 320000, statut: 'Payé' },
  ]);

  const [filtreStatut, setFiltreStatut] = useState('Tous');

  // Filtrage des factures selon le choix de l'utilisateur
  const facturesFiltrees = factures.filter(f => 
    filtreStatut === 'Tous' || f.statut === filtreStatut
  );

  // Fonction de simulation de téléchargement PDF
  const telechargerPDF = (id) => {
    alert(`Téléchargement de la facture ${id} au format PDF lancé...`);
  };

  return (
    <div className="min-h-screen bg-[#F5F9FC] text-[#333333] font-sans antialiased">
      

      {/* ZONE CONTENU */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* EN-TÊTE + BOUTONS FILTRES */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Suivi des Factures & Règlements</h1>
            <p className="text-sm text-gray-500 mt-1">Consultez vos justificatifs comptables et l'état de vos crédits.</p>
          </div>

          {/* Filtres par statut */}
          <div className="flex bg-white p-1 rounded-xl border border-gray-100 shadow-xs gap-1">
            {['Tous', 'Payé', 'En attente', 'En retard'].map((statut) => (
              <button
                key={statut}
                onClick={() => setFiltreStatut(statut)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  filtreStatut === statut
                    ? 'bg-[#0B6E99] text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {statut === 'Tous' ? 'Toutes' : statut}
              </button>
            ))}
          </div>
        </div>

        {/* TABLEAU DES FACTURES */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Référence</th>
                  <th className="py-4 px-6">Date d'émission</th>
                  <th className="py-4 px-6">Échéance</th>
                  <th className="py-4 px-6">Montant Due</th>
                  <th className="py-4 px-6">Statut</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-700">
                {facturesFiltrees.map((facture) => (
                  <tr key={facture.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-900">{facture.id}</td>
                    <td className="py-4 px-6 text-gray-500">{facture.date}</td>
                    <td className="py-4 px-6 text-gray-500">{facture.echeance}</td>
                    <td className="py-4 px-6 font-bold text-gray-900">{facture.montant.toLocaleString()} Ar</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${
                        facture.statut === 'Payé' ? 'bg-green-50 text-green-700' :
                        facture.statut === 'En attente' ? 'bg-amber-50 text-amber-700' :
                        'bg-red-50 text-red-700'
                      }`}>
                        ● {facture.statut}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => telechargerPDF(facture.id)}
                        className="bg-gray-50 border border-gray-200 text-gray-600 hover:text-[#0B6E99] hover:border-[#0B6E99] px-3 py-1.5 rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                      >
                        📥 PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {facturesFiltrees.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">
              Aucune facture ne correspond à ce critère.
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

export default Factures;