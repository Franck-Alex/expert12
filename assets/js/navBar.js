/* ==================================================
   MENU MOBILE
================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.querySelector(".header-navBar nav");


/* Vérification */

if (menuToggle && nav) {


    /* OUVRIR / FERMER */

    menuToggle.addEventListener(
        "click",
        function () {

            nav.classList.toggle("active");


            const isOpen =
                nav.classList.contains("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            /* Changer l'icône */

            const icon =
                menuToggle.querySelector("i");


            if (isOpen) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );


    /* ==================================================
       FERMER APRÈS UN CLIC SUR UN LIEN
    ================================================== */

    nav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                function () {

                    nav.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    const icon =
                        menuToggle.querySelector("i");


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        });

}