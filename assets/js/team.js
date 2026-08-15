const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach((card, index) => {

    card.classList.add("animate");

    card.style.transitionDelay = `${index * 0.08}s`;

});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


teamCards.forEach((card) => {

    observer.observe(card);

});