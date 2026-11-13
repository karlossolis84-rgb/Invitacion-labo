let nombreInvitado = "Compañero de Trabajo";

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('invitado')) {
        nombreInvitado = urlParams.get('invitado');
        const elNombre = document.getElementById('mostrarNombreInvitado');
        if (elNombre) {
            elNombre.textContent = nombreInvitado;
        }
    }

    iniciarContador();
});

function abrirSobre() {
    const sup = document.getElementById('sobreSuperior');
    const izq = document.getElementById('sobreIzquierda');
    const der = document.getElementById('sobreDerecha');
    const sello = document.getElementById('contenedorSello');
    const tarjetaInterior = document.getElementById('tarjetaInterior');
    const musica = document.getElementById('musicaFondo');

    if (sup) sup.classList.add('abrir-arriba');
    if (izq) izq.classList.add('abrir-izq');
    if (der) der.classList.add('abrir-der');
    if (sello) sello.classList.add('desvanecer-centro');

    setTimeout(() => {
        if (sello) sello.style.display = 'none';
        if (tarjetaInterior) tarjetaInterior.classList.remove('oculto');
    }, 550);

    try {
        if (musica) {
            musica.currentTime = 0;
            const promesaPlay = musica.play();
            if (promesaPlay !== undefined) {
                promesaPlay.catch(() => {});
            }
        }
    } catch (e) {}
}

function entrarInvitacionPrincipal() {
    const pantallaInicial = document.getElementById('pantallaInicial');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');
    const musica = document.getElementById('musicaFondo');

    if (pantallaInicial) pantallaInicial.classList.add('oculto');
    if (contenidoPrincipal) contenidoPrincipal.classList.remove('oculto');
    window.scrollTo(0, 0);

    try {
        if (musica && musica.paused) {
            musica.play().catch(() => {});
        }
    } catch (e) {}
}

function iniciarContador() {
    const fechaEvento = new Date("2026-11-20T15:30:00-06:00").getTime();

    function actualizar() {
        const ahora = new Date().getTime();
        const diferencia = fechaEvento - ahora;

        const elDias = document.getElementById('dias');
        const elHoras = document.getElementById('horas');
        const elMinutos = document.getElementById('minutos');
        const elSegundos = document.getElementById('segundos');

        if (!elDias || !elHoras || !elMinutos || !elSegundos) return;

        if (diferencia <= 0) {
            elDias.textContent = "00";
            elHoras.textContent = "00";
            elMinutos.textContent = "00";
            elSegundos.textContent = "00";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        elDias.textContent = dias < 10 ? "0" + dias : dias;
        elHoras.textContent = horas < 10 ? "0" + horas : horas;
        elMinutos.textContent = minutos < 10 ? "0" + minutos : minutos;
        elSegundos.textContent = segundos < 10 ? "0" + segundos : segundos;
    }

    actualizar();
    setInterval(actualizar, 1000);
}

function enviarWhatsApp() {
    const telefono = "524446871367"; 

    const texto = `¡Hola! Soy ${nombreInvitado}. Confirmo mi asistencia para la reunión de Laboratorio R&D en Rancho La libertad, casa de Adelita (Liliana Limón), Calle Ignacio Zaragoza, Privada Olmo #178, Colonia Quintas de la Hacienda 2, el 20 de noviembre a las 3:30 PM. ¡Nos vemos por allá! 🇲🇽✨`;
    
    const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(urlWhatsApp, '_blank');
}
