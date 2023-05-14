/**
 * Light-Dark Mode Implementation
 */
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", function () {
    const cssFile = document.getElementById("css-file");
    const modeIcon = document.getElementById("mode-icon");
    if (cssFile.href.endsWith("light.css")) {
        cssFile.href = "dark.css";
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
    } else {
        cssFile.href = "light.css";
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
    }
});

