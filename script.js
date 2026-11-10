let nombreInvitado = "Compañero de Trabajo";

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('invitado')) {
        nombreInvitado = urlParams.get('invitado');
        document.getElementById('mostrarNombreInvitado').textContent = nombreInvitado;
    }

    const musica = document.getElementById('musicaFondo');
    if (musica) {
        musica.pause();
        musica.currentTime = 0;
    }
});

function abrirSobreConMusica() {
    const sup = document.getElementById('sobreSuperior');
    const izq = document.getElementById('sobreIzquierda');
    const der = document.getElementById('sobreDerecha');
    const sello = document.getElementById('contenedorSello');
    const tarjetaInterior = document.getElementById('tarjetaInterior');
    const musica = document.getElementById('musicaFondo');

    if (musica) {
        musica.currentTime = 0;
        musica.play().catch(error => {
            console.log("Audio prevenido por el navegador:", error);
        });
    }

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

function toggleMusica() {
    const musica = document.getElementById('musicaFondo');
    const btnAudio = document.getElementById('btnAudio');

    if (musica.paused) {
        musica.play();
        btnAudio.textContent = "🎵";
    } else {
        musica.pause();
        btnAudio.textContent = "🔇";
    }
}

function enviarWhatsApp() {
    const telefono = "524442152155";
    const texto = `¡Hola! Soy ${nombreInvitado}. Confirmo mi asistencia al cuartel general para la reunión del 20 de noviembre en casa de Lupita, en Villa de Zaragoza. ¡Nos vemos por allá! 🇲🇽✨`;
    const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(urlWhatsApp, '_blank');
}