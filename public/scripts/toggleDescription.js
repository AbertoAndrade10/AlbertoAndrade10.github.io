document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const shortDesc = card.querySelector(".short-description");
    const fullDesc = card.querySelector(".full-description");
    const toggleBtn = card.querySelector(".toggle-description");

    if (shortDesc && fullDesc && toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isExpanded = !fullDesc.classList.contains("hidden");

        shortDesc.classList.toggle("hidden", !isExpanded);
        fullDesc.classList.toggle("hidden", isExpanded);
        toggleBtn.textContent = isExpanded ? "Ver más..." : "Mostrar menos...";
      });
    }
  });
});
