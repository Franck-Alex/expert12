const services = {

    btp: {
        title: "BTP (Génie Civil)",

        description:
            "Construction de batiments (résidentiels, commerciaux, industriels), travaux publics, rénovation et suivi technique de chantiers.",

        image:
            "assets/images/services/btp.jpg",

        page:
            "pages/services/btp.html",

        icon:
            "fa-solid fa-helmet-safety"
    },


    metal: {
        title: "Construction métallique",

        description:
            "Conception et montage de charpentes métalliques, couvertures de batiments, hangars industriels et chaudronnerie lourde.",

        image:
            "assets/images/services/metallique.jpg",

        page:
            "pages/services/metal.html",

        icon:
            "fa-solid fa-industry"
    },


    telecom: {
        title: "Télécommunication",

        description:
            "Déploiement d'infrastructures réseaux, pose de fibreoptique, installation de pylones et maintenance des r&seaux de communication.",

        image:
            "assets/images/services/telecom.jpg",

        page:
            "pages/services/telecom.html",

        icon:
            "fa-solid fa-tower-cell"
    },


    electricite: {
        title: "Électricité",

        description:
            "Travaux d'électricité générale, installation de reseaux basse/haute tension, maintenance industrielle et sécurité électrique.",

        image:
            "assets/images/services/electricite.jpg",

        page:
            "pages/services/electricite.html",

        icon:
            "fa-solid fa-bolt"
    },


    hydraulique: {
        title: "hydraulique",

        description:
            "Travaux de forage, adduction d'eau potable (AEP), construction de chateau d'eau et assainissement des eaux usées.",

        image:
            "assets/images/services/hydraulique.jpg",

        page:
            "pages/services/hydraulique.html",

        icon:
            "fa-solid fa-faucet-drip"
    },


    informatique: {
        title: "Informatique",

        description:
            "Integration de systèmes, développement de solutions numériques sur mesure, sécurité informatique et infogérance.",

        image:
            "assets/images/services/informatique.jpg",

        page:
            "pages/services/informatique.html",

        icon:
            "fa-solid fa-screwdriver-wrench"
    },


    solaire: {
        title: "Solaire",

        description:
            "Etude, dimensionnement et indtallation de centrales photovoltaiques, kits solaires pour particuliers et éclairage public autonome.",

        image:
            "assets/images/services/solaire.jpg",

        page:
            "pages/services/solaire.html",

        icon:
            "fa-solid fa-solar-panel"
    }

};


const buttons = document.querySelectorAll(".service-btn");

const image = document.getElementById("service-image");
const title = document.getElementById("service-title");
const description = document.getElementById("service-description");
const icon = document.getElementById("service-icon");
const link = document.getElementById("service-link");


buttons.forEach(button => {

    button.addEventListener("click", function () {

        const serviceName = this.dataset.service;

        const service = services[serviceName];

        if (!service) {
            console.error("Service introuvable :", serviceName);
            return;
        }


        /* Bouton actif */

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");


        /* Modification du contenu */

        title.textContent = service.title;

        description.textContent = service.description;

        image.src = service.image;

        image.alt = service.title;

        icon.className = service.icon;

        link.href = service.page;

    });

});