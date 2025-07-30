// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const navLinks = document.getElementById('nav-links');
    const navMenu = document.querySelector('.nav__menu');
    const navImg = document.querySelector('.nav_img');

    // Open menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (navLinks) {
                navLinks.classList.add('nav_link--show');
            }
        });
    }

    // Alternative menu toggle (for pages with different structure)
    if (navMenu) {
        navMenu.addEventListener('click', function() {
            const navLinkMenu = document.querySelector('.nav_link--menu');
            if (navLinkMenu) {
                navLinkMenu.classList.toggle('nav_link--show');
            }
        });
    }

    // Close menu
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            if (navLinks) {
                navLinks.classList.remove('nav_link--show');
            }
            const navLinkMenu = document.querySelector('.nav_link--menu');
            if (navLinkMenu) {
                navLinkMenu.classList.remove('nav_link--show');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.nav');
        if (nav && !nav.contains(event.target)) {
            if (navLinks) {
                navLinks.classList.remove('nav_link--show');
            }
            const navLinkMenu = document.querySelector('.nav_link--menu');
            if (navLinkMenu) {
                navLinkMenu.classList.remove('nav_link--show');
            }
        }
    });
});