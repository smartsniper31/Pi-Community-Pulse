function vote(choice) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = `✅ Merci d'avoir voté pour : ${choice}`;
}

// Charger les actualités Pi automatiquement
async function loadPiNews() {
  const container = document.getElementById("news-container");
  try {
    const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://pinews24.com/feed/");
    const data = await response.json();

    const articles = data.items.slice(0, 5); // Prendre les 5 premiers articles
    let html = "<ul>";
    for (let article of articles) {
      html += `<li><a href="${article.link}" target="_blank">${article.title}</a></li>`;
    }
    html += "</ul>";
    container.innerHTML = html;
  } catch (error) {
    container.innerHTML = "❌ Impossible de charger les actualités.";
    console.error(error);
  }
}

// Appeler la fonction dès que la page est chargée
window.onload = function () {
  loadPiNews();
};
// Carte interactive des projets Pi

window.onload = function () {
  loadPiNews();

  // Initialiser la carte Leaflet
  const map = L.map('map').setView([20, 0], 2); // Centré sur la planète

  // Ajouter la couche de fond (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(map);

  // Projets Pi dans le monde (exemples)
  const projects = [
    { name: "Pi Tunisie", coords: [33.8869, 9.5375], description: "Communauté active en Tunisie 🇹🇳" },
    { name: "Pi France", coords: [46.2276, 2.2137], description: "Projets et Meetups 🇫🇷" },
    { name: "Pi USA", coords: [37.0902, -95.7129], description: "Événements communautaires 🇺🇸" },
    { name: "Pi Cameroun", coords: [7.3697, 12.3547], description: "Initiatives locales 🇨🇲" }
  ];

  // Ajouter les marqueurs sur la carte
  projects.forEach(p => {
    L.marker(p.coords).addTo(map)
      .bindPopup(`<b>${p.name}</b><br>${p.description}`);
  });
};
