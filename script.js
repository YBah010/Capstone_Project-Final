document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("mainNavigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen.toString()
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        });
    }

    // Portfolio message interaction
    const messageButton = document.getElementById("messageButton");
    const portfolioMessage = document.getElementById("portfolioMessage");

    if (messageButton && portfolioMessage) {
        messageButton.addEventListener("click", function () {

            portfolioMessage.textContent =
                "Thank you for visiting my portfolio. I am continuing to build my skills in cybersecurity, web development, and technology.";

        });
    }

    // Project filtering
    const filterButtons = document.querySelectorAll(".filter-button");
    const projectCards = document.querySelectorAll(".project-card");
    const filterStatus = document.getElementById("filterStatus");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            let visibleProjects = 0;

            projectCards.forEach(function (card) {

                const category = card.dataset.category;

                if (
                    selectedFilter === "all" ||
                    category === selectedFilter
                ) {
                    card.classList.remove("hidden");
                    visibleProjects++;
                } else {
                    card.classList.add("hidden");
                }

            });

            if (filterStatus) {
                filterStatus.textContent =
                    visibleProjects +
                    " projects are currently displayed.";
            }

        });
    });

    // Automatically update copyright year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});