// Charger les actualités dans la section news
function loadPiNews() {
  const newsList = document.getElementById("news-list");
  newsList.innerHTML = "";

  const news = [
    { title: "🔥 Pi Hackathon 2025 lancé !", link: "#" },
    { title: "🔄 Mise à jour du Mainnet disponible", link: "#" },
    { title: "🌐 100M de Pionniers connectés", link: "#" }
  ];

  news.forEach(n => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${n.link}" target="_blank">${n.title}</a>`;
    newsList.appendChild(li);
  });
}

// Exécuter le code quand tout est prêt
window.addEventListener("load", function () {
  loadPiNews();

  // Initialiser la carte Leaflet
  const mapElement = document.getElementById("map");
  if (!mapElement) {
    console.error("🛑 Élément #map non trouvé !");
    return;
  }

  const map = L.map("map").setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
  }).addTo(map);

  const projects = [
    { name: "🇹🇳 Pi Tunisie", coords: [33.8869, 9.5375], description: "Communauté active" },
    { name: "🇫🇷 Pi France", coords: [46.2276, 2.2137], description: "Rencontres et événements" },
    { name: "🇺🇸 Pi USA", coords: [37.0902, -95.7129], description: "Écosystème dynamique" },
    { name: "🇨🇲 Pi Cameroun", coords: [7.3697, 12.3547], description: "Énergie des Pionniers" }
  ];

  projects.forEach(p => {
    L.marker(p.coords).addTo(map).bindPopup(`<b>${p.name}</b><br>${p.description}`);
  });

  console.log("✅ Carte affichée avec succès");
});
