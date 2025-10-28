// Fungsi untuk mendapatkan parameter dari URL
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Mengambil parameter dari URL
const kelasParam = getURLParameter("kelas") || "6A";
const sekolahParam = getURLParameter("sekolah") || "SD Harapan Bangsa";
const guruParam = getURLParameter("guru") || "Pak Putra";

// Update semua elemen dengan nilai dari URL
document.getElementById("kelasName").textContent = kelasParam;
document.getElementById("sekolahName").textContent = sekolahParam;
document.getElementById("guruName").textContent = guruParam;
document.getElementById("guruNameSign").textContent = guruParam;
document.getElementById("guruNameAbout").textContent = guruParam;
document.getElementById("guruNameFooter").textContent = guruParam;

// Update title halaman
document.title = `Kenangan Kita - Kelas ${kelasParam}`;

// Smooth scroll ke form saat tombol diklik
document.getElementById("scrollToForm").addEventListener("click", function () {
  const formSection = document.getElementById("messageForm");
  formSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Menampilkan tahun otomatis di footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Back to top button functionality
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animasi fade-in untuk elemen saat scroll (opsional)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Animasi untuk semua card dan section
document.querySelectorAll(".card, .timeline-card").forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(element);
});
