// ============================================
// BLOOMVOYAGE - DATOS DE DESTINOS
// Información completa de todos los destinos
// ============================================

const destinationsData = {
    'san-blas': {
        id: 'san-blas',
        name: 'San Blas',
        location: 'Panamá',
        description: 'San Blas, también conocida como Guna Yala, es un archipiélago caribeño en Panamá compuesto por más de 365 islas e islotes de arena blanca, aguas cristalinas y palmeras, hogar autónomo del pueblo Guna que ha preservado sus tradiciones ancestrales durante siglos. Su historia se remonta a unos 500 años atrás, cuando los Guna migraron desde el Darién continental hacia estas islas para escapar de conflictos, consolidando su autonomía tras la Revolución Guna de 1925 liderada por Nele Kantule, que resultó en la creación oficial de la comarca en 1938. Este paraíso pristino ofrece una inmersión única en la naturaleza y la cultura indígena, lejos de hoteles masivos y con un enfoque en el turismo sostenible.​',
        history: 'San Blas es un archipiélago de 365 islas ubicado en el Caribe panameño, habitado por la comunidad indígena Guna. Estas islas han mantenido su cultura tradicional y belleza natural intacta durante siglos. Las islas son conocidas por sus aguas turquesas, playas de arena blanca y la hospitalidad de la comunidad Guna.',
        images: [
            { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', alt: 'Islas de San Blas' },
            { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Playa de San Blas' },
            { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', alt: 'Aguas cristalinas' },
            { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Atardecer en San Blas' }
        ],
        videoId: 'https://www.youtube.com/watch?v=vb03mc_KJHs', // Reemplazar con ID real de YouTube
        contact: {
            phone: '+507 6123-4567',
            website: 'https://sanblaspanama.com',
            social: '@sanblaspanama'
        },
        coordinates: { lat: 9.5713, lng: -78.9519 },
        bestTime: 'Diciembre - Abril',
        priceRange: '$50 - $150/día'
    },
    'boquete': {
        id: 'boquete',
        name: 'Boquete',
        location: 'Panamá - Tierras Altas',
        description: 'Montañas verdes, clima fresco y plantaciones de café. Ideal para caminatas y ecoturismo en un ambiente tranquilo y sereno.',
        history: 'Boquete es un pequeño pueblo ubicado en las tierras altas de Chiriquí, Panamá, a 1,200 metros sobre el nivel del mar. Fundado en 1911, es conocido como la "Capital del Café" de Panamá. El clima fresco y la belleza natural lo convierten en un destino popular para turistas que buscan escapar del calor tropical. La región es famosa por sus plantaciones de café de altura, especialmente el café Geisha, considerado uno de los mejores del mundo.',
        images: [
            { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80', alt: 'Montañas de Boquete' },
            { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', alt: 'Plantación de café' },
            { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Paisaje montañoso' }
        ],
        videoId: 'dQw4w9WgXcQ',
        contact: {
            phone: '+507 7201-2345',
            website: 'https://boquetepanama.com',
            social: '@boquetepanama'
        },
        coordinates: { lat: 8.7783, lng: -82.4331 },
        bestTime: 'Todo el año',
        priceRange: '$40 - $120/día'
    },
    'bocas-toro': {
        id: 'bocas-toro',
        name: 'Bocas del Toro',
        location: 'Panamá - Islas',
        description: 'Arquipiélago caribeño con vida marina increíble. Perfecto para buceo, snorkel y disfrutar de la cultura caribeña.',
        history: 'Bocas del Toro es un archipiélago en el Caribe panameño, descubierto por Cristóbal Colón en 1502. La provincia fue fundada en 1903 y es conocida por su rica biodiversidad marina y su mezcla única de culturas: indígena, afrocaribeña y latina. Las islas ofrecen algunos de los mejores arrecifes de coral del Caribe y son un paraíso para los amantes del buceo y la vida marina.',
        images: [
            { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Islas de Bocas del Toro' },
            { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', alt: 'Vida marina' },
            { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', alt: 'Arrecifes de coral' }
        ],
        videoId: 'dQw4w9WgXcQ',
        contact: {
            phone: '+507 7575-1234',
            website: 'https://bocasdeltoro.com',
            social: '@bocasdeltoro'
        },
        coordinates: { lat: 9.3400, lng: -82.2500 },
        bestTime: 'Diciembre - Abril',
        priceRange: '$60 - $180/día'
    },
    'paris': {
        id: 'paris',
        name: 'París',
        location: 'Francia',
        description: 'La ciudad del amor con vistas espectaculares de la Torre Eiffel y arquitectura impresionante. Perfecta para momentos románticos inolvidables.',
        history: 'París, la capital de Francia, es una de las ciudades más icónicas del mundo. Fundada en el siglo III a.C., ha sido centro de arte, cultura y romance durante siglos. La Torre Eiffel, construida en 1889, se ha convertido en el símbolo universal de la ciudad. París es conocida por sus museos, cafés, moda y, sobre todo, por su atmósfera romántica que atrae a millones de parejas cada año.',
        images: [
            { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', alt: 'Torre Eiffel' },
            { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', alt: 'Calle de París' },
            { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', alt: 'Arquitectura parisina' }
        ],
        videoId: 'dQw4w9WgXcQ',
        contact: {
            phone: '+33 1 45 55 61 44',
            website: 'https://parisinfo.com',
            social: '@paris'
        },
        coordinates: { lat: 48.8566, lng: 2.3522 },
        bestTime: 'Abril - Junio, Septiembre - Octubre',
        priceRange: '$100 - $300/día'
    },
    'santorini': {
        id: 'santorini',
        name: 'Santorini',
        location: 'Grecia',
        description: 'Atardeceres inolvidables sobre el mar Egeo. Casas blancas y vistas panorámicas que crean el escenario perfecto para el romance.',
        history: 'Santorini, oficialmente Thira, es una isla volcánica en el mar Egeo. La isla fue devastada por una erupción volcánica masiva alrededor del 1600 a.C., que creó la caldera actual. Las casas blancas características con techos azules fueron construidas para reflejar el sol y mantener las casas frescas. Hoy, Santorini es uno de los destinos más románticos del mundo, famoso por sus atardeceres espectaculares y su arquitectura única.',
        images: [
            { url: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80', alt: 'Oia, Santorini' },
            { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Atardecer en Santorini' },
            { url: 'https://images.unsplash.com/photo-1518568814500-bf0f88e8c137?w=800&q=80', alt: 'Casas blancas' }
        ],
        videoId: 'dQw4w9WgXcQ',
        contact: {
            phone: '+30 2286 071156',
            website: 'https://santorini.com',
            social: '@santorini'
        },
        coordinates: { lat: 36.3932, lng: 25.4615 },
        bestTime: 'Mayo - Septiembre',
        priceRange: '$80 - $250/día'
    },
    'bali': {
        id: 'bali',
        name: 'Bali',
        location: 'Indonesia',
        description: 'Playas exóticas, templos antiguos y cultura única. Perfecto para relajación y aventura en un paraíso tropical.',
        history: 'Bali es una isla de Indonesia conocida por sus volcanes montañosos, arrozales, playas y arrecifes de coral. La cultura balinesa es única, con una fuerte influencia del hinduismo que se refleja en sus miles de templos y ceremonias tradicionales. La isla ha sido un destino turístico popular desde la década de 1930, atrayendo a visitantes con su belleza natural, cultura rica y hospitalidad excepcional.',
        images: [
            { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', alt: 'Playa de Bali' },
            { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', alt: 'Templo balinés' },
            { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80', alt: 'Arrozales' }
        ],
        videoId: 'dQw4w9WgXcQ',
        contact: {
            phone: '+62 361 701 601',
            website: 'https://bali.com',
            social: '@bali'
        },
        coordinates: { lat: -8.3405, lng: 115.0920 },
        bestTime: 'Abril - Octubre',
        priceRange: '$30 - $150/día'
    }
};

// Función para obtener un destino por ID
function getDestinationById(id) {
    return destinationsData[id] || null;
}

// Función para obtener todos los destinos
function getAllDestinations() {
    return Object.values(destinationsData);
}

