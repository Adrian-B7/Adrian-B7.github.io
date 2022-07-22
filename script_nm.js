
var cv = document.getElementById("cv")
var profile = document.getElementById("profile")
var logo = document.getElementById("logo")
var icon = document.getElementById("icon")
var icon = document.getElementById("icon")

function nm(val) {
  if(val=="false") {
document.body.classList.remove('dark-mode');
cv.data = "Bertagnoli_CV.svg";
logo.data = "logo2.svg";
icon.href = "logo2.png";
profile.src = 'Profile_pink.png';
document.documentElement.setAttribute('color-scheme', 'light');


}
else{
document.body.classList.add('dark-mode');
cv.data = "Bertagnoli_CV_dark.svg";
logo.data = "logo2_light.svg";
icon.href = "logo2_light.png";
profile.src = 'Profile_blue.png';
document.documentElement.setAttribute('color-scheme', 'dark');
}
}
