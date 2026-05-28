const languageButtons = document.querySelectorAll("[data-set-lang]");
const year = document.querySelector("#year");

function setLanguage(language) {
  document.body.dataset.lang = language;
  document.documentElement.lang = language;
  document.title =
    language === "es"
      ? "Eugenio G. Garza Garza | Sitio académico"
      : "Eugenio G. Garza Garza | Academic Website";

  languageButtons.forEach((button) => {
    const isActive = button.dataset.setLang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("preferred-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.setLang);
  });
});

const storedLanguage = localStorage.getItem("preferred-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
setLanguage(storedLanguage || browserLanguage);

if (year) {
  year.textContent = new Date().getFullYear();
}
