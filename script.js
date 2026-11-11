document.addEventListener("DOMContentLoaded", function () {
    // TEMPORARY: profiles in this list stay in the repository but are not public.
    const hiddenProviderPages = new Set([
        "provider-adamolekun.html",
        "provider-aikman.html",
        "provider-akpan.html",
        "provider-alexis.html",
        "provider-anderson.html",
        "provider-asagbra.html",
        "provider-atkinson.html",
        "provider-ayako.html",
        "provider-beng-ongey.html",
        "provider-biritwum.html",
        "provider-booker.html",
        "provider-guillory-johnson.html",
        "provider-ofosu.html",
        "provider-ray.html",
        "provider-riddley.html",
        "provider-pdmpa-myers.html",
        "provider-pdmpa-angus.html",
        "provider-pdmpa-brown.html",
        "provider-pdmpa-campbell.html",
        "provider-pdmpa-hicks.html",
        "provider-pdmpa-jackson-dozier.html",
        "provider-pdmpa-mbangowah.html",
        "provider-pdmpa-thompson.html",
        "provider-pdmpa-pinckney.html",
        "provider-pdmpa-robinson.html",
        "provider-pdmpa-suffrant.html",
        "provider-pdmpa-alan.html",
        "provider-pdmpa-mills.html",
        "provider-pdmpa-abraham.html",
        "provider-pdmpa-gbigbi-jackson.html"
    ]);

    const currentPage = window.location.pathname.split("/").pop();

    if (hiddenProviderPages.has(currentPage)) {
        window.location.replace("find.html");
        return;
    }
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
            practice: "Pinehurst Surgical Clinic",
            profile: "provider-adamolekun.html"
        },
        {
            id: 2,
            name: "Madonna A. Biritwum",
            specialty: "Infectious Disease",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-biritwum.html"
        },
        {
            id: 3,
            name: "Diana Riddley",
            specialty: "Family Medicine",
            city: "Raeford",
            ethnicity: "",
            practice: "FirstHealth Primary Care",
            profile: "provider-riddley.html"
        },
        {
            id: 4,
            name: "Inga S. Aikman",
            specialty: "Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-aikman.html"
        },
        {
            id: 5,
            name: "Uduak S. Akpan",
            specialty: "Neonatal-Perinatal Medicine / Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-akpan.html"
        },
        {
            id: 6,
            name: "Afe D. Alexis",
            specialty: "Pulmonary Disease / Sleep Medicine",
            city: "Roanoke Rapids",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-alexis.html"
        },
        {
            id: 7,
            name: "Meshka K. Anderson",
            specialty: "Transplant Surgery / General Surgery",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-anderson.html"
        },
        {
            id: 8,
            name: "Rochelle C. Asagbra",
            specialty: "Emergency Medicine",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-asagbra.html"
        },
        {
            id: 9,
            name: "Ashley D. Atkinson",
            specialty: "Obstetrics & Gynecology",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-atkinson.html"
        },
        {
            id: 10,
            name: "Ongeri J. Ayako",
            specialty: "Internal Medicine",
            city: "Ahoskie",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-ayako.html"
        },
        {
            id: 11,
            name: "Hostensia M. Beng-Ongey",
            specialty: "Pediatric Nephrology / Pediatrics",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-beng-ongey.html"
        },
        {
            id: 12,
            name: "Corenthian J. Booker",
            specialty: "Maternal & Fetal Medicine / Obstetrics & Gynecology",
            city: "Greenville",
            ethnicity: "",
            practice: "ECU Health",
            profile: "provider-booker.html"
        },
        {
            id: 13,
            name: "Lorin E. Guillory Johnson",
            specialty: "Hospice and Palliative Medicine / Hospitalist",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-guillory-johnson.html"
        },
        {
            id: 14,
            name: "Charles Ofosu",
            specialty: "Hospitalist / Internal Medicine",
            city: "Pinehurst",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-ofosu.html"
        },
        {
            id: 15,
            name: "John M. Ray Jr.",
            specialty: "Family Medicine",
            city: "Fayetteville",
            ethnicity: "",
            practice: "FirstHealth",
            profile: "provider-ray.html"
        },
        {
            id: 16,
            name: "Jocelyn A. Myers",
            specialty: "Endocrinology",
            city: "Myrtle Beach",
            state: "SC",
            ethnicity: "",
            practice: "Carolina Health Specialists",
            profile: "provider-pdmpa-myers.html"
        },
        {
            id: 17,
            name: "Joslyn L. Angus Jr.",
            specialty: "Family Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Jeter-Skinner Family Practice",
            profile: "provider-pdmpa-angus.html"
        },
        {
            id: 18,
            name: "Morris E. Brown III",
            specialty: "Family Medicine",
            city: "Lake City",
            state: "SC",
            ethnicity: "",
            practice: "Lake City Family Medicine",
            profile: "provider-pdmpa-brown.html"
        },
        {
            id: 19,
            name: "Treadwell Campbell",
            specialty: "Family Medicine",
            city: "Mullins",
            state: "SC",
            ethnicity: "",
            practice: "Campbell Family Practice",
            profile: "provider-pdmpa-campbell.html"
        },
        {
            id: 20,
            name: "Loretta Hicks",
            specialty: "Family Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Florence CBOC / Columbia VA Healthcare System",
            profile: "provider-pdmpa-hicks.html"
        },
        {
            id: 21,
            name: "Focell Jackson-Dozier",
            specialty: "Family Medicine",
            city: "Timmonsville",
            state: "SC",
            ethnicity: "",
            practice: "McLeod Family Practice",
            profile: "provider-pdmpa-jackson-dozier.html"
        },
        {
            id: 22,
            name: "Yvette Mbangowah",
            specialty: "Family Medicine / Obesity Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "Jeter Skinner Family Practice",
            profile: "provider-pdmpa-mbangowah.html"
        },
        {
            id: 23,
            name: "Chelsea N. Thompson",
            specialty: "Family Medicine",
            city: "Mullins",
            state: "SC",
            ethnicity: "",
            practice: "McLeod Family Medicine Marion",
            profile: "provider-pdmpa-thompson.html"
        },
        {
            id: 24,
            name: "Ashekia F. Pinckney",
            specialty: "Obstetrics & Gynecology",
            city: "Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Women's Care of Hartsville",
            profile: "provider-pdmpa-pinckney.html"
        },
        {
            id: 25,
            name: "Leroy F. Robinson",
            specialty: "Obstetrics & Gynecology",
            city: "Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Women's Care of Hartsville",
            profile: "provider-pdmpa-robinson.html"
        },
        {
            id: 26,
            name: "Germina Suffrant",
            specialty: "Obstetrics & Gynecology",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "MUSC OB/GYN Florence",
            profile: "provider-pdmpa-suffrant.html"
        },
        {
            id: 27,
            name: "Rodney K. Alan",
            specialty: "Orthopaedic Surgery",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "McLeod Orthopaedics",
            profile: "provider-pdmpa-alan.html"
        },
        {
            id: 28,
            name: "Michael V. Mills",
            specialty: "Orthopaedic Spine Surgery",
            city: "Hartsville",
            state: "SC",
            ethnicity: "",
            practice: "Carolina Pines Regional Medical Center",
            profile: "provider-pdmpa-mills.html"
        },
        {
            id: 29,
            name: "Sheron Abraham",
            specialty: "Hospital Medicine",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "MUSC Health Florence Division",
            profile: "provider-pdmpa-abraham.html"
        },
        {
            id: 30,
            name: "Grace Gbigbi-Jackson",
            specialty: "Family Medicine / Primary Care",
            city: "Florence",
            state: "SC",
            ethnicity: "",
            practice: "MUSC Health Florence Medical Center",
            profile: "provider-pdmpa-gbigbi-jackson.html"
        }
    ];

    // Only profiles not listed above are rendered in the public directory.
    const publicDoctors = doctors.filter(
        doctor => !hiddenProviderPages.has(doctor.profile)
    );

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
            const card = document.createElement("a");
            card.className = "doctor-card";
            card.href = doctor.profile;
            card.setAttribute("aria-label", `View profile for ${doctor.name}`);

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
            city.textContent = `${doctor.city}, ${doctor.state || "NC"}`;

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

        const results = publicDoctors.filter(doctor => {
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
            displayDoctors(publicDoctors);
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
        displayDoctors(publicDoctors);
    }
});
