const headerSelectedLanguage = document.getElementById("headerSelectedLanguage")
const headerLanguagesContainer = document.getElementById("headerLanguagesContainer")
const headerEnglishLanguage = document.getElementById("headerEnglishLanguage")
const headerSpanishLanguage = document.getElementById("headerSpanishLanguage")

headerSelectedLanguage.addEventListener("click", () => {
    headerLanguagesContainer.style.display = headerLanguagesContainer.style.display === "flex" ? "none" : "flex";
})