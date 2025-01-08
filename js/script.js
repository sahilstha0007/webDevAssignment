// Check screen width and apply border styles to elements on click
if (window.screen.width <= 1130) {
    // Cache elements with class "cir_border" for better performance
    const cirBorders = $(".cir_border");

    // Function to remove borders from all elements
    function removeall() {
        cirBorders.css("border", "none");
    }

    // Add click event listeners to elements
    $("#sec").on("click", function () {
        removeall();
        $(this).css({ "border": "2px solid whitesmoke", "border-radius": "20px" });
    });
    $("#pri").on("click", function () {
        removeall();
        $(this).css({ "border": "2px solid whitesmoke", "border-radius": "20px" });
    });
    $("#tri").on("click", function () {
        removeall();
        $(this).css({ "border": "2px solid whitesmoke", "border-radius": "20px" });
    });
    $("#quad").on("click", function () {
        removeall();
        $(this).css({ "border": "2px solid whitesmoke", "border-radius": "20px" });
    });
    $("#quint").on("click", function () {
        removeall();
        $(this).css({ "border": "2px solid whitesmoke", "border-radius": "20px" });
    });
    $("#hex").on("click", function () {
        removeall();
        $(this).css({ "border": "2px solid whitesmoke", "border-radius": "20px" });
    });
    $("#hept").on("click", function () {
        removeall();
        $(this).css({ "border": "2px solid whitesmoke", "border-radius": "20px" });
    });
}

// Add hover effect to the "about" element
$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

// Toggle body class on input change
$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark mode toggle
const checkbox = document.getElementById("checkbox");

// Function to animate the "about-quad" element
function introAboutLogoTransition() {
    $("#about-quad").css({ "top": "70%", "opacity": "1" });
}

// Check and apply dark mode preference from localStorage
function checkDarkMode() {
    if (localStorage.getItem("tourism_website_darkmode") === "true") {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

// Add event listener for dark mode toggle
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("tourism_website_darkmode", document.body.classList.contains("dark"));
});

// Scroll button functionality
let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

// Show or hide scroll button based on scroll position
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to top function
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling using Intersection Observer (modern approach)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            // Add active class to the corresponding link
            const id = entry.target.getAttribute("id");
            const correspondingLink = document.querySelector(`.nav-links li a[href="#${id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add("active");
            }
        }
    });
}, { threshold: 0.5 });

// Observe each section
sections.forEach(section => observer.observe(section));