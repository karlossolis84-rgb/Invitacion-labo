let nombreInvitado = "Compañero de Trabajo";

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('invitado')) {
        nombreInvitado = urlParams.get('invitado');
        document.getElementById('mostrarNombreInvitado').textContent = nombreInvitado;
    }
});

function abrirSobre() {
    const sup = document.getElementById('sobreSuperior');
    const izq = document.getElementById('sobreIzquierda');
    const der = document.getElementById('sobreDerecha');
    const sello = document.getElementById('contenedorSello');
    const tarjetaInterior = document.getElementById('tarjetaInterior');

    if (sup && izq && der && sello) {
        sup.classList.add('abrir-arriba');
        izq.classList.add('abrir-izq');
        der.classList.add('abrir-der');
        sello.classList.add('desvanecer-centro');
    }

    setTimeout(() => {
        sello.style.display = 'none';
        tarjetaInterior.classList.remove('oculto');
    }, 600);
}

function entrarInvitacionPrincipal() {
    const pantallaInicial = document.getElementById('pantallaInicial');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');

    pantallaInicial.classList.add('oculto');
    contenidoPrincipal.classList.remove('oculto');
}

function enviarWhatsApp() {
    const telefono = "524446871367"; 

    const texto = `¡Hola! Soy ${nombreInvitado}. Confirmo mi asistencia para la reunión de Laboratorio R&D en Rancho La libertad, casa de Adelita (Liliana Limón) el 20 de noviembre. ¡Nos vemos por allá! 🇲🇽✨`;
    
    const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(urlWhatsApp, '_blank');
}