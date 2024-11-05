import promptSync from 'prompt-sync';
const prompt = promptSync();

const adivinaJuego = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    
    console.log('Bienvenido al juego de adivinar el número.');
    const nivelDificultad = prompt('Ingrese el nivel de dificultad (facil, medio, dificil): ').toLowerCase();
    
    const facil = 10;
    const medio = 5;
    const dificil = 3;

    let maxIntentos = 0;


    if (nivelDificultad === 'facil') {
        maxIntentos = facil;
    } else if (nivelDificultad === 'medio') {
        maxIntentos = medio;
    } else if (nivelDificultad === 'dificil') {
        maxIntentos = dificil;
    } else {
        console.log('Dificultad no válida, se establecerá a "facil" por defecto.');
        maxIntentos = facil;
    }

    while (intentos < maxIntentos) {
        const adivinaNumero = parseInt(prompt('Adivina el número entre 1 y 100: '));

        if (adivinaNumero === numeroAleatorio) {
            console.log(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos + 1} intentos.`);
            break;
        } else if (adivinaNumero < numeroAleatorio) {
            console.log('Demasiado bajo. Intenta de nuevo.Te quedan ' + (maxIntentos - intentos - 1) + ' intentos');
        } else if (adivinaNumero > numeroAleatorio) {
            console.log('Demasiado alto. Intenta de nuevo.Te quedan ' + (maxIntentos - intentos - 1) + ' intentos');
        }

        intentos++;

        if (intentos === maxIntentos) {
            console.log(`Se te acabaron los intentos. El número correcto era ${numeroAleatorio}.`);
        }
    }
}


const iniciarJuego = () => {
    adivinaJuego();
    const jugarDeNuevo = prompt('¿Quieres jugar de nuevo? (si/no): ').toLowerCase();
    if (jugarDeNuevo === 'si') {
        iniciarJuego();
    } else {
        console.log('¡Gracias por jugar!');
    }
}

iniciarJuego();
