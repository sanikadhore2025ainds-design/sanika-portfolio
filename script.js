const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");


// ================= MOBILE MENU =================

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".section-heading, .info-card, .project-card, .featured-project, .skill-category, .timeline-item, .beyond-grid > div"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});