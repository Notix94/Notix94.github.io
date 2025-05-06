const btnVeille = document.querySelector(".btn-veille");
const navBar = document.querySelector(".nav-bar");
const secAccueil = document.querySelector("#accueil");
const corpMain = document.querySelector(".corpMain");
const accLi = document.querySelector(".acc_li");
const compLi = document.querySelector(".comp_li");
const projLi = document.querySelector(".proj_li");
const contLi = document.querySelector(".cont_li");
const btnStg = document.querySelector(".btn-stages");
let divVeille;
let divStage;
let divProjet;
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio chargé !");
  new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  });
});
function addVeille() {
  divVeille = document.createElement("div");
  divVeille.innerHTML = `
    <h2>Ma Veille Technologique</h2>
    <h3>L'imagerie Médical avec l'IA</h3>
    <p class="text-base leading-relaxed p-4 md:p-6 max-w-2xl mx-auto">
      L’intelligence artificielle transforme <strong>l’imagerie médicale</strong> en améliorant la détection précoce des maladies, comme les cancers ou les anomalies cardiaques. 
      Grâce aux algorithmes d’apprentissage profond, les systèmes peuvent analyser des milliers d’images en quelques secondes et assister les professionnels de santé dans leur diagnostic.
    </p>
    <h3><strong>Outils</strong></h3>

    <div id="links_Tools" class="flex justify-center space-x-8 mx-auto rounded text-center mb-6"> <!-- Ajustement de l'espace entre les liens -->
      <a href="https://www.google.fr/alerts" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
        <img src="img/g-Alert.png" class="w-[100px] h-auto mb-2">
        <span>Google Alerts</span>
      </a>
      <a href="https://feedly.com/" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
        <img src="img/Feedly-logo.png" class="w-[100px] h-auto mb-2">
        <span>Feedly</span>
      </a>
    </div>
  <div class="flex justify-center items-center w-full md:w-[600px] mx-auto mb-6"> <!-- Ajustement de l'espace autour de la vidéo -->
      <video class="w-full h-auto rounded-lg border-[1px]" autoplay loop muted>
        <source src="file/IM_V.mp4" type="video/mp4">
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>

    <a href="file/S_V_ImagerieM_IA.pdf" class="flex justify-center p-4 border-[1px] rounded w-max mx-auto hover:text-stone-950 hover:bg-white mt-6"><strong>Synthèse Veille</strong></a> <!-- Ajustement de l'espace au-dessus du lien -->

          <h2 class="p-6">Infographies && Articles</h2>

          <!-- Carrousel Swiper -->
          <div class="swiper-container">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-medical-imaging-market" target="_blank">
                    <img class="veille-image"src="img/ai-medical-imaging-market.png" alt="Image 1" />
                    <h2>InfoGraphies 1 : Marché de l'IA en imagerie</h2>
                      <p>
                      Étude des perspectives économiques de l'intelligence artificielle appliquée à l'imagerie médicale selon Grand View Research.
                      </p>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a href="https://www.thema-radiologie.fr/actualites/3839/un-modele-d-ia-peut-predire-le-cancer-du-sein-a-cinq-ans.html" target="_blank">
                    <img class="lazy-image" src="img/cancer_seins_img.webp" alt="Image 1" />
                    <h2>Article 1 : Détection précoce du cancer</h2>
                      <p>
                      Exploration d’un modèle d’IA capable de prédire un cancer du sein jusqu’à cinq ans à l’avance, selon une étude relayée par Thema Radiologie.
                      </p>
                </div>

                <div class="swiper-slide">
                  <a href="https://www.thema-radiologie.fr/actualites/3953/l-ia-vs-le-radiologue-dans-l-interpretation-de-la-radiographie-pulmonaire.html" target="_blank">
                    <img class="veille-image" src="img/IAvsRAD.jpg" alt="Image 1" />
                    <h2>Article 2 : Radiologie Pulmonaire</h2>
                      <p>
                      L'IA vs le radiologue dans l'interprétation de la radiographie pulmonaire                 </p>
                </div>

              </div>
            </div>
            <!-- Boutons de navigation -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        
      </div>
  `;
  divVeille.classList.add("veilleTech");
  navBar.insertAdjacentElement("afterend", divVeille);
  const swiperVeille = new Swiper(".swiper-container .swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-container .swiper-button-next",
      prevEl: ".swiper-container .swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
  });
}
function addStage() {
  divStage = document.createElement("div");
  divStage.innerHTML = `<section id="stages" class=" text-white py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16">Mes Stages</h2>

      <!-- STAGE EPSM -->
      <div class="flex flex-col md:flex-row items-center bg-neutral-800 rounded-xl shadow-lg p-6 mb-10">
        <!-- Logo à gauche -->
        <div class="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
          <img src="img/EPSM.png" alt="EPSM Quimper" class="w-24 h-auto rounded shadow-md">
        </div>

        <!-- Texte au centre -->
        <div class="w-full md:w-2/4 px-4">
          <h3 class="text-2xl font-semibold mb-2">EPSM de Quimper</h3>
          <p class="text-sm text-gray-400 mb-3">Informatique – Avril 2024</p>
          <ul class="list-disc list-inside text-base leading-relaxed space-y-1">
            <li>Configuration de postes informatiques</li>
            <li>Création de scripts personnalisés</li>
            <li>Utilisation de GLPI pour la gestion des tickets</li>
            <li>Installation d’un système SSO</li>
          </ul>
        </div>

        <!-- Lien PDF à droite -->
        <div class="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
          <a href="file/S_EPSM.pdf" target="_blank" class="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-neutral-300 transition">
            Synthèse PDF
          </a>
        </div>
      </div>

      <!-- STAGE CHAPTAL -->
      <div class="flex flex-col md:flex-row items-center bg-neutral-800 rounded-xl shadow-lg p-6">
        <!-- Logo à gauche -->
        <div class="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
          <img src="img/rmLogo.png" alt="Logo Friperie" class="w-24 h-auto rounded shadow-md">
        </div>

        <!-- Texte au centre -->
        <div class="w-full md:w-2/4 px-4">
          <h3 class="text-2xl font-semibold mb-2">Lycée Chaptal – Quimper</h3>
          <p class="text-sm text-gray-400 mb-3">Développement Web – Juin 2023</p>
          <ul class="list-disc list-inside text-base leading-relaxed space-y-1">
            <li>Création d’un site e-commerce avec PrestaShop</li>
            <li>Ajout de produits, personnalisation des modules</li>
            <li>Projet final : site de friperie en ligne</li>
            <li>Travail en autonomie et en collaboration</li>
          </ul>
        </div>

        <!-- Lien PDF à droite -->
        <div class="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
          <a href="file/S_RM.pdf" target="_blank" class="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-neutral-300 transition">
            Synthèse PDF
          </a>
        </div>
      </div>
    </div>
  </section>
  `;
  divStage.classList.add("stage");
  navBar.insertAdjacentElement("afterend", divStage);
  const swiperVeille = new Swiper(".swiper-container .swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-container .swiper-button-next",
      prevEl: ".swiper-container .swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
  });
}
function addProjet() {
  divProjet = document.createElement("div");
  divProjet.innerHTML = `
    <section id="projets" class="text-white py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">Mes Projets</h2>

        <!-- PROJET 1 -->
        <div class="flex flex-col md:flex-row items-center bg-neutral-800 rounded-xl shadow-lg p-6 mb-10">
          <!-- Image Projet -->
          <div class="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
            <img src="img/java_logo.png" alt="Projet Portfolio" class="w-24 h-auto rounded shadow-md">
          </div>

          <!-- Description Projet -->
          <div class="w-full md:w-2/4 px-4">
            <h3 class="text-2xl font-semibold mb-2">GestUtil</h3>
            <p class="text-sm text-gray-400 mb-3">Technologies : Java</p>
            <ul class="list-disc list-inside text-base leading-relaxed space-y-1">
              <li>Interface d'authentification</li>
              <li>Interaction avec la base de données</li>
              <li>gestion d'utilisateur (Ajouter,Modifier et Rechercher)</li>
            </ul>
          </div>

          <!-- Lien GitHub ou Démo -->
          <div class="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
            <a href="https://github.com/Notix94/GestUtil" target="_blank" class="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-neutral-300 transition">
              Voir le code
            </a>
          </div>
        </div>

        <!-- PROJET 2 -->
        <div class="flex flex-col md:flex-row items-center bg-neutral-800 rounded-xl shadow-lg p-6 mb-10">
          <!-- Image Projet -->
          <div class="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
            <img src="img/gsb_logo.png" alt="Projet React App" class="w-24 h-auto rounded shadow-md">
          </div>

          <!-- Description Projet -->
          <div class="w-full md:w-2/4 px-4">
            <h3 class="text-2xl font-semibold mb-2">Application AppliFrais</h3>
            <p class="text-sm text-gray-400 mb-3">Technologies : PHP, CodeIgniter, HTML</p>
            <ul class="list-disc list-inside text-base leading-relaxed space-y-1">
                <li>Gestion des fiches de frais des visiteurs pour remboursement auprès des comptables</li>
                <li>Recherche et affichage de données en temps réel</li>
                <li>Composants dynamiques et gestion d’état</li>
            </ul>
          </div>

          <!-- Lien GitHub ou Démo -->
          <div class="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
            <a href="https://github.com/Notix94/AppliFrais" target="_blank" class="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-neutral-300 transition">
              Voir le code
            </a>
          </div>
        </div>

        <!-- PROJET 3&4 -->
        <div class="flex flex-col md:flex-row items-center bg-neutral-800 rounded-xl shadow-lg p-6">
          <!-- Image Projet -->
          <div class="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
            <img src="img/kayak_logo.png" alt="Projet React App" class="w-24 h-auto rounded shadow-md">
          </div>

          <!-- Description Projet -->
          <div class="w-full md:w-2/4 px-4">
            <h3 class="text-2xl font-semibold mb-2">Kayak mor et LaFleur</h3>
            <p class="text-sm text-gray-400 mb-3">Technologies : PHP, CSS, HTML,  Wordpress</p>
            <ul class="list-disc list-inside text-base leading-relaxed space-y-1">
                <li>WordPress de Kayak</li>
                <li>Site Lafleur en PHP intégrant une mini base de données pour afficher des types de fleurs dans une catégorie avec leur prix, type, etc.</li>

            </ul>
          </div>

          <!-- Lien GitHub ou Démo -->
          <div class="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
            <a href="https://github.com/Notix94/Notix94.github.io" target="_blank" class="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-neutral-300 transition">
              Voir les Projets
            </a>
          </div>
        </div>

      </div>
    </section>
    `;
  divProjet.classList.add("projet");
  navBar.insertAdjacentElement("afterend", divProjet);
}
const projBtn = document.querySelector(".btn-projets");

projBtn.addEventListener("click", () => showSection(addProjet));
btnVeille.addEventListener("click", () => showSection(addVeille));
btnStg.addEventListener("click", () => showSection(addStage));

function cleanSections() {
  if (divVeille) {
    divVeille.remove();
    divVeille = null;
  }
  if (divStage) {
    divStage.remove();
    divStage = null;
  }
  if (divProjet) {
    divProjet.remove();
    divProjet = null;
  }
  corpMain.style.display = "block";
  corpMain.classList.remove("invisible");
}
accLi.addEventListener("click", () => {
  cleanSections();
});

function showSection(callback) {
  cleanSections();
  corpMain.style.display = "none";
  corpMain.classList.add("invisible");
  callback();
}
