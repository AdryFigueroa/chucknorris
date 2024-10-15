const fraseContainer = document.getElementById('frase');
const button = document.getElementById('otraFrase');

async function fetchFrase() {
    try {
        const respuesta = await fetch('https://api.chucknorris.io/jokes/random');
        const { value: frase } = await respuesta.json();
        return frase;
    } catch (error) {
        console.error('Error al obtener la frase:', error);
        return 'No se pudo cargar la frase. Por favor, intenta de nuevo.';
    }
};

async function getFrase() {
    fraseContainer.textContent = 'Cargando...';
    const nuevaFrase = await fetchFrase();
    fraseContainer.textContent = nuevaFrase;
};

button.addEventListener('click', getFrase);

// Cargar una frase al iniciar la página
getFrase();


