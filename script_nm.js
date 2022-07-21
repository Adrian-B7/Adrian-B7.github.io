
var cv = document.getElementById("cv")
var profile = document.getElementById("profile")
var logo = document.getElementById("logo")
function nm(val) {
  if(val=="false") {
document.body.classList.remove('dark-mode');
cv.data = "Bertagnoli_CV.svg";
logo.data = "logo2.svg";
profile.src = 'Profile_pink.png';

}
else{
document.body.classList.add('dark-mode');
cv.data = "Bertagnoli_CV_dark.svg";
logo.data = "logo2_light.svg";
profile.src = 'Profile_blue.png';
}
}
