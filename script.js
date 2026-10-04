const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});


const bookingModal = document.querySelector("#bookingModal");
const bookingForm = document.querySelector("#bookingForm");


document.querySelectorAll("[data-open-booking]").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    bookingModal?.classList.add("show");
    bookingModal?.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    bookingModal?.querySelector("input[name='fullName']")?.focus();
  });
});

document.querySelectorAll('a[href="#contact"].nav-cta').forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    bookingModal?.classList.add("show");
    bookingModal?.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    bookingModal?.querySelector("input[name='fullName']")?.focus();
  });
});

document.querySelectorAll("[data-close-booking]").forEach(element => {
  element.addEventListener("click", () => {
    bookingModal?.classList.remove("show");
    bookingModal?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bookingModal?.classList.contains("show")) {
    bookingModal.classList.remove("show");
    bookingModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(bookingForm);
  const subject = "Booking request - " + (data.get("fullName") || "");
  const body = [
    "Full Name: " + (data.get("fullName") || ""),
    "Email: " + (data.get("email") || ""),
    "Phone / WhatsApp: " + (data.get("phone") || ""),
    "Mode of Consultation: " + (data.get("mode") || ""),
    "Preferred Date: " + (data.get("date") || ""),
    "Preferred Time: " + (data.get("time") || "Not specified"),
    "Concern / Reason: " + (data.get("concern") || "Not provided")
  ].join("\n");

  window.location.href =
    "mailto:ajabprimuswala@gmail.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
});
