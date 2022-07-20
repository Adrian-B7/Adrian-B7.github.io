$(".theme-switch").on("click", () => {
    $("body").toggleClass("dark-mode");
    var elem = document.getElementById("night_mode");
    if (elem.innerHTML=="Dark Mode") elem.innerHTML = "Light Mode";
    else elem.innerHTML = "Dark Mode";
  });