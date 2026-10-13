function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.getElementById("navMenu").classList.remove("show");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.length > 1) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});
