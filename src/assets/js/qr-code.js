// Seleziono gli elementi dal DOM
const wrapper = document.querySelector('.wrapper');
const input = wrapper.querySelector('input');
const button = wrapper.querySelector('button');
const img = wrapper.querySelector('img');

// Aggiungo un event listener all'elemento img per l'evento 'load'
img.addEventListener('load', () => {
    // Aggiungo la classe 'active' al wrapper quando l'immagine è caricata
    wrapper.classList.add('active');
    // Cambio il testo del pulsante a 'Generate QR Code'
    button.innerText = 'Generate QR Code';
});

// Aggiungo un event listener all'elemento button per l'evento 'click'
button.addEventListener('click', () => {
    // Ottengo il valore dell'input e rimuovo eventuali spazi bianchi
    const value = input.value.trim();
    if (!value) {
        // Se l'input è vuoto, cambio temporaneamente il testo del pulsante per avvisare l'utente
        const originalText = button.innerText;
        button.innerText = 'Inserisci URL Prima';
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000); // Ripristino il testo originale dopo 2 secondi
    } else {
        // Se l'input non è vuoto, cambio il testo del pulsante per indicare che il QR Code è in creazione
        button.innerText = 'Creando il tuo QR Code...';
        // Imposto l'URL dell'immagine per generare il QR Code utilizzando un servizio esterno
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`;
    }
});

// Aggiungo un event listener all'elemento input per l'evento 'keyup'
input.addEventListener('keyup', () => {
    // Se l'input è vuoto, rimuovo la classe 'active' dal wrapper
    if (!input.value.trim()) {
        wrapper.classList.remove('active');
    }
});
