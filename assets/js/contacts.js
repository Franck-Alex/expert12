/* ==================================================
   CONFIGURATION EXPERT12
================================================== */

// Remplace par le vrai numéro WhatsApp d'Expert12
// Format : 225 + numéro, sans +, espaces ou tirets

const expert12WhatsApp = "2250150437382";


// Adresse email d'Expert12

const expert12Email = "konanfranckalex12@gmail.com";



/* ==================================================
   RÉCUPÉRATION DU FORMULAIRE
================================================== */

const contactForm =
    document.getElementById("contactForm");


const sendWhatsapp =
    document.getElementById("sendWhatsapp");


const sendEmail =
    document.getElementById("sendEmail");



/* ==================================================
   RÉCUPÉRATION DES CHAMPS
================================================== */

const nameInput =
    document.getElementById("name");


const emailInput =
    document.getElementById("email");


const phoneInput =
    document.getElementById("phone");


const subjectInput =
    document.getElementById("subject");


const messageInput =
    document.getElementById("message");



/* ==================================================
   RÉCUPÉRER LES INFORMATIONS
================================================== */

function getFormData() {

    return {

        name:
            nameInput.value.trim(),

        email:
            emailInput.value.trim(),

        phone:
            phoneInput.value.trim(),

        subject:
            subjectInput.value.trim(),

        message:
            messageInput.value.trim()

    };

}



/* ==================================================
   VALIDATION
================================================== */

function validateForm(data) {

    if (!data.name) {

        alert(
            "Veuillez renseigner votre nom."
        );

        nameInput.focus();

        return false;

    }


    if (!data.email) {

        alert(
            "Veuillez renseigner votre adresse email."
        );

        emailInput.focus();

        return false;

    }


    if (!data.subject) {

        alert(
            "Veuillez renseigner le sujet de votre demande."
        );

        subjectInput.focus();

        return false;

    }


    if (!data.message) {

        alert(
            "Veuillez écrire votre message."
        );

        messageInput.focus();

        return false;

    }


    return true;

}



/* ==================================================
   CONSTRUCTION DU MESSAGE
================================================== */

function createMessage(data) {

    return `Bonjour Expert12,

Je souhaite vous contacter concernant :

Nom : ${data.name}

Email : ${data.email}

Téléphone : ${data.phone || "Non renseigné"}

Sujet : ${data.subject}

Message :

${data.message}

Merci.`;

}



/* ==================================================
   WHATSAPP
================================================== */

sendWhatsapp.addEventListener(
    "click",
    function () {


        const data =
            getFormData();


        if (!validateForm(data)) {

            return;

        }


        const message =
            createMessage(data);


        const whatsappURL =
            `https://wa.me/${expert12WhatsApp}?text=` +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);



/* ==================================================
   EMAIL
================================================== */

sendEmail.addEventListener(
    "click",
    function () {


        const data =
            getFormData();


        if (!validateForm(data)) {

            return;

        }


        const message =
            createMessage(data);


        const subject =
            `Contact Expert12 - ${data.subject}`;


        const mailtoURL =
            `mailto:${expert12Email}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(message)}`;


        window.location.href =
            mailtoURL;

    }
);