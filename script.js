function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  document.getElementById("navMenu").classList.remove("show");
}

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
