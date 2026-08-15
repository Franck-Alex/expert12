/* ==================================================
   DONNÉES DES PROJETS
================================================== */

const projects = {

    projet1: {

        title: "Nom du projet",

        category: "BTP",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet et des travaux réalisés par Expert12. Cette description pourra être remplacée par les informations réelles du projet."

    },


    projet2: {

        title: "Nom du projet",

        category: "Construction métallique",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet de construction métallique et des différentes prestations réalisées par Expert12."

    },


    projet3: {

        title: "Nom du projet",

        category: "Électricité",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet électrique et des différentes interventions réalisées."

    },


    projet4: {

        title: "Nom du projet",

        category: "Télécommunication",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet de télécommunication réalisé par Expert12."

    },


    projet5: {

        title: "Nom du projet",

        category: "Hydraulique",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet hydraulique et des prestations réalisées."

    },


    projet6: {

        title: "Nom du projet",

        category: "Informatique",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet informatique réalisé par Expert12."

    },


    projet7: {

        title: "Nom du projet",

        category: "Solaire",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet solaire et des solutions mises en place."

    },


    projet8: {

        title: "Nom du projet",

        category: "BTP",

        location: "Abidjan, Côte d'Ivoire",

        image:
            "/assets/images/hero.jpg",

        description:
            "Présentation du projet BTP et des travaux réalisés par Expert12."

    }

};



/* ==================================================
   ÉLÉMENTS
================================================== */

const projectButtons =
    document.querySelectorAll(
        ".project-details-btn"
    );


const projectModal =
    document.getElementById(
        "projectModal"
    );


const projectModalClose =
    document.getElementById(
        "projectModalClose"
    );


const modalImage =
    document.getElementById(
        "modalProjectImage"
    );


const modalCategory =
    document.getElementById(
        "modalProjectCategory"
    );


const modalTitle =
    document.getElementById(
        "modalProjectTitle"
    );


const modalLocation =
    document.getElementById(
        "modalProjectLocation"
    );


const modalDescription =
    document.getElementById(
        "modalProjectDescription"
    );



/* ==================================================
   OUVERTURE
================================================== */

projectButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const projectName =
                this.dataset.project;

            const project =
                projects[projectName];


            if (!project) {

                console.error(
                    "Projet introuvable :",
                    projectName
                );

                return;

            }


            modalImage.src =
                project.image;

            modalImage.alt =
                project.title;

            modalCategory.textContent =
                project.category;

            modalTitle.textContent =
                project.title;

            modalLocation.textContent =
                project.location;

            modalDescription.textContent =
                project.description;


            projectModal.classList.add(
                "active"
            );


            /* Empêche le scroll de la page */

            document.body.style.overflow =
                "hidden";

        }
    );

});



/* ==================================================
   FERMETURE
================================================== */

function closeProjectModal() {

    projectModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}



/* Bouton X */

projectModalClose.addEventListener(
    "click",
    closeProjectModal
);



/* Cliquer sur l'arrière-plan */

document
    .querySelector(".project-modal-overlay")
    .addEventListener(
        "click",
        closeProjectModal
    );



/* Touche Échap */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeProjectModal();

        }

    }
);