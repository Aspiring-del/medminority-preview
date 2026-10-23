document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-coming-soon]").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });
});

const doctors = [
    {
        id: 1,
        name: "Olufunsho D. Adamolekun",
        specialty: "Vascular Surgery",
        city: "Pinehurst",
        ehtnicity: "",
        practice: "Pinehurst Surgical Clinic",
    },

    {
        id: 2,
        name: "Madonna A. Biritwum",
        specialty: "Infectious Disease",
        city: "Pinehurst",
        ehtnicity: "",
        practice: "FirstHealth", 
    },

    {
        id: 3,
        name: "Diana Riddley",
        specialty: "Family Medicine",
        city: "Raeford",
        ehtnicity: "",
        practice: "FirstHealth Primary Care", 
    },

    {
    id: 4,
    name: "Inga S. Aikman",
    specialty: "Pediatrics",
    city: "Greenville",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 5,
    name: "Uduak S. Akpan",
    specialty: "Neonatal-Perinatal Medicine / Pediatrics",
    city: "Greenville",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 6,
    name: "Afe D. Alexis",
    specialty: "Pulmonary Disease / Sleep Medicine",
    city: "Roanoke Rapids",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 7,
    name: "Meshka K. Anderson",
    specialty: "Transplant Surgery / General Surgery",
    city: "Greenville",
    ethnicity: "",
    practice: "ECU Health",
},

    {    
    id: 8,
    name: "Rochelle C. Asagbra",
    specialty: "Emergency Medicine",
    city: "Greenville",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 9,
    name: "Ashley D. Atkinson",
    specialty: "Obstetrics & Gynecology",
    city: "Greenville",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 10,
    name: "Ongeri J. Ayako",
    specialty: "Internal Medicine",
    city: "Ahoskie",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 11,
    name: "Hostensia M. Beng-Ongey",
    specialty: "Pediatric Nephrology / Pediatrics",
    city: "Greenville",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 12,
    name: "Corenthian J. Booker",
    specialty: "Maternal & Fetal Medicine / Obstetrics & Gynecology",
    city: "Greenville",
    ethnicity: "",
    practice: "ECU Health",
},

    {
    id: 13,
    name: "Lorin E. Guillory Johnson",
    specialty: "Hospice and Palliative Medicine / Hospitalist",
    city: "Pinehurst",
    ethnicity: "",
    practice: "FirstHealth",
},

    {
    id: 14,
    name: "Charles Ofosu",
    specialty: "Hospitalist / Internal Medicine",
    city: "Pinehurst",
    ethnicity: "",
    practice: "FirstHealth",
},

    {
    id: 15,
    name: "John M. Ray Jr.",
    specialty: "Family Medicine",
    city: "Fayetteville",
    ethnicity: "",
    practice: "FirstHealth",
}

    
];

const searchForm = document.getElementById("doctorSearchForm");
const doctorGrid = document.getElementById("doctorGrid");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

function displayDoctors(list) {
    doctorGrid.replaceChildren();

    resultCount.textcontent = 
    '${list.length} doctor(s) found';

    noResults.style.display = 
        list.length === 0 ? "block" : "none";
        list.forEach(doctor => {

            const card = document.createElement("div");
            card.className = "doctor-card";

            const img = document.createElement("img");
            img.src = doctor.image;
            image.alt = 'Portrait of $ {doctor.name}';
            img.loading = "lazy";

            const name = document.createElement("h3");
            name.textContent = doctor.name;

            const specialty = document.createElement("p");
            specialty.textContent = doctor.specialty;

            const practice = document.createElement("span")
            practice.textContent = doctor.practice;

            const city = document.createElement("p")
            city.textContent = '$ {doctor.city}, NC';

            const profile = document.createElement("a");
            profile.href = 'doctor-profile.html?id=${doctor.id}';
            profile.testContent = "View Profile";

            card.append(
                img, name, specialty, practice, city, profile
            );

            doctorGrid.appendChild(card);
        });
}

function searchDoctors() {
    
}

