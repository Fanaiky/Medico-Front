import React, { useState, useEffect, useRef } from 'react';

function ProfilClient() {
  const [nomClient] = useState("Kindinavany");
  
  // État et Ref pour le menu déroulant de la Navbar
  const [menuOuvert, setMenuOuvert] = useState(false);
  const menuRef = useRef(null);

  // État pour savoir si on est en mode édition ou simple lecture
  const [estEnEdition, setEstEnEdition] = useState(false);
  
  // État pour afficher un message de confirmation lors de l'enregistrement
  const [messageSucces, setMessageSucces] = useState(false);

  // Données de l'officine modifiables
  const [officine, setOfficine] = useState({
    nomPharmacien: "Dr. Rija Razafy",
    nomPharmacie: "Pharmacie de l'Ankaratra",
    email: "contact@pharmacieankaratra.mg",
    telephone: "+261 34 00 123 45",
    adresse: "Logement 4, En face du Marché, Antsirabe",
    ville: "Antsirabe",
    statutCompte: "Validé / Partenaire Officiel",
    creditMax: 5000000
  });

  // Gérer les changements dans les inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfficine({
      ...officine,
      [name]: value
    });
  };

  // Soumission du formulaire
  const handleEnregistrer = (e) => {
    e.preventDefault();
    setEstEnEdition(false);
    setMessageSucces(true);
    
    // Cache le message après 3 secondes
    setTimeout(() => {
      setMessageSucces(false);
    }, 3000);
  };

  // Fermer le menu de la navbar si on clique ailleurs
  useEffect(() => {
    const clickExterieur = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOuvert(false);
      }
    };
    document.addEventListener("click", clickExterieur);
    return () => document.removeEventListener("click", clickExterieur);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F9FC] text-[#333333] font-sans antialiased">

      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Alerte de succès éphémère */}
        {messageSucces && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-medium text-sm flex items-center gap-2 shadow-xs transition-all">
            ✅ Les modifications de votre profil ont été enregistrées avec succès.
          </div>
        )}

        <form onSubmit={handleEnregistrer} className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
          
          {/* Bannière supérieure de profil */}
          <div className="bg-gradient-to-r transition-all from-[#0B6E99] to-[#0A5A7E] px-8 py-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl font-bold border border-white/20">
                {officine.nomPharmacien.charAt(0)}
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold">{officine.nomPharmacien}</h1>
                <p className="text-white/80 text-sm mt-1">{officine.nomPharmacie}</p>
                <span className="mt-3 inline-block bg-[#27AE60] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {officine.statutCompte}
                </span>
              </div>
            </div>

            {/* Bouton pour basculer le mode édition */}
            {!estEnEdition && (
              <button
                type="button"
                onClick={() => setEstEnEdition(true)}
                className="bg-white text-[#0B6E99] hover:bg-gray-50 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-xs transition-all"
              >
                ✏️ Modifier le profil
              </button>
            )}
          </div>

          {/* Formulaire des détails du compte client */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* EMAIL */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Adresse Email Pro</label>
              {estEnEdition ? (
                <input
                  type="email"
                  name="email"
                  value={officine.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:outline-none focus:border-[#0B6E99] focus:bg-white transition-all"
                />
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium">
                  {officine.email}
                </div>
              )}
            </div>

            {/* TÉLÉPHONE */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Téléphone</label>
              {estEnEdition ? (
                <input
                  type="text"
                  name="telephone"
                  value={officine.telephone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:outline-none focus:border-[#0B6E99] focus:bg-white transition-all"
                />
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium">
                  {officine.telephone}
                </div>
              )}
            </div>

            {/* ADRESSE DE LIVRAISON */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Adresse de livraison de l'officine</label>
              {estEnEdition ? (
                <input
                  type="text"
                  name="adresse"
                  value={officine.adresse}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:outline-none focus:border-[#0B6E99] focus:bg-white transition-all"
                />
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium">
                  {officine.adresse}
                </div>
              )}
            </div>

            {/* VILLE */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Ville</label>
              {estEnEdition ? (
                <input
                  type="text"
                  name="ville"
                  value={officine.ville}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium focus:outline-none focus:border-[#0B6E99] focus:bg-white transition-all"
                />
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium">
                  {officine.ville}
                </div>
              )}
            </div>

            {/* LIGNE DE CRÉDIT */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Ligne de crédit autorisée</label>
              <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-sm text-green-700 font-bold select-none">
                {officine.creditMax.toLocaleString()} Ar
              </div>
            </div>

            {/* Actions du mode édition */}
            {estEnEdition && (
              <div className="md:col-span-2 flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setEstEnEdition(false)}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B6E99] hover:bg-[#065375] rounded-xl shadow-xs transition-all"
                >
                  💾 Enregistrer les modifications
                </button>
              </div>
            )}

          </div>
        </form>
      </main>
    </div>
  );
}

export default ProfilClient;