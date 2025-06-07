// Fonction de chargement des actualités (déjà présente)
function loadPiNews() {
  const newsList = document.getElementById("news-list");
  newsList.innerHTML = "";

  const news = [
    { title: "Lancement du Pi Hackathon 2025", link: "#" },
    { title: "Mise à jour du Mainnet - Nouvelles fonctionnalités", link: "#" },
    { title: "100M de Pionniers actifs dans le monde", link: "#" }
  ];

  news.forEach(n => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${n.link}">${n.title}</a>`;
    newsList.appendChild(li);
  });
}

// Fonction exécutée au chargement de la page
window.onload = function () {
  loadPiNews();

  // Initialiser la carte Leaflet
  const map = L.map('map').setView([20, 0], 2);

  // Fond de carte OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Liste de projets Pi (exemple)
  const projects = [
    { name: "Pi Tunisie", coords: [33.8869, 9.5375], description: "Communauté active 🇹🇳" },
    { name: "Pi France", coords: [46.2276, 2.2137], description: "Meetups et projets 🇫🇷" },
    { name: "Pi USA", coords: [37.0902, -95.7129], description: "Écosystème grandissant 🇺🇸" },
    { name: "Pi Cameroun", coords: [7.3697, 12.3547], description: "Pionniers actifs 🇨🇲" }
  ];

  // Ajouter les marqueurs
  projects.forEach(p => {
    L.marker(p.coords).addTo(map)
      .bindPopup(`<b>${p.name}</b><br>${p.description}`);
  });
};
