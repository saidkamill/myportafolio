// main.js - small behaviors

// set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
});
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("viewAllBtn");
  const hiddenItems = document.querySelectorAll(".extra-work");
  let expanded = false;

  btn.addEventListener("click", () => {
    hiddenItems.forEach(item => {
      item.classList.toggle("hidden");
    });
    expanded = !expanded;
    btn.textContent = expanded ? "Show Less" : "View All";
  });
});
