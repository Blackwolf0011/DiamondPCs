let navbar = document.querySelector('.navbar');

// Manejo del menú de navegación
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Manejo del envío del formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-register');

    form.addEventListener('submit', (event) => {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Realiza una validación simple de los campos
        const nombre = form.querySelector('input[name="nombre"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const numero = form.querySelector('input[name="numero"]').value.trim();
        const descripcion = form.querySelector('input[name="descripcion"]').value.trim();

        if (!nombre || !email || !numero || !descripcion) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        // Si la validación pasa, envía el formulario
        form.submit();
    });
});
