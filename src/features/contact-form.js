document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("form-feedback");

    const fields = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("service"),
        document.getElementById("message")
    ];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Reset previous errors
        fields.forEach(field => field.classList.remove("input-error"));
        feedback.textContent = "";

        const name = fields[0].value.trim();
        const email = fields[1].value.trim();
        const service = fields[2].value;
        const message = fields[3].value.trim();

        let hasError = false;

        if (!name) {
            fields[0].classList.add("input-error");
            hasError = true;
        }

        if (!email || !email.includes("@")) {
            fields[1].classList.add("input-error");
            hasError = true;
        }

        if (!service) {
            fields[2].classList.add("input-error");
            hasError = true;
        }

        if (!message) {
            fields[3].classList.add("input-error");
            hasError = true;
        }

        if (hasError) {
            feedback.textContent = "Please correct the highlighted fields and try again.";
            feedback.style.color = "#C4550A";
            return;
        }

        // Success
        feedback.textContent = "Thank you! Your message has been sent.";
        feedback.style.color = "#145A3D";
        form.reset();
    });
});
