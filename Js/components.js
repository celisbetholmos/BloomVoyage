// ============================================
// BLOOMVOYAGE - COMPONENTES REUTILIZABLES
// Componentes para usar en todas las páginas
// ============================================

// ===== Componente Header =====
function createHeader() {
    return `
        <header class="header">
            <div class="header-container">
                <div class="logo" onclick="window.location.href='index.html'">Bloom Voyage</div>
                <nav>
                    <ul class="nav-menu">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="destinations.html">Destinos</a></li>
                        <li><a href="restaurants.html">Restaurantes</a></li>
                        <li><a href="hotels.html">Hoteles</a></li>
                        <li><a href="romantic-spots.html">Lugares Románticos</a></li>
                        <li><a href="about.html">Nosotros</a></li>
                    </ul>
                </nav>
                <div class="header-buttons">
                    <button class="btn btn-outline" onclick="window.location.href='login.html'">Login</button>
                    <button class="btn btn-primary" onclick="window.location.href='signup.html'">Registro</button>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="mobile-menu">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="destinations.html">Categorías</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="signup.html">Registro</a></li>
                </ul>
            </div>
        </header>
    `;
}

// ===== Componente Footer =====
function createFooter() {
    return `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Bloom Voyage</h3>
                        <p>Tu guía de viajes estética para descubrir lugares hermosos y románticos alrededor del mundo.</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>Enlaces Rápidos</h3>
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="destinations.html">Destinos</a></li>
                            <li><a href="restaurants.html">Restaurantes</a></li>
                            <li><a href="hotels.html">Hoteles</a></li>
                            <li><a href="romantic-spots.html">Lugares Románticos</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Soporte</h3>
                        <ul>
                            <li><a href="about.html">Nosotros</a></li>
                            <li><a href="contact.html">Contacto</a></li>
                            <li><a href="tips.html">Consejos de Viaje</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Información de Contacto</h3>
                        <p><i class="fas fa-envelope"></i> info@bloomvoyage.com</p>
                        <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                        <p><i class="fas fa-clock"></i> Lun-Vie: 9AM - 6PM</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 Bloom Voyage – Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    `;
}

// ===== Componente Tarjeta de Destino =====
function createDestinationCard(destination) {
    // Descripción corta (primeros 120 caracteres)
    const shortDescription = destination.description ? 
        (destination.description.length > 120 ? destination.description.substring(0, 120) + '...' : destination.description) : 
        'Descubre este increíble destino.';
    
    return `
        <div class="card fade-in-on-scroll" data-destination="${destination.id}" data-category="${destination.category || 'all'}" style="opacity: 1; transform: none;">
            <img src="${destination.images[0].url}" alt="${destination.name}" class="card-image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 15px 15px 0 0;">
            <div class="card-content" style="padding: 1.5rem;">
                <h3 class="card-title" style="margin-bottom: 0.5rem; color: var(--text-primary);">${destination.name}</h3>
                <p class="card-location" style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem;">
                    <i class="fas fa-map-marker-alt" style="color: var(--primary-color);"></i> ${destination.location}
                </p>
                <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem; font-size: 0.95rem;">${shortDescription}</p>
                <button class="btn btn-primary card-button" style="width: 100%; margin-top: 1rem;" onclick="window.location.href='destination-detail.html?id=${destination.id}'">Ver Más</button>
            </div>
        </div>
    `;
}

// ===== Componente Video Embed Hero-Style =====
function createVideoEmbed(videoId, title = 'Video') {
    // Extraer el ID del video si viene como URL completa
    let videoIdClean = videoId;
    if (videoId.includes('youtube.com/watch?v=')) {
        videoIdClean = videoId.split('v=')[1].split('&')[0];
    } else if (videoId.includes('youtu.be/')) {
        videoIdClean = videoId.split('youtu.be/')[1].split('?')[0];
    }
    
    return `
        <div class="video-hero-container fade-in-on-scroll" style="margin: 3rem 0; width: 100%;">
            ${title ? `<h2 style="color: var(--primary-color); margin-bottom: 2rem; text-align: center;">${title}</h2>` : ''}
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; box-shadow: var(--shadow-lg); max-width: 100%; margin: 0 auto;">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                    src="https://www.youtube.com/embed/${videoIdClean}?rel=0&modestbranding=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        </div>
    `;
}

// ===== Componente Galería de Imágenes =====
function createImageGallery(images, title = 'Galería de Imágenes') {
    if (!images || images.length === 0) return '';
    
    let galleryHTML = `
        <div class="gallery-container fade-in-on-scroll" style="margin: 2rem 0;">
            <h3 style="margin-bottom: 1.5rem;">${title}</h3>
            <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
    `;
    
    images.forEach((image, index) => {
        galleryHTML += `
            <div class="gallery-item" style="border-radius: 15px; overflow: hidden; box-shadow: var(--shadow-sm); cursor: pointer; transition: var(--transition-base);" onclick="openImageModal('${image.url}', '${image.alt || ''}')">
                <img src="${image.url}" alt="${image.alt || ''}" style="width: 100%; height: 250px; object-fit: cover; transition: var(--transition-base);">
            </div>
        `;
    });
    
    galleryHTML += `
            </div>
        </div>
    `;
    
    return galleryHTML;
}

// ===== Componente Mapa de Google Maps =====
function createGoogleMap(lat, lng, name = 'Ubicación') {
    // Usar Google Maps embed sin API key (funciona para ubicaciones públicas)
    return `
        <div class="map-container fade-in-on-scroll" style="margin: 2rem 0;">
            <h3 style="margin-bottom: 1rem;">Ubicación en el Mapa</h3>
            <div style="border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-md);">
                <iframe 
                    width="100%" 
                    height="450" 
                    style="border:0" 
                    loading="lazy" 
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=${lat},${lng}&hl=es&z=15&output=embed">
                </iframe>
            </div>
            <p style="text-align: center; margin-top: 1rem;">
                <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" target="_blank" style="color: var(--primary-color);">
                    <i class="fas fa-external-link-alt"></i> Abrir en Google Maps
                </a>
            </p>
        </div>
    `;
}

// ===== Modal para Imágenes =====
function openImageModal(imageUrl, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    modal.innerHTML = `
        <div style="position: relative; max-width: 90%; max-height: 90%;">
            <img src="${imageUrl}" alt="${alt}" style="max-width: 100%; max-height: 90vh; border-radius: 10px;">
            <button onclick="this.closest('.image-modal').remove()" style="position: absolute; top: -40px; right: 0; background: white; border: none; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; color: #333;">&times;</button>
        </div>
    `;
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

// ===== Inicializar Componentes =====
function initComponents() {
    // Insertar header si existe el contenedor
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
    }
    
    // Insertar footer si existe el contenedor
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}

