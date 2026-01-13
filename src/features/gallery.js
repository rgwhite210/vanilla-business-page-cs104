document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".menu-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const container = card.querySelector(".service-image-container");
            const toggleText = card.querySelector(".card-toggle");
            const isExpanded = container.firstChild !== null;

            // Reset all cards
            cards.forEach(c => {
                c.classList.remove("active");
                c.style.display = "block";
                c.querySelector(".service-image-container").innerHTML = "";
                c.querySelector(".card-toggle").textContent = "+";
            });

            // Expand selected card
            if (!isExpanded) {
                const img = document.createElement("img");
                img.src = card.dataset.image;
                img.alt = card.dataset.alt;
                img.className = "service-card-image";

                container.appendChild(img);
                card.classList.add("active");
                toggleText.textContent = "-";

                cards.forEach(c => {
                    if (c !== card) {
                        c.style.display = "none";
                    }
                });
            }
        });
    });
});