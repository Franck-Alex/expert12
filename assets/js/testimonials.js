document.addEventListener("DOMContentLoaded", function () {

    const testimonials = [

        {
            title: "La satisfaction de nos clients, notre priorité",

            text: "Nous avons fait appel à Expert12 pour la réalisation de notre projet. L'équipe a fait preuve de professionnalisme, de disponibilité et de sérieux tout au long des travaux.",

            name: "Jean Kouassi",

            role: "Client Expert12",

            mainImage: "assets/images/services/hydraulique.jpg",

            secondaryImage: "assets/images/services/hydraulique.jpg",

            avatar: "assets/images/services/btp.jpg"
        },

        {
            title: "Un travail professionnel et de qualité",

            text: "Nous sommes très satisfaits du travail réalisé par Expert12. L'équipe a parfaitement compris nos besoins et nous a accompagnés jusqu'à la finalisation du projet.",

            name: "Mariam Traoré",

            role: "Cliente Expert12",

            mainImage: "assets/images/services/metallique.jpg",

            secondaryImage: "assets/images/services/metallique.jpg",

            avatar: "assets/images/services/btp.jpg"
        },

        {
            title: "Une équipe sérieuse et à l'écoute",

            text: "Du premier contact jusqu'à la livraison, nous avons apprécié le sérieux et la disponibilité de l'équipe Expert12. Nous recommandons vivement leurs services.",

            name: "Yannick Yao",

            role: "Client Expert12",

            mainImage: "assets/images/services/informatique.jpg",

            secondaryImage: "assets/images/services/informatique.jpg",

            avatar: "assets/images/services/btp.jpg"
        }

    ];


    /* =====================================
       RÉCUPÉRATION DES ÉLÉMENTS HTML
    ===================================== */

    const mainImage =
        document.getElementById("testimonial-main-image");

    const secondaryImage =
        document.getElementById("testimonial-secondary-image");

    const avatar =
        document.getElementById("testimonial-avatar");

    const title =
        document.getElementById("testimonial-title");

    const text =
        document.getElementById("testimonial-text");

    const name =
        document.getElementById("testimonial-name");

    const role =
        document.getElementById("testimonial-role");

    const dots =
        document.querySelectorAll(".testimonial-dot");


    /* =====================================
       VÉRIFICATION
    ===================================== */

    console.log("Script témoignages chargé");

    console.log("Nombre de boutons :", dots.length);


    /* =====================================
       INDEX ACTUEL
    ===================================== */

    let currentIndex = 0;


    /* =====================================
       FONCTION DE CHANGEMENT
    ===================================== */

    function showTestimonial(index) {

        const testimonial = testimonials[index];

        if (!testimonial) {
            return;
        }


        /* Texte */

        title.textContent = testimonial.title;

        text.textContent = testimonial.text;

        name.textContent = testimonial.name;

        role.textContent = testimonial.role;


        /* Images */

        mainImage.src = testimonial.mainImage;

        secondaryImage.src = testimonial.secondaryImage;

        avatar.src = testimonial.avatar;


        /* Bouton actif */

        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        dots[index].classList.add("active");


        /* Mise à jour de l'index */

        currentIndex = index;


        console.log("Témoignage affiché :", index);

    }


    /* =====================================
       CLIC SUR LES BOUTONS
    ===================================== */

    dots.forEach(function (dot) {

        dot.addEventListener("click", function () {

            const index =
                Number(this.dataset.index);

            showTestimonial(index);

        });

    });


    /* =====================================
       DÉFILEMENT AUTOMATIQUE
    ===================================== */

    setInterval(function () {

        let nextIndex = currentIndex + 1;


        if (nextIndex >= testimonials.length) {

            nextIndex = 0;

        }


        showTestimonial(nextIndex);

    }, 5000);


});