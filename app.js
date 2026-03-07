"use strict";

// Get links
let links = document.querySelectorAll("a");

// If they exist
if (links) {
    // Go through each of them
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        // Add an onclick event listener
        link.addEventListener("click", function (e) {
            // Grab body
            let body = document.querySelector("body");

            // Prevent navigation
            e.preventDefault();

            // Add fade out
            body.classList.add("fade-out")

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
            }, 250);
        });
    }
}