document.getElementById("menu-toggle").addEventListener("click", function() {
    var nav = document.querySelector("nav");
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});
