/* ==================================================
   DONNÉES DES PRODUITS
================================================== */

const products = {

    produit1: {

        title: "Nom du produit",

        category: "BTP",

        price: "50 000 FCFA",

        image:
            "/assets/images/logo.png",

        description:
            "Présentation du produit et de son utilisation. Cette description pourra être remplacée par les informations réelles du produit proposé par Expert12.",

        features: [
            "Caractéristique du produit",
            "Qualité et fiabilité",
            "Adapté aux besoins du projet",
            "Solution professionnelle"
        ]

    },


    produit2: {

        title: "Nom du produit",

        category: "Construction métallique",

        price: "50 000 FCFA",

        image:
            "/assets/images/logo.png",

        description:
            "Présentation du produit de construction métallique et de ses principales utilisations.",

        features: [
            "Structure robuste",
            "Matériaux adaptés",
            "Conception professionnelle",
            "Solution durable"
        ]

    },


    produit3: {

        title: "Nom du produit",

        category: "Électricité",

        price: "50 000 FCFA",

        image:
            "/assets/images/logo.png",

        description:
            "Produit destiné aux installations électriques et aux différents besoins de vos projets.",

        features: [
            "Installation fiable",
            "Solution sécurisée",
            "Matériel professionnel",
            "Adapté aux installations"
        ]

    },


    produit4: {

        title: "Nom du produit",

        category: "Télécommunication",

        price: "50 000 FCFA",

        image:
            "/assets/images/logo.png",

        description:
            "Produit destiné aux infrastructures et installations de télécommunication.",

        features: [
            "Solution professionnelle",
            "Installation adaptée",
            "Bonne fiabilité",
            "Utilisation professionnelle"
        ]

    },


    produit5: {

        title: "Nom du produit",

        category: "Hydraulique",

        price: "50 000 FCFA",

        image:
            "/assets/images/logo.png",

        description:
            "Produit adapté aux installations et différents travaux hydrauliques.",

        features: [
            "Matériel adapté",
            "Bonne résistance",
            "Solution fiable",
            "Utilisation professionnelle"
        ]

    },


    produit6: {

        title: "Nom du produit",

        category: "Solaire",

        price: "50 000 FCFA",

        image:
            "/assets/images/logo.png",

        description:
            "Produit destiné aux installations solaires et aux solutions énergétiques.",

        features: [
            "Solution énergétique",
            "Installation adaptée",
            "Matériel professionnel",
            "Solution durable"
        ]

    }

};



/* ==================================================
   ÉLÉMENTS
================================================== */

const productButtons =
    document.querySelectorAll(
        ".product-details-btn"
    );


const productModal =
    document.getElementById(
        "productModal"
    );


const productModalClose =
    document.getElementById(
        "productModalClose"
    );


const modalImage =
    document.getElementById(
        "modalProductImage"
    );


const modalCategory =
    document.getElementById(
        "modalProductCategory"
    );


const modalTitle =
    document.getElementById(
        "modalProductTitle"
    );


const modalDescription =
    document.getElementById(
        "modalProductDescription"
    );


const modalFeatures =
    document.getElementById(
        "modalProductFeatures"
    );

const modalPrice =
    document.getElementById(
        "modalProductPrice"
    );


const modalWhatsapp =
    document.getElementById(
        "modalProductWhatsapp"
    );



/* ==================================================
   OUVRIR LE MODAL
================================================== */

productButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            const productName =
                this.dataset.product;


            const product =
                products[productName];


            if (!product) {

                console.error(
                    "Produit introuvable :",
                    productName
                );

                return;

            }


            /* IMAGE */

            modalImage.src =
                product.image;

            modalImage.alt =
                product.title;


            /* INFORMATIONS */

            modalCategory.textContent =
                product.category;

            modalTitle.textContent =
                product.title;

            modalPrice.textContent =
                product.price;

            modalDescription.textContent =
                product.description;


            /* CARACTÉRISTIQUES */

            modalFeatures.innerHTML = "";


            product.features.forEach(
                feature => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.textContent =
                        feature;

                    modalFeatures.appendChild(
                        li
                    );

                }
            );


            /* OUVERTURE */

            productModal.classList.add(
                "active"
            );


            /* BLOQUER LE SCROLL */

            document.body.style.overflow =
                "hidden";

            // Message whatsapp
            const phoneNumber = "2250150437382";

            const message =
                `Bonjour Expert12,\n\n` +
                `Je suis intéressé(e) par le produit : ` +
                `${product.title}\n` +
                `Prix : ${product.price}\n\n` +
                `Je souhaiterais avoir plus d'informations.`;

            const whatsappUrl =
                `https://wa.me/${phoneNumber}?text=` +
                encodeURIComponent(message);

            modalWhatsapp.href =
                whatsappUrl;

        }
    );

});



/* ==================================================
   FERMER LE MODAL
================================================== */

function closeProductModal() {

    productModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}



/* Bouton X */

productModalClose.addEventListener(
    "click",
    closeProductModal
);



/* Cliquer sur l'arrière-plan */

document
    .querySelector(
        ".product-modal-overlay"
    )
    .addEventListener(
        "click",
        closeProductModal
    );



/* Touche ÉCHAP */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            productModal.classList.contains(
                "active"
            )
        ) {

            closeProductModal();

        }

    }
);