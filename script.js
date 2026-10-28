document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-coming-soon]").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });

    const doctors = [
        {
            id: 1,
            name: "Olufunsho D. Adamolekun",
            specialty: "Vascular Surgery",
            city: "Pinehurst",
            ethnicity: "",
            practice: "Pinehurst Surgical Clinic"
        },
        {
            id: 2,
            name: "Madonna A. Biritwum",
            specialty: "Infectious Disease",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth"
        },
        {
            id: 3,
            name: "Diana Riddley",
            specialty: "Family Medicine",
            city: "Raeford",
            ethnicity: "",
            practice: "FirstHealth Primary Care"
        },
        {
            id: 4,
            name: "Inga S. Aikman",
            specialty: "Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 5,
            name: "Uduak S. Akpan",
            specialty: "Neonatal-Perinatal Medicine / Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 6,
            name: "Afe D. Alexis",
            specialty: "Pulmonary Disease / Sleep Medicine",
            city: "Roanoke Rapids",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 7,
            name: "Meshka K. Anderson",
            specialty: "Transplant Surgery / General Surgery",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 8,
            name: "Rochelle C. Asagbra",
            specialty: "Emergency Medicine",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 9,
            name: "Ashley D. Atkinson",
            specialty: "Obstetrics & Gynecology",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 10,
            name: "Ongeri J. Ayako",
            specialty: "Internal Medicine",
            city: "Ahoskie",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 11,
            name: "Hostensia M. Beng-Ongey",
            specialty: "Pediatric Nephrology / Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 12,
            name: "Corenthian J. Booker",
            specialty: "Maternal & Fetal Medicine / Obstetrics & Gynecology",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health"
        },
        {
            id: 13,
            name: "Lorin E. Guillory Johnson",
            specialty: "Hospice and Palliative Medicine / Hospitalist",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth"
        },
        {
            id: 14,
            name: "Charles Ofosu",
            specialty: "Hospitalist / Internal Medicine",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth"
        },
        {
            id: 15,
            name: "John M. Ray Jr.",
            specialty: "Family Medicine",
            city: "Fayetteville",
            ethnicity: "",
            practice: "FirstHealth"
        }
    ];

    const searchForm = document.getElementById("doctorSearchForm");
    const doctorGrid = document.getElementById("doctorGrid");
    const resultCount = document.getElementById("resultCount");
    const noResults = document.getElementById("noResults");

    if (!searchForm || !doctorGrid || !resultCount || !noResults) {
        return;
    }

    function displayDoctors(list) {
        doctorGrid.replaceChildren();

        resultCount.textContent = `${list.length} doctor(s) found`;

        noResults.style.display =
            list.length === 0 ? "block" : "none";

        list.forEach(doctor => {
            const card = document.createElement("div");
            card.className = "doctor-card";

            const photoPlaceholder = document.createElement("div");
            photoPlaceholder.className = "doctor-photo-placeholder";
            photoPlaceholder.setAttribute("aria-hidden", "true");

            const icon = document.createElement("i");
            icon.className = "fa-solid fa-user-doctor";
            photoPlaceholder.appendChild(icon);

            const cardContent = document.createElement("div");
            cardContent.className = "doctor-card-content";

            const name = document.createElement("h3");
            name.textContent = doctor.name;

            const specialty = document.createElement("p");
            specialty.className = "doctor-specialty";
            specialty.textContent = doctor.specialty;

            const practice = document.createElement("p");
            practice.className = "doctor-clinic";
            practice.textContent = doctor.practice;

            const city = document.createElement("p");
            city.className = "doctor-location";
            city.textContent = `${doctor.city}, NC`;

            cardContent.append(name, specialty, practice, city);
            card.append(photoPlaceholder, cardContent);
            doctorGrid.appendChild(card);
        });
    }

    function searchDoctors() {
        const name = document.getElementById("searchName")
            .value.trim().toLowerCase();

        const specialty = document.getElementById("specialty").value;
        const city = document.getElementById("city").value;
        const ethnicity = document.getElementById("ethnicity").value;

        const results = doctors.filter(doctor => {
            const matchesName =
                doctor.name.toLowerCase().includes(name);

            const matchesSpecialty =
                !specialty || doctor.specialty === specialty;

            const matchesCity =
                !city || doctor.city === city;

            const matchesEthnicity =
                !ethnicity || doctor.ethnicity === ethnicity;

            return matchesName &&
                matchesSpecialty &&
                matchesCity &&
                matchesEthnicity;
        });

        displayDoctors(results);
    }

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        searchDoctors();
    });

    ["specialty", "city", "ethnicity"].forEach(id => {
        document.getElementById(id)
            .addEventListener("change", searchDoctors);
    });

    document.getElementById("searchName")
        .addEventListener("input", searchDoctors);

    document.getElementById("resetSearch")
        .addEventListener("click", function () {
            searchForm.reset();
            displayDoctors(doctors);
        });

    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name") || "";
    const specialtyParam = params.get("specialty") || "";
    const cityParam = params.get("city") || "";
    const ethnicityParam = params.get("ethnicity") || "";

    document.getElementById("searchName").value = nameParam;
    document.getElementById("specialty").value = specialtyParam;
    document.getElementById("city").value = cityParam;
    document.getElementById("ethnicity").value = ethnicityParam;

    if (nameParam || specialtyParam || cityParam || ethnicityParam) {
        searchDoctors();
    } else {
        displayDoctors(doctors);
    }
});
