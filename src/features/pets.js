document.addEventListener("DOMContentLoaded", () => {
    const petCards = document.querySelectorAll(".pet-card");

    petCards.forEach(card => {
        card.addEventListener("click", () => {
            const isActive = card.classList.contains("active");

            // Collapse all cards
            petCards.forEach(c => c.classList.remove("active"));

            // Expand clicked card if it was closed
            if (!isActive) {
                card.classList.add("active");
            }
        });
    });
});
