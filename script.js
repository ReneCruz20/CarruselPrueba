const equipo = [
  { nombre: "Juan Pérez", rol: "Backend", foto: "foto1.webp" },
  { nombre: "María López", rol: "Frontend", foto: "foto2.webp" },
  { nombre: "Luis Gómez", rol: "UX/UI", foto: "foto3.webp" },
  { nombre: "Ana Torres", rol: "Scrum Master", foto: "foto4.webp" },
  { nombre: "Pedro Sánchez", rol: "Tester", foto: "foto5.jpg" },
  { nombre: "Carmen Díaz", rol: "DevOps", foto: "foto6.jpg" },
  { nombre: "José Ruiz", rol: "Database", foto: "foto7.webp" },
  { nombre: "Laura Moreno", rol: "Mobile", foto: "foto8.webp" },
  { nombre: "Sofía Vega", rol: "Documentación", foto: "foto9.webp" },
  { nombre: "David Romero", rol: "FullStack", foto: "foto10.webp" },
  { nombre: "Valentina Ríos", rol: "Líder Técnico", foto: "foto11.webp" }
];


let currentIndex = 0;

const track = document.getElementById("carouselTrack");

// Crear todas las tarjetas una sola vez
equipo.forEach((miembro, index) => {
  const slide = document.createElement("div");
  slide.className = "carousel-slide";
  slide.innerHTML = `
    <img src="${miembro.foto}" alt="${miembro.nombre}">
    <div class="info">
      <h3>${miembro.nombre}</h3>
      <p>${miembro.rol}</p>
    </div>
  `;
  track.appendChild(slide);
});

const slides = document.querySelectorAll(".carousel-slide");

// Función para actualizar el desplazamiento
function updateCarousel() {
  const slideWidth = 220; // 200px + 2*10px margin
  const offset = ((slideWidth * currentIndex) * -1) + ((600 - slideWidth) / 2);
  track.style.transform = `translateX(${offset}px)`;

  // Reset clases
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === currentIndex) {
      slide.classList.add("active");
    }
  });
}

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % equipo.length;
  updateCarousel();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + equipo.length) % equipo.length;
  updateCarousel();
});

updateCarousel(); // inicial
