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

    // Limpia el formulario si se vuelve a la página
    window.onpageshow = (event) => {
        if (event.persisted) { // Verifica si la página fue restaurada desde el caché del navegador
            form.reset(); // Limpia el formulario
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío automático del formulario

        const nombre = form.querySelector('input[name="nombre"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const numero = form.querySelector('input[name="numero"]').value.trim();
        const descripcion = form.querySelector('input[name="descripcion"]').value.trim();

        if (!nombre || !email || !numero || !descripcion) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        // Envía el formulario a Formspree
        fetch(form.action, {
            method: form.method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(new FormData(form)).toString(),
        })
        .then(response => {
            if (response.ok) {
                alert("Formulario enviado exitosamente");
                form.reset(); // Limpia el formulario después de enviarlo
            } else {
                alert("Error al enviar el formulario");
            }
        })
        .catch(error => {
            alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
            console.error(error);
        });
    });
});
