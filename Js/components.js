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
    // Historia breve (primeros 150 caracteres)
    const shortHistory = destination.history ? destination.history.substring(0, 150) + '...' : '';
    
    return `
        <div class="card fade-in-on-scroll" data-destination="${destination.id}">
            <img src="${destination.images[0].url}" alt="${destination.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${destination.name}</h3>
                <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${destination.location}</p>
                <p>${destination.description}</p>
                ${shortHistory ? `<p style="font-size: 0.875rem; color: var(--text-light); margin-top: 0.5rem; font-style: italic;">${shortHistory}</p>` : ''}
                ${destination.contact ? `
                    <div style="margin: 1rem 0; padding: 0.75rem; background: rgba(255, 107, 157, 0.1); border-radius: 10px;">
                        <p style="font-size: 0.875rem; margin-bottom: 0.25rem;"><strong>Contacto:</strong></p>
                        ${destination.contact.phone ? `<p style="font-size: 0.875rem;"><i class="fas fa-phone"></i> ${destination.contact.phone}</p>` : ''}
                        ${destination.contact.website ? `<p style="font-size: 0.875rem;"><i class="fas fa-globe"></i> <a href="${destination.contact.website}" target="_blank" style="color: var(--primary-color);">Visitar sitio web</a></p>` : ''}
                        ${destination.contact.social ? `<p style="font-size: 0.875rem;"><i class="fab fa-instagram"></i> ${destination.contact.social}</p>` : ''}
                    </div>
                ` : ''}
                <button class="btn btn-primary card-button" onclick="window.location.href='destination-detail.html?id=${destination.id}'">Ver Más</button>
            </div>
        </div>
    `;
}

// ===== Componente Video Embed =====
function createVideoEmbed(videoId, title = '') {
    return `
        <div class="video-container fade-in-on-scroll" style="margin: 2rem 0;">
            ${title ? `<h3 style="margin-bottom: 1rem;">${title}</h3>` : ''}
            <div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 20px; box-shadow: var(--shadow-md);">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                    src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
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

