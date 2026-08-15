const services = {

    btp: {
        title: "BTP",

        description:
            "Nous réalisons des travaux de construction adaptés aux besoins de nos clients, avec une attention particulière portée à la qualité et à la durabilité.",

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
            "Nous concevons et réalisons des structures métalliques robustes et adaptées aux projets industriels, commerciaux et résidentiels.",

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
            "Nous intervenons dans l'installation et la réalisation d'infrastructures de télécommunication adaptées aux besoins des entreprises.",

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
            "Nous réalisons des installations électriques fiables et sécurisées pour les bâtiments résidentiels, commerciaux et industriels.",

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
            "Nous réalisons des installations électriques fiables et sécurisées pour les bâtiments résidentiels, commerciaux et industriels.",

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
            "Nous réalisons des installations électriques fiables et sécurisées pour les bâtiments résidentiels, commerciaux et industriels.",

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
            "Nous réalisons des installations électriques fiables et sécurisées pour les bâtiments résidentiels, commerciaux et industriels.",

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