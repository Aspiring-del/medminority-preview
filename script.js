document.addEventListener("DOMContentLoaded", function () {
    let notice;
    let noticeTimer;

    function showComingSoon(event) {
        if (event) {
            event.preventDefault();
        }

        if (!notice) {
            notice = document.createElement("div");
            notice.textContent = "Stay tuned — this feature is coming soon.";
            notice.setAttribute("role", "status");

            Object.assign(notice.style, {
                position: "fixed",
                left: "50%",
                bottom: "32px",
                zIndex: "9999",
                padding: "14px 20px",
                color: "#ffffff",
                backgroundColor: "#0b2d4a",
                borderRadius: "8px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
                opacity: "0",
                transform: "translate(-50%, 16px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                pointerEvents: "none",
                textAlign: "center",
                fontFamily: "Poppins, sans-serif"
            });

            document.body.appendChild(notice);
        }

        clearTimeout(noticeTimer);

        notice.style.opacity = "1";
        notice.style.transform = "translate(-50%, 0)";

        noticeTimer = setTimeout(function () {
            notice.style.opacity = "0";
            notice.style.transform = "translate(-50%, 16px)";
        }, 2600);
    }

    document.querySelectorAll('a[href="#"]').forEach(function (link) {
        link.addEventListener("click", showComingSoon);
    });

    document.querySelectorAll("form").forEach(function (form) {
        form.addEventListener("submit", showComingSoon);

        form.querySelectorAll(
            'button[type="submit"], button:not([type])'
        ).forEach(function (button) {
            button.addEventListener("click", showComingSoon);
        });
    });

    document.querySelectorAll(".search-box button").forEach(function (button) {
        button.addEventListener("click", showComingSoon);
    });
});
