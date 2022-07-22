
var cv = document.getElementById("cv")
var profile = document.getElementById("profile")
var logo = document.getElementById("logo")
var icon = document.getElementById("icon")
var icon = document.getElementById("icon")
var color_scheme = document.getElementById("color-scheme")

if(window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.getElementById('toggle-off').checked = true;
    document.body.classList.add('dark-mode');
    cv.src = "Bertagnoli_CV_dark.svg";
    logo.src = "logo2_light.svg";
    icon.href = "logo2_light.png";
    profile.src = 'Profile_blue.png';
    color_scheme.content = 'dark'
  }
function nm(val) {
  if(val=="false") {
document.body.classList.remove('dark-mode');
cv.src = "Bertagnoli_CV.svg";
logo.src = "logo2.svg";
// icon.href = "logo2.png";
profile.src = 'Profile_pink.png';
color_scheme.content = 'light'


}
else{
document.body.classList.add('dark-mode');
cv.src = "Bertagnoli_CV_dark.svg";
logo.src = "logo2_light.svg";
// icon.href = "logo2_light.png";
profile.src = 'Profile_blue.png';
color_scheme.content = 'dark'
}
}
