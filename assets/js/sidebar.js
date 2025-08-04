// Sidebar toggle functions
function openNav() {
    document.getElementById("mySidebar").classList.add("open");
    document.querySelector(".overlay").classList.add("active");
    document.body.classList.add("sidebar-active");
}

function closeNav() {
    document.getElementById("mySidebar").classList.remove("open");
    document.querySelector(".overlay").classList.remove("active");
    document.body.classList.remove("sidebar-active");
}

// Close on ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeNav();
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (this.closest('.sidebar-nav')) {
            closeNav();
        }
    });
});

// Auto open sidebar on hover
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("mySidebar");

hamburger.addEventListener("mouseenter", openNav);

// Auto close when pointer leaves the sidebar
sidebar.addEventListener("mouseleave", closeNav);
