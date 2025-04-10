// Mostrar menú de Encuentro Privado después de presionar Versus
document.getElementById('btn-versus').addEventListener('click', () => {
    document.getElementById('menu-encuentro').classList.remove('hidden');
});

// Mostrar menú privado y mazos después de presionar Encuentro Privado
document.getElementById('btn-privado').addEventListener('click', () => {
    document.getElementById('menu-privado').classList.remove('hidden');
    document.getElementById('mazos-section').classList.remove('hidden');
});

// Mostrar/ocultar contraseña
document.getElementById('togglePassword').addEventListener('click', () => {
    const input = document.getElementById('password');
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    document.getElementById('togglePassword').textContent = isPassword ? '卐' : '👁️';
});

// Confirmar elección de mazo
document.getElementById('confirmar-mazo').addEventListener('click', () => {
    const mazo = document.getElementById('mazo-select').value;
    alert(`Mazo seleccionado: ${mazo}`);
});

// Cargar Pokémon flotantes desde la PokeAPI
async function cargarPokemonFondo(cantidad = 20) {
    const container = document.getElementById('pokemon-background');

    for (let i = 0; i < cantidad; i++) {
        const id = Math.floor(Math.random() * 151) + 1;
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            const img = document.createElement('img');
            img.src = data.sprites.front_default;
            img.style.top = `${Math.random() * 80 + 5}%`;
            img.style.left = `${Math.random() * 90}%`;
            img.style.animationDuration = `${8 + Math.random() * 5}s`;
            container.appendChild(img);
        } catch (err) {
            console.error('Error al cargar Pokémon:', err);
        }
    }
}

window.onload = () => {
    cargarPokemonFondo();
};

