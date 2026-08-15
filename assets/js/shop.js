const whatsappButtons =
    document.querySelectorAll(".whatsapp-btn");


const whatsappNumber = "2250150437382";


whatsappButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.dataset.product;

        const price =
            button.dataset.price;


        const message =
            `Bonjour Expert12,%0A%0A` +
            `Je suis intéressé par le produit : ` +
            `*${product}*.%0A` +
            `Prix affiché : ${price}.%0A%0A` +
            `Je souhaiterais savoir s'il est disponible ` +
            `et connaître les modalités de commande.`;


        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${message}`;


        window.open(
            whatsappUrl,
            "_blank"
        );

    });

});