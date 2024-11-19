function toggleMenu() {
  var button = document.querySelector(".gg-menu-oreos");
  button.classList.toggle("gg-close");

  var menu = document.getElementsByClassName("js-menu");
  menu[0].classList.toggle("active");
}

function fixPhotoOnScroll() {
  var photo = document.getElementById("photo-profile");
  this.scrollY > 50
    ? (photo.style.marginTop = "0")
    : (photo.style.marginTop = "-7rem");
}

window.addEventListener("scroll", fixPhotoOnScroll, false);

/*function showImage(image){
  var newImage = document.createElement('img');
  newImage.src = image.src;
  newImage.removeAttribute('onclick');
  var modal = document.getElementById('preview');
  modal.classList.toggle('showModal');
  modal.appendChild(newImage);
}*/

function showImage(image) {
  var newImage = document.createElement("img");
  newImage.src = image.src;
  newImage.removeAttribute("onclick");
  var modal = document.getElementById("preview");
  modal.classList.toggle("showModal");
  var existingImage = modal.querySelector("img");
  if (existingImage) {
    modal.removeChild(existingImage);
  }
  modal.appendChild(newImage);
}

function closeModal() {
  var modal = document.getElementById("preview");
  modal.classList.remove("showModal");
}

/*document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark', themeSwitch.checked);
  });

});*/

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");
  themeSwitch.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("dark");
    themeSwitch.textContent = document.body.classList.contains("dark")
      ? "Modo Claro"
      : "Modo Oscuro";
  });
});
