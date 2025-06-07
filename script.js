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
