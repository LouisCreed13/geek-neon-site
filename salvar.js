document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.borderColor = "#00fff7";
    });

    card.addEventListener("mouseout", () => {
      card.style.borderColor = "#9d00ff";
    });
  });
});
