'use strict';

document.addEventListener('DOMContentLoaded', function () {

    // Navbars
    const navbars = document.querySelectorAll(".navbar");
    if (navbars.length > 0) {
        navbars.forEach(function (navbar) {
            const burgers = navbar.querySelectorAll(".navbar-burger");
            const menu = navbar.querySelector(".navbar-menu");
            if (burgers.length > 0 && menu !== null) {
                burgers.forEach(function (burger) {
                    burger.addEventListener("click", function () {
                        burger.classList.toggle("is-active");
                        menu.classList.toggle("is-active");
                    });
                });
            }
        });
    }

});