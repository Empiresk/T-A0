// Attendre que le DOM soit prêt
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const boutonSuivant = document.querySelector(".bouton-suivant");

    // Afficher le logo après 2 secondes
    setTimeout(() => {
        logo.classList.remove("hidden");
        logo.classList.add("show");
    }, 2000);

    // Afficher le bouton "Suivant" 3 secondes après le logo
    setTimeout(() => {
        boutonSuivant.classList.remove("hidden");
        boutonSuivant.classList.add("show");
    }, 5000); // 2000ms pour le logo + 3000ms pour le bouton
});


