// Declaracion de variable
let slideIndex = 1;
// Funcion para mostrar la primera imagen
showSlides(slideIndex);

// Función para avanzar y retroceder
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función para seleccionar una imagen especifica
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Funcion para mostrar la primera imagen
function showSlides(n) {
  let i; // Variable para los bules
  let slides = document.getElementsByClassName("mySlides"); // Obtiene las imagenes con la clase mySlides
  let navimages = document.getElementsByClassName("navimage"); // Obtiene las imagenes del nav-slider con la clase navimage
  if (n > slides.length) {slideIndex = 1} // Verifica si el numero de la imagen esta afuera de los limites para volver a la primera o a laultima imagen
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { // Oculta las diapositivas
    slides[i].style.display = "none";
  }
  for (i = 0; i < navimages.length; i++) { // Recorre las imagenes del nav-slider para poder desactivar la clase active
    navimages[i].className = navimages[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; // Muestra la imagen actual
  navimages[slideIndex-1].className += " active"; // Resalta la imagen activa
}