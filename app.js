"use strict";

// Get links
let links = document.querySelectorAll("a");

// If they exist
if (links) {

    // Go through each of them
    links.forEach(function (link) {

        // Add an onclick event listener
        link.addEventListener("click", function (e) {
            // Grab body
            let body = document.querySelector("body");

            // Prevent navigation
            e.preventDefault();

            // Run a function that conditionally redirects after 500ms
            setTimeout(function () {
                if (body.classList.contains("fade-out")) {
                    if (!e.target.parentElement.href) {
                        window.location.href = e.target.href;
                    } else {
                        window.location.href = e.target.parentElement.href;
                    }
                } else {
                    console.error("Whaaaaaa")
                }
            }, 500);

            // Add fade out
            body.classList.add("fade-out")
        });
    });
}


let throttling = false;

function onScrollThrottled() {
    if (!throttling) {
        throttling = true;
        window.requestAnimationFrame(() => {
            onScroll();
            throttling = false;
        });
    }
}


let navbarTop = 0;
let transition = true;
let position = "absolute";
let lastScrollPosition = 0;

let navar = document.querySelector("nav");

function onScroll() {

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition <= 0) {

        lastScrollPosition = 0;
        navbarTop = 0;

        if (position !== "absolute") { transition = true; }
        else { transition = false; }
        position = "absolute";

    } else {

        if (currentScrollPosition > lastScrollPosition) {

            if (position !== "absolute") { transition = true; }
            else { transition = false; }
            position = "absolute";

            let { top, height } = navbar.getBoundingClientRect()
            navbarTop = currentScrollPosition + Math.max(top, -height);

        } else {

            const { top } = navbar.getBoundingClientRect()

            if (top >= 0) {

                navbarTop = 0;

                if (position !== "fixed") { transition = true; }
                else { transition = false; }
                position = "fixed";

            }

        }

        lastScrollPosition = currentScrollPosition;

    }
    navbar.style = `position: ${position}; top: ${navbarTop}px; transition: ${transition ? "none" : "100ms linear"}`;
}

window.addEventListener("scroll", onScrollThrottled, { passive: true });