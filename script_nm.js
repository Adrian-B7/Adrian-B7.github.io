$(".theme-switch").on("click", () => {
    $("body").toggleClass("dark-mode");
    var elem = document.getElementById("night_mode");
    if (elem.innerHTML=="Dark Mode") elem.innerHTML = "Light Mode";
    else elem.innerHTML = "Dark Mode";
    var logo = document.getElementById("logo");
    if (logo.getAttribute('data') == "logo2.svg") logo.data = "logo2_light.svg";
    else logo.data = "logo2.svg";
    var cv = document.getElementById("cv");
    if (cv.getAttribute('data') == "Bertagnoli_CV.svg") cv.data = "Bertagnoli_CV_dark.svg";
    else cv.data = "Bertagnoli_CV.svg";
  });