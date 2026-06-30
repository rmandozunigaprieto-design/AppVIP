let corazones = 0;

function tocarCorazon() {
    corazones++;
    document.getElementById('contador').innerText = corazones;
    
    // Efecto visual: si llega a 50, que mande un mensaje especial
    if (corazones === 50) {
        alert("¡Wow! Me amas demasiado, mi vida ❤️");
    }
}