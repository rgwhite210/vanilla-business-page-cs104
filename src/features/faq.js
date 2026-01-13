document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".faq-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const answer = card.querySelector(".faq-answer");
            const toggle = card.querySelector(".faq-toggle");
            const isOpen = answer.style.display === "block";

            // Collapse all cards
            cards.forEach(c => {
                c.classList.remove("active");
                c.querySelector(".faq-answer").style.display = "none";
                c.querySelector(".faq-toggle").textContent = "+";
            });

            // Expand clicked card only if it was closed
            if (!isOpen) {
                card.classList.add("active");
                answer.style.display = "block";
                toggle.textContent = "−";
            }
        });
    });
});

