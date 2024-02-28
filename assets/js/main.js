

function jugarCachipun(veces) {
    for (let i = 0; i < veces; i++) {

        const jugadaUsuario = prompt("Elige tu jugada escribe: piedra, papel o tijera):").toLowerCase();

        const opciones = ["piedra", "papel", "tijera"];
        const jugadaMaquina = opciones[Math.floor(Math.random() * 3)];

        let resultado = "";

        if (jugadaUsuario === jugadaMaquina) {
            resultado = "Empate";
        } else if (
            (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
            (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
            (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
        ) {
            resultado = "¡Felicidades! Ganaste";
        } else {
            resultado = "Perdiste contra la máquina";
        }


        document.write(`<h3>Tu jugada: ${jugadaUsuario}</h3>`);
        document.write(`<h3>Jugada de la máquina: ${jugadaMaquina}</h3>`);
        document.write(`<h3>Resultado: ${resultado}</h3>`);
        document.write("<hr>");
    }
}

const vecesJugar = parseInt(prompt("¿Cuántas veces deseas jugar?"));
jugarCachipun(vecesJugar);

