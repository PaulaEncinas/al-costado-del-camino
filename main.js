// 1. Datos de los Viajes y Hospedaje (Se utiliza un ARRAY SECUENCIAL)
const datosViajes = [
    {
        id: 1,
        destino: "Ushuaia",
        pais: "Argentina",
        imgPortada: "images/portada_ushuaia.png",
        descripcion: "Un viaje a Ushuaia es una experiencia única donde la magia del “Fin del Mundo” se siente en cada rincón: entre montañas nevadas, bosques intensos y el imponente Canal Beagle. El clima suele ser frío y cambiante, ideal para disfrutar platos típicos como la centolla fresca, la merluza negra o un buen cordero fueguino. Pasear por el Parque Nacional Tierra del Fuego, hacer el paseo en el tren del fin del mundo, realizar el senderimo de la laguna esmeralda y conocer el pintoresco pueblo de Tolhuin convierte cada día en aventura, mezclando naturaleza salvaje, historia y una gastronomía que abriga el alma.",
        galeria: [
            "images/ushuaia_1.jpg",
            "images/ushuaia_2.jpg",
            "images/ushuaia_3.jpg",
            "images/ushuaia_4.jpg",
            "images/ushuaia_5.jpg",
        ],
        hospedaje: {
            nombre: "Cabañas Ushuaia Magnifica",
            resena: "Ushuaia Magnífica ofrece departamentos modernos y totalmente equipados, con vistas increíbles y una ubicación ideal para disfrutar la ciudad más austral del mundo. Cada unidad cuenta con cocina completa, Wi-Fi, calefacción y espacios amplios pensados para una estadía cómoda y relajada. Perfecto para parejas, familias o viajeros que buscan independencia, confort y una experiencia auténtica en Ushuaia.",
            imgHotel: "images/portada_hospedaje_ushuaia_maginifica.png",
            urlWeb: "https://www.interpatagonia.com/ushuaia/departamentos-ushuaia-magnifica.html"
        }
    },
    {
        id: 2,
        destino: "Salta",
        pais: "Argentina",
        imgPortada: "images/portada_salta.png",
        descripcion: "Un viaje a Salta combina sabores auténticos, paisajes coloridos y una calidez que se siente en el clima y en su gente. Entre cerros rojizos, valles verdes y cielos despejados, la provincia invita a probar empanadas salteñas, locro, tamales y una copa de buen vino torrontés. Lugares imperdibles como el Cerro San Bernardo, las Salinas Grande de Jujuy, la Quebrada de Humahuaca y el famoso Tren a las Nubes ofrecen una mezcla única de cultura, historia y naturaleza que hace que cada día se sienta especial.",
        galeria: [
            "images/salta_1.jpg",
            "images/salta_2.jpg",
            "images/salta_3.jpg",
            "images/salta_4.jpg",
            "images/salta_5.jpg",
        ],
        hospedaje: {
            nombre: "Las Rejas Hostel",
            resena: "Las Rejas Hostel es un hospedaje céntrico y económico en pleno corazón de Salta, a pasos de la Plaza 9 de Julio. Ubicado en una casona colonial, combina ambiente relajado con espacios cómodos: cocina compartida, Wi-Fi gratis, recepción 24 h y desayuno simple cada mañana. Ideal para mochileros y viajeros que buscan buena ubicación, calidez y una experiencia auténtica en la ciudad.",
            imgHotel: "images/portada_hospedaje_salta_las_rejas_hostel.png",
            urlWeb: "https://las-rejas-hostel.saltahotelsweb.com/es/",
        }
    },
    {
        id: 3,
        destino: "Río de Janeiro",
        pais: "Brasil",
        imgPortada: "images/portada_rio_de_janeiro.png",
        descripcion: "Un viaje a Río de Janeiro es pura energía, entre playas doradas, selva tropical y música que se siente en el aire. El clima es cálido y húmedo, ideal para disfrutar caipirinhas, feijoada, frutos de mar frescos y los clásicos pão de queijo. Conocer el Cristo Redentor, subir al Pan de Azúcar, pasear por Copacabana e Ipanema o recorrer la bohemia Santa Teresa convierte cada día en una mezcla vibrante de paisajes increíbles, cultura carioca y sabores que enamoran.",
        galeria: [
            "images/rio_de_janeiro_1.jpg",
            "images/rio_de_janeiro_2.jpg",
            "images/rio_de_janeiro_3.jpg",
            "images/rio_de_janeiro_4.jpg",
            "images/rio_de_janeiro_5.jpeg",
        ],
        hospedaje: {
            nombre: "Hospedaria Rio",
            resena: "Una mansión colonial de dos plantas completamente restaurada , diseñada para que te sientas como en casa. Aquí encontrarás mucho más que una habitación donde alojarte; tendrás la experiencia de vivir en una elegante y confortable mansión colonial.",
            imgHotel: "images/portada_hospedaje_brasil_hospedaria_rio.png",
            urlWeb: "https://www.hospedariario.com.br/",
        }
    },
    {
        id: 4,
        destino: "Cartagena",
        pais: "Colombia",
        imgPortada: "images/portada_cartagena.png",
        descripcion: "Un viaje a Cartagena es sumergirse en un mundo de colores, calor tropical y encanto colonial a orillas del Caribe. El clima es cálido y húmedo, perfecto para disfrutar platos como ceviche, arepas de huevo, pescado frito con patacones y jugos frescos de frutas tropicales. Recorrer la Ciudad Amurallada, perderse por Getsemaní, visitar el Castillo de San Felipe o relajarse en las playas de Barú y las Islas del Rosario convierte cada día en una experiencia vibrante llena de historia, sabores y paisajes paradisíacos.",
        galeria: [
            "images/cartagena_1.jpg",
            "images/cartagena_2.jpg",
            "images/cartagena_3.jpg",
            "images/cartagena_4.jpg",
            "images/cartagena_5.jpg",
        ],
        hospedaje: {
            nombre: "Casa Movida",
            resena: "Mucho más que un simple hostel Casa Movida reúne bajo un mismo techo alojamientos para estudiantes, habitaciones de hotel, espacios de coworking, dando vida a nuevo e inspirador concepto de hotelería. Así que te esperamos con los brazos abiertos, a ti… ¡y a toda la gente que conozcas!",
            imgHotel: "images/portada_hospedaje_colombia_casa_movida.png",
            urlWeb: "https://casamovidahostel.com/",
        }
    }
];

// 2. Carga Dinámica de Secciones (DOM Manipulation)
document.addEventListener('DOMContentLoaded', () => {
    cargarViajes();
    cargarHospedajes();
    inicializarValidacion();
    inicializarInteraccion();
});

function cargarViajes() {
    const contenedor = document.getElementById('viajes-container');
    
    datosViajes.forEach(viaje => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3 mb-4';
        
        col.innerHTML = `
            <div class="card card-viaje h-100" onclick="abrirModal(${viaje.id})">
                <img src="${viaje.imgPortada}" class="card-img-top" alt="${viaje.destino}">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold text-tierra">${viaje.destino}</h5>
                    <p class="card-text text-muted"><small>${viaje.pais}</small></p>
                    <button class="btn btn-sm btn-outline-success mt-2">Ver Fotos</button>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

function cargarHospedajes() {
    const contenedor = document.getElementById('hospedaje-container'); 
    
    datosViajes.forEach(viaje => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-3';
        
        col.innerHTML = `
            <div class="card h-100 border-success mb-3" style="max-width: 540px;">
                <div class="row g-0 h-100">
                    <div class="col-md-5">
                        <img src="${viaje.hospedaje.imgHotel}" class="img-fluid rounded-start h-100" style="object-fit:cover; min-height: 200px; width: 100%;" alt="Hospedaje en ${viaje.destino}">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body d-flex flex-column h-100 justify-content-center">
                            <h5 class="card-title">
                                <a href="${viaje.hospedaje.urlWeb}" target="_blank" class="text-decoration-none text-success fw-bold">
                                    ${viaje.hospedaje.nombre} <i class="fas fa-external-link-alt fa-xs"></i>
                                </a>
                            </h5>
                            <p class="card-text"><small class="text-muted">En ${viaje.destino}</small></p>
                            <p class="card-text small">${viaje.hospedaje.resena}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

// 3. Funcionalidad del Modal y Carrusel
window.abrirModal = function(id) {
    const viaje = datosViajes.find(v => v.id === id);
    if (!viaje) return;

    // Llenar textos
    document.getElementById('modalTitle').innerText = viaje.destino;
    document.getElementById('modalDesc').innerText = viaje.descripcion;

    // Llenar Carrusel
    const carouselContainer = document.getElementById('carousel-inner-container');
    carouselContainer.innerHTML = '';

    viaje.galeria.forEach((imgUrl, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `<img src="${imgUrl}" class="d-block w-100" alt="Foto ${index + 1} de ${viaje.destino}">`;
        carouselContainer.appendChild(div);
    });

    // Mostrar Modal (Bootstrap API)
    const modalElement = document.getElementById('viajeModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
};

// 4. Interactividad Extra (Mostrar/Ocultar). Boton "Más curiosidades"
function inicializarInteraccion() {
    const btn = document.getElementById('toggle-more-info');
    const content = document.getElementById('more-info');
    
    btn.addEventListener('click', () => {
        content.classList.toggle('d-none');
        btn.textContent = content.classList.contains('d-none') ? "Más curiosidades" : "Ocultar curiosidades";
    });
}

// 5. Validación de Formulario
function inicializarValidacion() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity()) {
            alert("¡Mensaje enviado con éxito! Gracias por escribir.");
            form.reset();
            form.classList.remove('was-validated');
        } else {
            form.classList.add('was-validated');
        }
    }, false);
}