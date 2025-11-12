function musica() {
    document.getElementById('menu').src = "musicaMenu.mp3";
    document.getElementById('menu').src = "sawgame.mp3";
}

function moveToInventory(element) {
    // Obtener el contenedor del inventario
    const inventory = document.getElementById('inventory');

    // Crear un nuevo espacio en el inventario
    const slot = document.createElement('div');
    slot.className = 'inventory-item';

    // Copiar la imagen del elemento
    const img = element.querySelector('img').cloneNode(true);
    img.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';

    // Añadir la imagen al espacio y el espacio al inventario
    slot.appendChild(img);
    inventory.appendChild(slot);

    // Guarda en localStorage
    const src = img.getAttribute('src');
    let currentInventory = JSON.parse(localStorage.getItem('inventoryItems')) || [];
    currentInventory.push(src);
    localStorage.setItem('inventoryItems', JSON.stringify(currentInventory));

    // Ocultar el elemento original
    element.style.display = 'none';
}
function cargarInventario() {
    const inventory = document.getElementById('inventory');
    const savedItems = JSON.parse(localStorage.getItem('inventoryItems')) || [];

    savedItems.forEach(src => {
        const slot = document.createElement('div');
        slot.className = 'inventory-item';

        const img = document.createElement('img');
        img.src = src;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';

        slot.appendChild(img);
        inventory.appendChild(slot);
    });
}

function screamer() {
    document.getElementById('trampa1').addEventListener('click', function () {
        var freddyfivenight = document.getElementById('FreddyFiveNight');
        freddyfivenight.play();
        location.reload();
    });
}

function regresaAHabitacionAnterior() {
    document.getElementById('habitacion').src = "";
    // Poned aqui la habitacion anterior :(
}

function Musica() {
    const musica = new Audio('sawgame.mp3');
    musica.loop = true;
    musica.volume = 1.0;
}