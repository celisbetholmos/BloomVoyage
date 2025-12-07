// ============================================
// BLOOMVOYAGE - DATOS DE DESTINOS
// Información completa de todos los destinos
// ============================================
// =============================================
// CARGAR TARJETAS DE DESTINOS DINÁMICAMENTE
// =============================================

const destinationsData = {
    'san-blas': {
        id: 'san-blas',
        name: 'San Blas',
        location: 'Panamá',
        description: 'San Blas, también conocida como Guna Yala, es un archipiélago caribeño en Panamá compuesto por más de 365 islas e islotes de arena blanca, aguas cristalinas y palmeras, hogar autónomo del pueblo Guna que ha preservado sus tradiciones ancestrales durante siglos. Su historia se remonta a unos 500 años atrás, cuando los Guna migraron desde el Darién continental hacia estas islas para escapar de conflictos, consolidando su autonomía tras la Revolución Guna de 1925 liderada por Nele Kantule, que resultó en la creación oficial de la comarca en 1938. Este paraíso pristino ofrece una inmersión única en la naturaleza y la cultura indígena, lejos de hoteles masivos y con un enfoque en el turismo sostenible.​',
        history: 'San Blas es un archipiélago de 365 islas ubicado en el Caribe panameño, habitado por la comunidad indígena Guna. Estas islas han mantenido su cultura tradicional y belleza natural intacta durante siglos. Las islas son conocidas por sus aguas turquesas, playas de arena blanca y la hospitalidad de la comunidad Guna.',
        images: [
            { url: './fotos/san blas.jpg', alt: 'Islas de San Blas' },
            { url: './san blas/playa de san blas.jpg', alt: 'Playa de San Blas' },
            { url: './san blas/agua.jpg', alt: 'Aguas cristalinas' },
            { url: './san blas/atarde.jpg', alt: 'Atardecer en San Blas' }
        ],
        videoId: 'https://www.youtube.com/watch?v=vb03mc_KJHs', // Reemplazar con ID real de YouTube
        contact: {
            phone: '+507 6123-4567',
            website: 'https://www.viajandoporelmundomundial.com/como-visitar-san-blas-panama/',
            social: 'sanblaspanama'
        },
        coordinates: { lat: 9.5713, lng: -78.9519 },
        category: 'beach',
        bestTime: 'Diciembre - Abril',
        priceRange: '$50 - $150/día',
        reasonsToVisit: [
            'Más de 365 islas paradisíacas con aguas turquesas cristalinas',
            'Cultura indígena Guna auténtica y preservada',
            'Playas de arena blanca pristinas y sin desarrollar',
            'Experiencia única de turismo sostenible y responsable',
            'Snorkel y buceo en arrecifes de coral vírgenes',
            'Atardeceres espectaculares sobre el Caribe'
        ],
        whatItOffers: [
            'Alojamiento en cabañas tradicionales Guna',
            'Tours guiados por las islas',
            'Actividades de snorkel y buceo',
            'Gastronomía local auténtica',
            'Artesanías y textiles Guna',
            'Observación de estrellas en noches despejadas'
        ]
    },
    'boquete': {
        id: 'boquete',
        name: 'Boquete',
        location: 'Panamá - Tierras Altas',
        description: 'Boquete, en las tierras altas de Chiriquí, Panamá, es un distrito fundado en 1911 con un clima fresco de montaña (alrededor de 1.140 metros de altitud), rodeado de cafetales, ríos y el imponente Volcán Barú, que atrae a amantes de la naturaleza y el ecoturismo desde sus orígenes como ruta de la fiebre del oro en el siglo XIX.',
        history: 'Su historia se remonta a sociedades agrícolas precolombinas (300 a.C.-600 d.C.) y refugio indígena ngöbe durante la colonia española, evolucionando en el siglo XIX con colonos de áreas cercanas como Dolega y Caldera que cultivaron la zona aislada por su topografía. Hoy, es un paraíso sostenible con economía basada en café de clase mundial y turismo, ideal para escapar del calor tropical.',
        images: [
            { url: '/fotos/boquete.jpg', alt: 'Montañas de Boquete' },
            { url: '/fotos/coffe.jpg', alt: 'Plantación de café' },
            { url: '/fotos/paisaje.jpg', alt: 'Paisaje montañoso' }
        ],
        videoId: 'https://www.youtube.com/watch?v=p9UDFq0DrvU',
        contact: {
            phone: '+507 6834-2340',
            website: 'https://es.tourismpanama.com/lugares-para-visitar/boquete/',
            social: '@boquetepanama'
        },
        coordinates: { lat: 8.73615, lng: -82.4331 },
        bestTime: 'Todo el año',
        priceRange: '$40 - $120/día',
        category: 'mountain',
        reasonsToVisit: [
            'Clima fresco de montaña perfecto para escapar del calor',
            'Café Geisha de clase mundial',
            'Senderismo por paisajes montañosos impresionantes',
            'Cultura cafetalera tradicional',
            'Aire puro y ambiente tranquilo',
            'Avistamiento de aves y naturaleza'
        ],
        whatItOffers: [
            'Tours de plantaciones de café',
            'Senderismo y caminatas ecológicas',
            'Canopy tours y aventuras',
            'Termales naturales',
            'Restaurantes con comida local',
            'Alojamientos boutique y eco-lodges'
        ]
    },
    'bocas-toro': {
        id: 'bocas-toro',
        name: 'Bocas del Toro',
        location: 'Panamá - Islas',
        description: 'Bocas del Toro es un archipiélago caribeño en el noroeste de Panamá, descubierto por Cristóbal Colón en 1502 durante su cuarto viaje, quien nombró la zona por un peñasco con forma de toro en la Isla Carenero, evolucionando de refugio pirata y plantaciones de banano en el siglo XIX a un vibrante centro turístico con influencia afrocaribeña, indígena ngäbe y mestiza.',
        history: 'Bocas del Toro es un archipiélago en el Caribe panameño, descubierto por Cristóbal Colón en 1502. La provincia fue fundada en 1903 y es conocida por su rica biodiversidad marina y su mezcla única de culturas: indígena, afrocaribeña y latina. Las islas ofrecen algunos de los mejores arrecifes de coral del Caribe y son un paraíso para los amantes del buceo y la vida marina.',
        images: [
            { url: '/fotos/bocas del toro.jpg', alt: 'Islas de Bocas del Toro' },
            { url: '/fotos/arecifes.jpg', alt: 'Vida marina' },
            { url: '/fotos/boat.jpg', alt: 'Arrecifes de coral' }
        ],
        videoId: 'https://www.youtube.com/watch?v=3UcSul-7PN0&list=RD3UcSul-7PN0&start_radio=1',
        contact: {
            phone: '+507 6235-9743',
            website: 'https://www.tripadvisor.es/Attraction_Products-g298425-Bocas_del_Toro_Province.html',
            social: '@bocasdeltoro'
        },
        coordinates: { lat: 9.3400, lng: -82.2500 },
        bestTime: 'Diciembre - Abril',
        priceRange: '$60 - $180/día',
        category: 'beach',
        reasonsToVisit: [
            'Arrecifes de coral entre los mejores del Caribe',
            'Vida marina increíble para buceo y snorkel',
            'Cultura caribeña vibrante y única',
            'Playas paradisíacas de arena blanca',
            'Ambiente relajado y bohemio',
            'Mezcla única de culturas indígenas y afrocaribeñas'
        ],
        whatItOffers: [
            'Buceo y snorkel en arrecifes protegidos',
            'Tours en bote por las islas',
            'Vida nocturna caribeña',
            'Restaurantes con mariscos frescos',
            'Alojamientos frente al mar',
            'Actividades acuáticas y deportes'
        ]
    },
    'paris': {
        id: 'paris',
        name: 'París',
        location: 'Francia',
        description: 'La ciudad del amor con vistas espectaculares de la Torre Eiffel y arquitectura impresionante. Perfecta para momentos románticos inolvidables.',
        history: 'París, la capital de Francia, es una de las ciudades más icónicas del mundo. Fundada en el siglo III a.C., ha sido centro de arte, cultura y romance durante siglos. La Torre Eiffel, construida en 1889, se ha convertido en el símbolo universal de la ciudad. París es conocida por sus museos, cafés, moda y, sobre todo, por su atmósfera romántica que atrae a millones de parejas cada año.',
        images: [
            { url: '/fotos/paris.jpg', alt: 'Torre Eiffel' },
            { url: '/fotos/par.jpg', alt: 'Calle de París' },
            { url: '/fotos/le.jpg', alt: 'Restaurante Le Jules Verne' }
        ],
        videoId: 'https://www.youtube.com/watch?v=_iZ-vMCeH9U',
        contact: {
            phone: '+33 1 45 55 61 44',
            website: 'https://parisinfo.com',
            social: '@paris'
        },
        coordinates: { lat: 48.8566, lng: 2.3522 },
        bestTime: 'Abril - Junio, Septiembre - Octubre',
        priceRange: '$100 - $300/día',
        category: 'romantic',
        reasonsToVisit: [
            'La ciudad del amor con arquitectura icónica',
            'Torre Eiffel y monumentos históricos',
            'Museos de clase mundial como el Louvre',
            'Gastronomía francesa excepcional',
            'Ambiente romántico incomparable',
            'Cultura, arte y moda de renombre mundial'
        ],
        whatItOffers: [
            'Cruceros por el río Sena',
            'Museos y galerías de arte',
            'Restaurantes Michelin y cafés tradicionales',
            'Compras en boutiques de lujo',
            'Paseos románticos por barrios históricos',
            'Espectáculos y entretenimiento cultural'
        ]
    },
    'santorini': {
        id: 'santorini',
        name: 'Santorini',
        location: 'Grecia',
        description: 'Atardeceres inolvidables sobre el mar Egeo. Casas blancas y vistas panorámicas que crean el escenario perfecto para el romance.',
        history: 'Santorini, oficialmente Thira, es una isla volcánica en el mar Egeo. La isla fue devastada por una erupción volcánica masiva alrededor del 1600 a.C., que creó la caldera actual. Las casas blancas características con techos azules fueron construidas para reflejar el sol y mantener las casas frescas. Hoy, Santorini es uno de los destinos más románticos del mundo, famoso por sus atardeceres espectaculares y su arquitectura única.',
        images: [
            { url: '/fotos/santorini.jpg', alt: 'Oia, Santorini' },
            { url: '/fotos/atar.jpg', alt: 'Atardecer en Santorini' },
            { url: '/fotos/casas.jpg', alt: 'Casas blancas' }
        ],
        videoId: 'https://www.youtube.com/watch?v=4zAEDLwl9HI&list=RD4zAEDLwl9HI&start_radio=1',
        contact: {
            phone: '+30 2286 071156',
            website: 'https://santorini.com',
            social: '@santorini'
        },
        coordinates: { lat: 36.3932, lng: 25.4615 },
        bestTime: 'Mayo - Septiembre',
        priceRange: '$80 - $250/día',
        category: 'romantic',
        reasonsToVisit: [
            'Atardeceres más hermosos del mundo',
            'Arquitectura única de casas blancas y azules',
            'Vistas panorámicas sobre la caldera volcánica',
            'Ambiente romántico perfecto para parejas',
            'Playas de arena negra volcánica',
            'Vinos locales y gastronomía griega'
        ],
        whatItOffers: [
            'Hoteles con vistas a la caldera',
            'Restaurantes con terrazas panorámicas',
            'Tours de viñedos y bodegas',
            'Playas únicas de arena volcánica',
            'Pueblos tradicionales como Oia y Fira',
            'Actividades acuáticas y cruceros'
        ]
    },
    'bali': {
        id: 'bali',
        name: 'Bali',
        location: 'Indonesia',
        description: 'Playas exóticas, templos antiguos y cultura única. Perfecto para relajación y aventura en un paraíso tropical.',
        history: 'Bali es una isla de Indonesia conocida por sus volcanes montañosos, arrozales, playas y arrecifes de coral. La cultura balinesa es única, con una fuerte influencia del hinduismo que se refleja en sus miles de templos y ceremonias tradicionales. La isla ha sido un destino turístico popular desde la década de 1930, atrayendo a visitantes con su belleza natural, cultura rica y hospitalidad excepcional.',
        images: [
            { url: '/fotos/bali.jpg', alt: 'Playa de Bali' },
            { url: '/fotos/cul.jpg', alt: 'Templo balinés' },
            { url: '/fotos/pl bali.jpg', alt: 'Arrozales' }
        ],
        videoId: 'https://www.youtube.com/watch?v=BFS9n4B_2xA&t=8s',
        contact: {
            phone: '+62 361 701 601',
            website: 'https://bali.com',
            social: '@bali'
        },
        coordinates: { lat: -8.3405, lng: 115.0920 },
        bestTime: 'Abril - Octubre',
        priceRange: '$30 - $150/día',
        category: 'beach',
        reasonsToVisit: [
            'Playas exóticas de clase mundial',
            'Templos antiguos y cultura espiritual única',
            'Arrozales en terrazas impresionantes',
            'Hospitalidad balinesa excepcional',
            'Mezcla perfecta de relajación y aventura',
            'Gastronomía indonesia auténtica'
        ],
        whatItOffers: [
            'Resorts de lujo frente al mar',
            'Templos sagrados y ceremonias tradicionales',
            'Spa y bienestar con técnicas balinesas',
            'Surf y deportes acuáticos',
            'Tours por arrozales y volcanes',
            'Mercados locales y artesanías'
        ]
    },
    'maldives': {
        id: 'maldives',
        name: 'Maldivas',
        location: 'Maldivas',
        description: 'Archipiélago paradisíaco en el Océano Índico conocido por sus aguas turquesas cristalinas, bungalows sobre el agua y playas de arena blanca perfectas. Un destino de ensueño para luna de miel y escapadas románticas.',
        history: 'Las Maldivas son una nación insular ubicada en el Océano Índico, formada por 26 atolones con más de 1,000 islas de coral. La historia de las Maldivas se remonta a más de 2,500 años, siendo un importante punto de comercio en la ruta de la seda. El país ha conservado su belleza natural pristina y se ha convertido en uno de los destinos turísticos más exclusivos del mundo.',
        images: [
            { url: '/fotos/maldives.jpg', alt: 'Bungalow sobre el agua en Maldivas' },
            { url: '/fotos/mal1.jpg', alt: 'Aguas turquesas' },
            { url: '/fotos/mal2.jpg', alt: 'Atardecer en Maldivas' }
        ],
        videoId: 'https://www.youtube.com/watch?v=W4YfDg-dKzk&list=RDW4YfDg-dKzk&start_radio=1',
        contact: {
            phone: '+960 664-0000',
            website: 'https://visitmaldives.com',
            social: '@visitmaldives'
        },
        coordinates: { lat: 3.2028, lng: 73.2207 },
        bestTime: 'Noviembre - Abril',
        priceRange: '$300 - $800/día',
        category: 'beach',
        reasonsToVisit: [
            'Bungalows de lujo sobre el agua con acceso directo al océano',
            'Aguas turquesas cristalinas ideales para buceo y snorkel',
            'Playas de arena blanca perfectas y privadas',
            'Atardeceres románticos incomparables',
            'Servicio de clase mundial y lujo exclusivo',
            'Arrecifes de coral vírgenes con vida marina abundante'
        ],
        whatItOffers: [
            'Resorts de lujo todo incluido',
            'Buceo y snorkel en arrecifes protegidos',
            'Spa y bienestar sobre el agua',
            'Cenas románticas en la playa',
            'Deportes acuáticos y actividades',
            'Excursiones a islas deshabitadas'
        ]
    },
    'butchart-gardens': {
        id: 'butchart-gardens',
        name: 'Butchart Gardens',
        location: 'Victoria, Canadá',
        description: 'Jardines botánicos espectaculares con más de 55 acres de flores de todos los colores. Un verdadero paraíso floral que cambia con las estaciones, creando un ambiente mágico y romántico perfecto para propuestas y momentos especiales.',
        history: 'Los Jardines Butchart fueron creados por Jennie Butchart a principios del siglo XX en una cantera de cemento abandonada. Con dedicación y visión, transformó el paisaje industrial en uno de los jardines más bellos del mundo. Hoy en día, los jardines atraen a más de un millón de visitantes al año y son un símbolo de transformación y belleza.',
        images: [
            { url: '/fotos/butchart.jpg', alt: 'Butchart Gardens en primavera' },
            { url: '/fotos/jar.jpg', alt: 'Jardines en verano' },
            { url: '/fotos/flo.jpg', alt: 'Flores coloridas' }
        ],
        videoId: 'https://www.youtube.com/watch?v=A6rRn9jN-bw',
        contact: {
            phone: '+1 250-652-4422',
            website: 'https://www.butchartgardens.com',
            social: '@butchartgardens'
        },
        coordinates: { lat: 48.5665, lng: -123.4696 },
        bestTime: 'Abril - Octubre',
        priceRange: '$30 - $50/entrada',
        category: 'romantic',
        reasonsToVisit: [
            'Más de 55 acres de jardines botánicos espectaculares',
            'Flores que cambian con las estaciones del año',
            'Ambiente mágico y romántico perfecto para propuestas',
            'Diseño paisajístico de clase mundial',
            'Eventos especiales y conciertos durante el verano',
            'Restaurantes con vistas a los jardines'
        ],
        whatItOffers: [
            'Recorridos guiados por los jardines',
            'Restaurantes y cafés en el lugar',
            'Tienda de regalos con souvenirs únicos',
            'Eventos especiales y conciertos',
            'Áreas para picnic romántico',
            'Iluminación nocturna durante eventos especiales'
        ]
    },
    'keukenhof-gardens': {
        id: 'keukenhof-gardens',
        name: 'Keukenhof Gardens',
        location: 'Países Bajos',
        description: 'El jardín de tulipanes más grande del mundo, con más de 7 millones de bulbos en floración cada primavera. Un mar de colores vibrantes que crea el escenario perfecto para una experiencia romántica y fotográfica única.',
        history: 'Keukenhof, que significa "Jardín de la Cocina" en holandés, fue creado en 1949 como una exhibición de flores. El jardín se encuentra en los terrenos del Castillo Keukenhof y se ha convertido en la atracción turística más visitada de los Países Bajos. Cada año, más de 80 variedades de tulipanes florecen creando un espectáculo visual incomparable.',
        images: [
            { url: '/fotos/keukenthof.jpg', alt: 'Tulipanes en Keukenhof' },
            { url: '/fotos/mir.jpg', alt: 'Campos de tulipanes' },
            { url: '/fotos/gr.jpg', alt: 'Jardines de primavera' }
        ],
        videoId: 'https://www.youtube.com/watch?v=HSEGPaRCFIA',
        contact: {
            phone: '+31 252 465 555',
            website: 'https://keukenhof.nl',
            social: '@keukenhof'
        },
        coordinates: { lat: 52.2667, lng: 4.5467 },
        bestTime: 'Marzo - Mayo',
        priceRange: '$20 - $30/entrada',
        category: 'romantic',
        reasonsToVisit: [
            'Más de 7 millones de tulipanes en floración',
            'El jardín de tulipanes más grande del mundo',
            'Paisajes de colores vibrantes perfectos para fotografía',
            'Ambiente romántico ideal para parejas',
            'Arquitectura paisajística impresionante',
            'Eventos especiales durante la temporada de floración'
        ],
        whatItOffers: [
            'Recorridos por jardines temáticos',
            'Exhibiciones de flores únicas',
            'Restaurantes y cafés',
            'Paseos en bote por canales cercanos',
            'Tienda de regalos con productos locales',
            'Eventos y festivales durante la primavera'
        ]
    },
    'oia-santorini': {
        id: 'oia-santorini',
        name: 'Oia, Santorini',
        location: 'Santorini, Grecia',
        description: 'El pueblo más icónico de Santorini, famoso por sus atardeceres espectaculares sobre el mar Egeo. Con casas blancas encaladas, callejones estrechos y vistas panorámicas, es el lugar perfecto para propuestas románticas y momentos inolvidables.',
        history: 'Oia es un pequeño pueblo ubicado en la parte norte de Santorini. Construido en los acantilados de la caldera volcánica, el pueblo es conocido por su arquitectura cicládica tradicional con casas blancas y techos azules. Oia ha sido considerada durante décadas como uno de los mejores lugares del mundo para ver atardeceres.',
        images: [
            { url: '/fotos/oia.jpg', alt: 'Oia al atardecer' },
            { url: '/fotos/santorini.jpg', alt: 'Casas blancas de Oia' },
            { url: '/fotos/atar.jpg', alt: 'Vista panorámica de Oia' }
        ],
        videoId: 'https://www.youtube.com/watch?v=_bTDvlVWCkc',
        contact: {
            phone: '+30 2286 071156',
            website: 'https://santorini.com',
            social: '@santorini'
        },
        coordinates: { lat: 36.4615, lng: 25.3753 },
        bestTime: 'Mayo - Septiembre',
        priceRange: '$80 - $250/día',
        category: 'romantic',
        reasonsToVisit: [
            'Atardeceres considerados entre los más bellos del mundo',
            'Arquitectura cicládica única con casas blancas y azules',
            'Vistas panorámicas sobre la caldera volcánica',
            'Ambiente romántico incomparable',
            'Restaurantes con terrazas con vistas al mar',
            'Pueblos tradicionales griegos auténticos'
        ],
        whatItOffers: [
            'Hoteles boutique con vistas a la caldera',
            'Restaurantes con terrazas panorámicas',
            'Tours de viñedos locales',
            'Excursiones en bote a la caldera',
            'Tiendas de arte y artesanías locales',
            'Iglesias tradicionales con cúpulas azules'
        ]
    },
    'le-jules-verne': {
        id: 'le-jules-verne',
        name: 'Le Jules Verne',
        location: 'París, Francia',
        description: 'Restaurante gastronómico ubicado en la Torre Eiffel con vistas panorámicas de París. Una experiencia culinaria única que combina la cocina francesa de alta calidad con una vista espectacular de la ciudad del amor.',
        history: 'Le Jules Verne abrió sus puertas en 1983 en el segundo nivel de la Torre Eiffel. El restaurante lleva el nombre del famoso escritor francés Jules Verne y ofrece una experiencia gastronómica única a 125 metros de altura sobre París. El restaurante ha sido galardonado con una estrella Michelin y es considerado uno de los restaurantes más exclusivos de París.',
        images: [
            { url: '/fotos/le.jpg', alt: 'Vista desde Le Jules Verne' },
            { url: '/fotos/paris.jpg', alt: 'Torre Eiffel y París' },
            { url: '/fotos/jul.jpg', alt: 'Interior del restaurante' }
        ],
        videoId: 'https://www.youtube.com/watch?v=6EvOPdX2PBQ',
        contact: {
            phone: '+33 1 45 55 61 44',
            website: 'https://www.lejulesverne-paris.com',
            social: '@lejulesverne'
        },
        coordinates: { lat: 48.8584, lng: 2.2945 },
        bestTime: 'Todo el año',
        priceRange: '€200 - €300 por persona',
        category: 'romantic',
        reasonsToVisit: [
            'Ubicado en la Torre Eiffel con vistas panorámicas de París',
            'Cocina francesa de alta calidad con estrella Michelin',
            'Ambiente romántico e íntimo perfecto para ocasiones especiales',
            'Vistas nocturnas espectaculares de la Ciudad de la Luz',
            'Experiencia gastronómica única e inolvidable',
            'Servicio excepcional y atención al detalle'
        ],
        whatItOffers: [
            'Menús degustación con cocina francesa moderna',
            'Vistas panorámicas de 360° de París',
            'Vinos seleccionados de las mejores bodegas',
            'Ambiente romántico e íntimo',
            'Servicio de clase mundial',
            'Experiencias especiales para propuestas y aniversarios'
        ]
    },
    'sky-garden': {
        id: 'sky-garden',
        name: 'Sky Garden Restaurant',
        location: 'Londres, Reino Unido',
        description: 'Restaurante con vistas de 360° de Londres desde el corazón de la ciudad. Ubicado en el piso 35, ofrece una experiencia gastronómica moderna con panoramas espectaculares del skyline londinense.',
        history: 'Sky Garden es un espacio público único ubicado en el techo de un rascacielos en el corazón financiero de Londres. Abierto en 2015, combina jardines públicos con restaurantes y bares de alta gama. El espacio ofrece vistas sin obstáculos de algunos de los monumentos más icónicos de Londres, incluyendo el Tower Bridge y el Támesis.',
        images: [
            { url: '/fotos/sky.jpg', alt: 'Vista desde Sky Garden' },
            { url: '/fotos/sk.jpg', alt: 'Interior del Sky Garden' },
            { url: '/fotos/gar.jpg', alt: 'Vista de Londres' }
        ],
        videoId: 'https://www.youtube.com/watch?v=ThlnzF7oigY',
        contact: {
            phone: '+44 20 7337 2344',
            website: 'https://skygarden.london',
            social: '@skygardenlondon'
        },
        coordinates: { lat: 51.5101, lng: -0.0839 },
        bestTime: 'Todo el año',
        priceRange: '£50 - £100 por persona',
        category: 'city',
        reasonsToVisit: [
            'Vistas de 360° del skyline de Londres',
            'Jardines públicos únicos en altura',
            'Restaurantes con cocina moderna europea',
            'Ambiente sofisticado y elegante',
            'Vistas del Tower Bridge y el Támesis',
            'Acceso gratuito a los jardines (con reserva)'
        ],
        whatItOffers: [
            'Múltiples restaurantes y bares',
            'Jardines públicos con plantas exóticas',
            'Vistas panorámicas de monumentos icónicos',
            'Eventos especiales y música en vivo',
            'Ambiente sofisticado para ocasiones especiales',
            'Visitas guiadas del espacio'
        ]
    },
    'playa-blanca-restaurant': {
        id: 'playa-blanca-restaurant',
        name: 'Restaurante Playa Blanca',
        location: 'San Blas, Panamá',
        description: 'Restaurante frente al mar con mariscos frescos y ambiente relajado. Perfecto para cenas románticas al atardecer con vistas espectaculares del Caribe panameño.',
        history: 'Restaurante Playa Blanca se encuentra en una de las islas más hermosas de San Blas. Fundado por una familia local, ofrece mariscos frescos capturados diariamente y cocina tradicional panameña con toques caribeños. El restaurante ha sido un favorito entre los visitantes que buscan una experiencia gastronómica auténtica en un ambiente paradisíaco.',
        images: [
            { url: '/fotos/playa blanca.jpg', alt: 'Restaurante Playa Blanca' },
            { url: '/fotos/san blas.jpg', alt: 'Vista del mar' },
            { url: '/fotos/atar.jpg', alt: 'Atardecer' }
        ],
        videoId: 'https://www.youtube.com/watch?v=MjqM3b2MeVU',
        contact: {
            phone: '+507 6123-4567',
            website: 'https://playablancarest.com',
            social: '@playablancarest'
        },
        coordinates: { lat: 9.5713, lng: -78.9519 },
        bestTime: 'Todo el año',
        priceRange: '$30 - $60 por persona',
        category: 'romantic',
        reasonsToVisit: [
            'Mariscos frescos capturados diariamente',
            'Vistas espectaculares del mar Caribe',
            'Ambiente romántico perfecto para cenas al atardecer',
            'Cocina tradicional panameña auténtica',
            'Ubicación paradisíaca en isla privada',
            'Servicio cálido y familiar'
        ],
        whatItOffers: [
            'Menú de mariscos frescos del día',
            'Cenas románticas al atardecer',
            'Cocina tradicional panameña y caribeña',
            'Bar con cócteles tropicales',
            'Acceso directo a la playa',
            'Reservas para grupos y eventos especiales'
        ]
    },
    'rooftop-oia': {
        id: 'rooftop-oia',
        name: 'Rooftop Oia',
        location: 'Santorini, Grecia',
        description: 'Restaurante con terraza con vistas al atardecer más espectacular del mundo. Cocina mediterránea de autor en un ambiente sofisticado y romántico.',
        history: 'Rooftop Oia es uno de los restaurantes más exclusivos de Santorini, ubicado en el corazón del pueblo de Oia. Con más de 20 años de experiencia, combina la cocina mediterránea tradicional con técnicas modernas. El restaurante ofrece vistas panorámicas de la caldera volcánica y es conocido por ser uno de los mejores lugares para ver el atardecer mientras se disfruta de una cena excepcional.',
        images: [
            { url: '/fotos/rooftop.jpg', alt: 'Terraza de Rooftop Oia' },
            { url: '/fotos/oia.jpg', alt: 'Vista de Oia' },
            { url: '/fotos/santorini.jpg', alt: 'Atardecer en Santorini' },
            { url: '/fotos/atar.jpg', alt: 'Atardecer espectacular' }
        ],
        videoId: 'https://www.youtube.com/watch?v=ehHxqrUjYDE',
        contact: {
            phone: '+30 2286 071156',
            website: 'https://rooftopoia.com',
            social: '@rooftopoia'
        },
        coordinates: { lat: 36.4615, lng: 25.3753 },
        bestTime: 'Mayo - Septiembre',
        priceRange: '€80 - €150 por persona',
        category: 'romantic',
        reasonsToVisit: [
            'Vistas al atardecer más espectacular del mundo',
            'Cocina mediterránea de autor excepcional',
            'Terraza con vistas panorámicas de la caldera',
            'Ambiente romántico e íntimo',
            'Ubicación en el corazón de Oia',
            'Experiencia gastronómica única'
        ],
        whatItOffers: [
            'Menús degustación con cocina mediterránea',
            'Terraza con vistas al atardecer',
            'Selección de vinos griegos premium',
            'Servicio de clase mundial',
            'Reservas para ocasiones especiales',
            'Experiencias de cena privada'
        ]
    },
    'cafe-altura': {
        id: 'cafe-altura',
        name: 'Café de Altura',
        location: 'Boquete, Panamá',
        description: 'Cafetería y restaurante en una plantación de café con vistas a las montañas. Menú con ingredientes locales frescos y el mejor café Geisha de Panamá.',
        history: 'Café de Altura se encuentra en una de las plantaciones de café más prestigiosas de Boquete. Fundado en 2010, el restaurante combina la tradición cafetalera panameña con una experiencia gastronómica única. El lugar ofrece tours de la plantación y degustaciones del famoso café Geisha, considerado uno de los mejores del mundo.',
        images: [
            { url: '/fotos/coffe.jpg', alt: 'Café de Altura' },
            { url: '/fotos/boquete.jpg', alt: 'Vista de las montañas' },
            { url: '/fotos/paisaje.jpg', alt: 'Plantación de café' }
        ],
        videoId: 'https://www.youtube.com/watch?v=tAsPpFoHxG4',
        contact: {
            phone: '+507 7201-2345',
            website: 'https://cafedealtura.com',
            social: '@cafedealtura'
        },
        coordinates: { lat: 8.7783, lng: -82.4331 },
        bestTime: 'Todo el año',
        priceRange: '$15 - $35 por persona',
        category: 'mountain',
        reasonsToVisit: [
            'Café Geisha de clase mundial',
            'Vistas panorámicas de las montañas',
            'Ingredientes locales frescos y orgánicos',
            'Tours de plantación de café',
            'Ambiente tranquilo y relajado',
            'Cocina casera panameña auténtica'
        ],
        whatItOffers: [
            'Tours de plantación de café',
            'Degustaciones de café Geisha',
            'Menú con ingredientes locales',
            'Postres caseros tradicionales',
            'Venta de café tostado artesanal',
            'Eventos y talleres de café'
        ]
    },
    'warung-nusa': {
        id: 'warung-nusa',
        name: 'Warung Nusa',
        location: 'Bali, Indonesia',
        description: 'Restaurante tradicional balinés con cocina auténtica y ambiente acogedor. Perfecto para experimentar la cultura local y sabores únicos de Indonesia.',
        history: 'Warung Nusa es un restaurante familiar que ha servido cocina balinesa tradicional por más de tres generaciones. El nombre "Warung" significa pequeño restaurante local en indonesio. El lugar mantiene las recetas tradicionales pasadas de generación en generación, ofreciendo una experiencia auténtica de la gastronomía balinesa en un ambiente acogedor y familiar.',
        images: [
            { url: '/fotos/warung.jpg', alt: 'Warung Nusa' },
            { url: '/fotos/bali.jpg', alt: 'Ambiente balinés' },
            { url: '/fotos/pl bali.jpg', alt: 'Comida balinesa' }
        ],
        videoId: 'https://www.youtube.com/watch?v=jvpS5-eoEUM',
        contact: {
            phone: '+62 361 701 601',
            website: 'https://warungnusa.com',
            social: '@warungnusa'
        },
        coordinates: { lat: -8.3405, lng: 115.0920 },
        bestTime: 'Todo el año',
        priceRange: '$10 - $25 por persona',
        category: 'romantic',
        reasonsToVisit: [
            'Cocina balinesa tradicional auténtica',
            'Recetas familiares de tres generaciones',
            'Ambiente acogedor y familiar',
            'Precios accesibles',
            'Experiencia cultural única',
            'Ingredientes locales frescos'
        ],
        whatItOffers: [
            'Menú tradicional balinés completo',
            'Clases de cocina balinesa',
            'Eventos culturales y ceremonias',
            'Venta de especias y productos locales',
            'Catering para eventos',
            'Tours gastronómicos culturales'
        ]
    },
    'santorini-cave-hotel': {
        id: 'santorini-cave-hotel',
        name: 'Santorini Cave Hotel',
        location: 'Santorini, Grecia',
        description: 'Hotel cueva con vistas al mar Egeo y atardeceres espectaculares. Arquitectura única y lujo discreto en el corazón de Santorini.',
        history: 'Santorini Cave Hotel es un hotel boutique que ha transformado las tradicionales cuevas de Santorini en suites de lujo. Construido respetando la arquitectura cicládica tradicional, el hotel combina el encanto histórico con comodidades modernas. Cada suite tiene vistas privadas a la caldera volcánica y ofrece una experiencia única de alojamiento en Santorini.',
        images: [
            { url: '/fotos/casas.jpg', alt: 'Santorini Cave Hotel' },
            { url: '/fotos/santorini.jpg', alt: 'Vista de la caldera' },
            { url: '/fotos/oia.jpg', alt: 'Arquitectura cicládica' }
        ],
        videoId: 'https://www.youtube.com/watch?v=SO0FJ_BHYZ8',
        contact: {
            phone: '+30 2286 071156',
            website: 'https://santorinihotel.com',
            social: '@santorinihotel'
        },
        coordinates: { lat: 36.3932, lng: 25.4615 },
        bestTime: 'Mayo - Septiembre',
        priceRange: '$150 - $400/noche',
        category: 'romantic',
        reasonsToVisit: [
            'Suites en cuevas tradicionales con lujo moderno',
            'Vistas privadas a la caldera volcánica',
            'Arquitectura cicládica auténtica',
            'Atardeceres espectaculares desde cada habitación',
            'Spa y bienestar de clase mundial',
            'Ubicación en el corazón de Santorini'
        ],
        whatItOffers: [
            'Suites con piscinas privadas',
            'Spa con tratamientos tradicionales griegos',
            'Restaurante con cocina mediterránea',
            'Servicio de conserjería 24/7',
            'Tours privados de la isla',
            'Experiencias románticas personalizadas'
        ]
    },
    'hotel-le-marais': {
        id: 'hotel-le-marais',
        name: 'Hotel Le Marais',
        location: 'París, Francia',
        description: 'Boutique hotel en el corazón de París con estilo parisino elegante. Cerca de los principales atractivos y con un ambiente íntimo y sofisticado.',
        history: 'Hotel Le Marais se encuentra en el histórico barrio de Le Marais, uno de los distritos más antiguos y encantadores de París. El hotel ocupa un edificio del siglo XVII cuidadosamente restaurado, manteniendo su carácter histórico mientras ofrece todas las comodidades modernas. El barrio es conocido por sus galerías de arte, boutiques de moda y vida cultural vibrante.',
        images: [
            { url: '/fotos/par.jpg', alt: 'Hotel Le Marais' },
            { url: '/fotos/paris.jpg', alt: 'Barrio Le Marais' },
            { url: '/fotos/le.jpg', alt: 'Interior del hotel' }
        ],
        videoId: 'https://www.youtube.com/watch?v=4-Zv4mwvrtw',
        contact: {
            phone: '+33 1 42 77 47 47',
            website: 'https://lemaraisparis.com',
            social: '@lemaraisparis'
        },
        coordinates: { lat: 48.8566, lng: 2.3522 },
        bestTime: 'Abril - Junio, Septiembre - Octubre',
        priceRange: '$200 - $500/noche',
        category: 'city',
        reasonsToVisit: [
            'Ubicación en el histórico barrio Le Marais',
            'Edificio del siglo XVII cuidadosamente restaurado',
            'Cerca de los principales atractivos de París',
            'Estilo parisino elegante y sofisticado',
            'Ambiente íntimo y acogedor',
            'Acceso a la vida cultural y artística de París'
        ],
        whatItOffers: [
            'Habitaciones con decoración parisina elegante',
            'Desayuno continental incluido',
            'Servicio de conserjería personalizado',
            'Guías de la ciudad y recomendaciones',
            'Acceso a galerías y boutiques cercanas',
            'Experiencias culturales personalizadas'
        ]
    },
    'boquete-mountain-lodge': {
        id: 'boquete-mountain-lodge',
        name: 'Boquete Mountain Lodge',
        location: 'Boquete, Panamá',
        description: 'Eco-lodge en las montañas con vistas panorámicas y ambiente tranquilo. Perfecto para relajación y conexión con la naturaleza.',
        history: 'Boquete Mountain Lodge fue fundado en 2005 como un eco-lodge comprometido con la sostenibilidad y el turismo responsable. Ubicado en una finca de 50 hectáreas, el lodge ofrece una experiencia única de inmersión en la naturaleza panameña. El lugar combina comodidades modernas con prácticas ecológicas, incluyendo energía solar y agricultura orgánica.',
        images: [
            { url: '/fotos/paisaje.jpg', alt: 'Boquete Mountain Lodge' },
            { url: '/fotos/boquete.jpg', alt: 'Vistas de las montañas' },
            { url: '/fotos/hiking.jpg', alt: 'Senderos naturales' }
        ],
        videoId: 'https://www.youtube.com/watch?v=dMSPWf1G6Xg',
        contact: {
            phone: '+507 7201-2345',
            website: 'https://boquetelodge.com',
            social: '@boquetelodge'
        },
        coordinates: { lat: 8.7783, lng: -82.4331 },
        bestTime: 'Todo el año',
        priceRange: '$80 - $150/noche',
        category: 'mountain',
        reasonsToVisit: [
            'Eco-lodge sostenible en la naturaleza',
            'Vistas panorámicas de las montañas',
            'Ambiente tranquilo y relajante',
            'Prácticas ecológicas y sostenibles',
            'Acceso a senderos y naturaleza',
            'Experiencia auténtica de montaña'
        ],
        whatItOffers: [
            'Cabañas ecológicas con vistas',
            'Tours de senderismo guiados',
            'Observación de aves',
            'Comida orgánica de la finca',
            'Spa natural con tratamientos locales',
            'Actividades de ecoturismo'
        ]
    },
    'san-blas-resort': {
        id: 'san-blas-resort',
        name: 'San Blas Island Resort',
        location: 'San Blas, Panamá',
        description: 'Resort ecológico en una isla privada con playas de arena blanca y aguas cristalinas. Experiencia única de lujo sostenible en el Caribe panameño.',
        history: 'San Blas Island Resort fue establecido en 2010 como un proyecto de turismo sostenible en colaboración con la comunidad Guna. El resort opera bajo principios ecológicos estrictos, respetando el medio ambiente y la cultura local. Ofrece una experiencia de lujo discreto en una isla privada, combinando comodidades modernas con autenticidad cultural.',
        images: [
            { url: '/fotos/san blas.jpg', alt: 'San Blas Island Resort' },
            { url: '/fotos/atar.jpg', alt: 'Playa privada' },
            { url: '/fotos/arecifes.jpg', alt: 'Aguas cristalinas' }
        ],
        videoId: 'https://www.youtube.com/watch?v=zUNIFccNZOc',
        contact: {
            phone: '+507 6123-4567',
            website: 'https://sanblasresort.com',
            social: '@sanblasresort'
        },
        coordinates: { lat: 9.5713, lng: -78.9519 },
        bestTime: 'Diciembre - Abril',
        priceRange: '$100 - $200/noche',
        category: 'beach',
        reasonsToVisit: [
            'Isla privada exclusiva',
            'Playas de arena blanca pristinas',
            'Turismo sostenible y ecológico',
            'Colaboración con la comunidad Guna',
            'Lujo discreto en la naturaleza',
            'Experiencia cultural auténtica'
        ],
        whatItOffers: [
            'Bungalows frente al mar',
            'Actividades de snorkel y buceo',
            'Gastronomía local y internacional',
            'Spa con tratamientos naturales',
            'Tours culturales Guna',
            'Eventos y celebraciones especiales'
        ]
    },
    'bali-ubud-villa': {
        id: 'bali-ubud-villa',
        name: 'Bali Ubud Villa',
        location: 'Ubud, Bali',
        description: 'Villa privada con piscina infinita y vistas a los arrozales. Experiencia auténtica balinesa en el corazón cultural de Bali.',
        history: 'Bali Ubud Villa es una villa privada construida en 2015, diseñada para ofrecer una experiencia auténtica de la vida balinesa. Ubicada en Ubud, el corazón cultural de Bali, la villa combina arquitectura tradicional balinesa con comodidades modernas. El lugar está rodeado de arrozales en terrazas y ofrece una experiencia de inmersión en la cultura y naturaleza balinesa.',
        images: [
            { url: '/fotos/pl bali.jpg', alt: 'Bali Ubud Villa' },
            { url: '/fotos/bali.jpg', alt: 'Vista de arrozales' },
            { url: '/fotos/paisaje.jpg', alt: 'Piscina infinita' }
        ],
        videoId: 'https://www.youtube.com/watch?v=Wupf8iikIGE',
        contact: {
            phone: '+62 361 701 601',
            website: 'https://baliubudvilla.com',
            social: '@baliubudvilla'
        },
        coordinates: { lat: -8.5069, lng: 115.2625 },
        bestTime: 'Abril - Octubre',
        priceRange: '$80 - $200/noche',
        category: 'romantic',
        reasonsToVisit: [
            'Villa privada con piscina infinita',
            'Vistas espectaculares a arrozales en terrazas',
            'Arquitectura tradicional balinesa auténtica',
            'Ubicación en el corazón cultural de Ubud',
            'Experiencia de inmersión cultural',
            'Privacidad y exclusividad'
        ],
        whatItOffers: [
            'Villa privada con todas las comodidades',
            'Chef privado para comidas',
            'Tours culturales y espirituales',
            'Clases de yoga y meditación',
            'Spa con tratamientos balineses',
            'Acceso a templos y ceremonias locales'
        ]
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

