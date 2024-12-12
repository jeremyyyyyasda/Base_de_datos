// Obtener todos los elementos de proyecto
const projects = document.querySelectorAll('.project');
const projectWrapper = document.querySelector('.project-wrapper');

// Función que mantiene la rotación de todos los proyectos y agrega el zoom a la imagen actual
projects.forEach(project => {
  const projectImage = project.querySelector('img');

  // Pausar la rotación global cuando el mouse está sobre la imagen
  project.addEventListener('mouseover', () => {
    // Pausar la animación de rotación global
    projectWrapper.style.animationPlayState = 'paused';

    // Aumenta el zoom en la imagen al pasar el mouse
    projectImage.style.transform = 'scale(1.2) rotateY(15deg)'; // Zoom incrementado
  });

  // Restaurar la animación y tamaño cuando el mouse sale de la imagen
  project.addEventListener('mouseout', () => {
    // Reanudar la animación de rotación global
    projectWrapper.style.animationPlayState = 'running';

    // Restaurar el tamaño normal cuando el mouse sale de la imagen
    projectImage.style.transform = 'scale(1) rotateY(0deg)';
  });
});

// Esta función se llama cuando se hace clic en uno de los proyectos
function loadProject(page) {
  // Usamos Fetch para cargar el contenido del proyecto
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el proyecto');
      }
      return response.text();
    })
    .then(data => {
      // Insertamos el contenido cargado en un div de tu página
      const projectContainer = document.querySelector("#proyectos");
      projectContainer.innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Función para hacer scroll suave a una sección
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección
  }
}