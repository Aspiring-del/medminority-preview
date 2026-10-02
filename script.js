document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-coming-soon]").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const reason = document.getElementById("contactReason").value;
            const message = document.getElementById("contactMessage").value.trim();
            const subject = "MedMinority Contact: " + reason;
            const body = [
                "Name: " + name,
                "Email: " + email,
                "Reason: " + reason,
                "",
                "Message:",
                message
            ].join("\n");

            window.location.href = "mailto:medminority@gmail.com?subject="
                + encodeURIComponent(subject)
                + "&body="
                + encodeURIComponent(body);
        });
    }
});
