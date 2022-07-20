$(".theme-switch").on("click", () => {
    $("body").toggleClass("dark-mode");
    var elem = document.getElementById("night_mode");
    if (elem.innerHTML=="Dark Mode") elem.innerHTML = "Light Mode";
    else elem.innerHTML = "Dark Mode";
    var logo = document.getElementById("logo");
    if (logo.getAttribute('data') == "logo2.svg") logo.data = "logo2_light.svg";
    else logo.data = "logo2.svg";
  });