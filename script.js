/**
 * Main script logic for Sal y Mar
 * Handles i18n (Language toggling), and scroll animations
 */

const translations = {
    es: {
        filter_all: "Todas",
        book_nav: "Reservar ahora",
        hero_badge: "Bienvenido a tu escape perfecto",
        hero_title: "Tu rincón de paz entre la sal y el mar.",
        explore_btn: "Explorar la zona",
        book_btn: "Ver disponibilidad",
        amenities_title: "Todo a tu alcance",
        amenities_subtitle: "Diseñado para que solo te preocupes de disfrutar.",
        cat_playas_title: "Playas",
        cat_playas_desc: "Amanece con el sonido de las olas y disfruta de largas caminatas por la arena fina.",
        cat_gastro_title: "Gastronomía",
        cat_gastro_desc: "Sumérgete en la ruta del vino y las mejores tapas de la región, a minutos de tu puerta.",
        cat_night_title: "Ocio Nocturno",
        cat_night_desc: "Vive la noche andaluza con los mejores cócteles, música y ambiente frente al mar.",
        cat_culture_title: "Cultura",
        cat_culture_desc: "Descubre la historia, los castillos y la arquitectura palaciega del centro storico.",
        cat_nautica_title: "Náutica",
        cat_nautica_desc: "Explora la marina, los clubes náuticos y disfruta de atardeceres espectaculares.",
        cat_transport_title: "Transporte",
        cat_transport_desc: "Conectividad total con trenes y catamaranes directos a Cádiz y Sevilla.",
        cat_nature_title: "Naturaleza",
        cat_nature_desc: "Respira aire puro en las marismas, alquila bicicletas y observa la fauna local.",
        explore_title: "Explora cada lugar",
        explore_desc: "La ubicación estratégica te permite acceder caminando a la vida nocturna, restaurantes emblemáticos y el centro histórico.",
        poi_1: "Playa de la Puntilla a 1.6 km (20 min a pie)",
        poi_2: "Centro Histórico a 1.7 km (20 min a pie)",
        poi_3: "Estación de Tren a 3 km (7 min en coche)",
        book_title: "Reserva Sal y Mar hoy",
        book_desc: "Tu experiencia andaluza te está esperando. Asegura tus fechas al mejor precio.",
        airbnb_btn: "Reservar en Airbnb"
    },
    en: {
        filter_all: "All",
        book_nav: "Book Now",
        hero_badge: "Welcome to your perfect escape",
        hero_title: "Your peaceful corner between the salt and the sea.",
        explore_btn: "Explore the area",
        book_btn: "Check availability",
        amenities_title: "Everything within reach",
        amenities_subtitle: "Designed so you only have to worry about enjoying yourself.",
        cat_playas_title: "Beaches",
        cat_playas_desc: "Wake up to the sound of waves and enjoy long walks on the fine sand.",
        cat_gastro_title: "Gastronomy",
        cat_gastro_desc: "Immerse yourself in the wine route and the best tapas in the region, minutes from your door.",
        cat_night_title: "Nightlife",
        cat_night_desc: "Experience the Andalusian night with the best cocktails, music, and beachfront vibe.",
        cat_culture_title: "Culture",
        cat_culture_desc: "Discover the history, castles, and palatial architecture of the historic center.",
        cat_nautica_title: "Nautical",
        cat_nautica_desc: "Explore the marina, yacht clubs, and enjoy spectacular sunsets.",
        cat_transport_title: "Transport",
        cat_transport_desc: "Full connectivity with direct trains and catamarans to Cádiz and Seville.",
        cat_nature_title: "Nature",
        cat_nature_desc: "Breathe fresh air in the marshes, rent bikes, and observe local wildlife.",
        explore_title: "Explore every place",
        explore_desc: "The strategic location allows you to walk to nightlife, iconic restaurants, and the historic center.",
        poi_1: "Playa de la Puntilla beach 1.6 km (20 min walk)",
        poi_2: "Historic Center 1.7 km (20 min walk)",
        poi_3: "Train Station 3 km (7 min drive)",
        book_title: "Book Sal y Mar today",
        book_desc: "Your Andalusian experience is waiting for you. Secure your dates at the best price.",
        airbnb_btn: "Book on Airbnb"
    },
    fr: {
        filter_all: "Toutes",
        book_nav: "Réserver",
        hero_badge: "Bienvenue dans votre refuge idéal",
        hero_title: "Votre havre de paix entre le sel et la mer.",
        explore_btn: "Explorer la région",
        book_btn: "Voir les disponibilités",
        amenities_title: "Tout à portée de main",
        amenities_subtitle: "Conçu pour que vous n'ayez qu'à profiter de l'instant présent.",
        cat_playas_title: "Plages",
        cat_playas_desc: "Réveillez-vous au son des vagues et profitez de longues promenades sur le sable fin.",
        cat_gastro_title: "Gastronomie",
        cat_gastro_desc: "Plongez dans la route des vins et goûtez aux meilleures tapas, à quelques minutes de chez vous.",
        cat_night_title: "Vie Nocturne",
        cat_night_desc: "Vivez la nuit andalouse avec les meilleurs cocktails et une ambiance face à la mer.",
        cat_culture_title: "Culture",
        cat_culture_desc: "Découvrez l'histoire, les châteaux forts et l'architecture des palais du centre historique.",
        cat_nautica_title: "Nautisme",
        cat_nautica_desc: "Explorez la marina, les clubs nautiques et profitez de couchers de soleil spectaculaires.",
        cat_transport_title: "Transports",
        cat_transport_desc: "Connectivité totale grâce aux trains et catamarans directs pour Cadix et Séville.",
        cat_nature_title: "Nature",
        cat_nature_desc: "Respirez l'air pur dans les marais, louez des vélos et observez la faune locale.",
        explore_title: "Explorez chaque lieu",
        explore_desc: "L'emplacement stratégique vous permet de vous rendre à pied aux restaurants emblématiques et au centre-ville.",
        poi_1: "Plage de la Puntilla à 1.6 km (20 min à pied)",
        poi_2: "Centre Historique à 1.7 km (20 min à pied)",
        poi_3: "Gare ferroviaire à 3 km (7 min en voiture)",
        book_title: "Réservez Sal y Mar aujourd'hui",
        book_desc: "L'expérience andalouse vous attend. Assurez vos dates au meilleur prix.",
        airbnb_btn: "Réserver sur Airbnb"
    },
    de: {
        filter_all: "Alle",
        book_nav: "Buchen",
        hero_badge: "Willkommen an Ihrem perfekten Zufluchtsort",
        hero_title: "Ihre friedliche Oase zwischen Salz und Meer.",
        explore_btn: "Umgebung erkunden",
        book_btn: "Verfügbarkeit prüfen",
        amenities_title: "Alles in Reichweite",
        amenities_subtitle: "So gestaltet, dass Sie sich nur noch ums Genießen kümmern müssen.",
        cat_playas_title: "Strände",
        cat_playas_desc: "Erwachen Sie mit dem Rauschen der Wellen und genießen Sie lange Spaziergänge im feinen Sand.",
        cat_gastro_title: "Gastronomie",
        cat_gastro_desc: "Entdecken Sie die Weinstraße und die besten Tapas der Region, nur Minuten entfernt.",
        cat_night_title: "Nachtleben",
        cat_night_desc: "Erleben Sie die andalusische Nacht mit den besten Cocktails und einem tollen Ambiente am Meer.",
        cat_culture_title: "Kultur",
        cat_culture_desc: "Entdecken Sie die Geschichte, Burgen und die Architektur der Altstadt.",
        cat_nautica_title: "Nautik",
        cat_nautica_desc: "Erkunden Sie den Yachthafen und genießen Sie spektakuläre Sonnenuntergänge.",
        cat_transport_title: "ÖPNV",
        cat_transport_desc: "Perfekte Anbindung mit direkten Zügen und Katamaranen nach Cádiz und Sevilla.",
        cat_nature_title: "Natur",
        cat_nature_desc: "Atmen Sie frische Luft in den Sumpfgebieten und mieten Sie Fahrräder, um die Fauna zu beobachten.",
        explore_title: "Jeden Ort erkunden",
        explore_desc: "Durch die strategische Lage sind das Nachtleben und das historische Zentrum bequem zu Fuß erreichbar.",
        poi_1: "Strand von Puntilla 1.6 km (20 Min. zu Fuß)",
        poi_2: "Historisches Zentrum 1.7 km (20 Min. zu Fuß)",
        poi_3: "Bahnhof 3 km (7 Min. Fahrt)",
        book_title: "Buchen Sie Sal y Mar noch heute",
        book_desc: "Ihr andalusisches Erlebnis wartet auf Sie. Sichern Sie sich Ihre Daten zum besten Preis.",
        airbnb_btn: "Auf Airbnb buchen"
    }
};

let currentLang = 'es';

document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 2. Language Selector Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active styling
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Set language and update texts
            currentLang = btn.getAttribute('data-lang');
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang] && translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
        });
    });

    // 3. Leaflet Map Initialization & POIs
    const map = L.map('map', {
        scrollWheelZoom: false,
        tap: false
    }).setView([36.5885, -6.2320], 14);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    const places = [
      { id:"puntilla",   lat:36.584956, lng:-6.23841, title:"Playa de la Puntilla", category:"beach", icon:"🏖️", address:"Playa de la Puntilla" },
      { id:"valdelagrana",lat:36.5737, lng:-6.2253, title:"Playa de Valdelagrana", category:"beach", icon:"🏖️", address:"Valdelagrana" },
      { id:"muralla",    lat:36.580832, lng:-6.262349, title:"Playa La Muralla", category:"beach", icon:"🏖️", address:"Puerto Sherry" },
      { id:"phiphi",     lat:36.582551, lng:-6.250359, title:"PhiPhi Beach", category:"nightlife", icon:"🍹", address:"Puerto Sherry" },
      { id:"margarita",  lat:36.582276, lng:-6.250725, title:"Margarita", category:"nightlife", icon:"🌅", address:"Puerto Sherry" },
      { id:"canalla",    lat:36.581865, lng:-6.250394, title:"Playa Canalla", category:"nightlife", icon:"🎶", address:"Puerto Sherry" },
      { id:"lioclub",   lat:36.5868786, lng:-6.2337538, title:"Lio Club", category:"nightlife", icon:"🎭", address:"Playa de la Puntilla" },
      { id:"cristalera", lat:36.597649, lng:-6.2236862, title:"Bar La Cristalera", category:"nightlife", icon:"🎹", address:"Río Guadalete" },
      { id:"banana",    lat:36.5982164, lng:-6.2242166, title:"Banana Club", category:"nightlife", icon:"🍌", address:"Ribera del Marisco" },
      { id:"castillo",   lat:36.596356, lng:-6.226796, title:"Castillo de San Marcos", category:"culture", icon:"🏰", address:"Centro" },
      { id:"plazatoros",  lat:36.5967774, lng:-6.2327389, title:"Plaza de Toros", category:"culture", icon:"🐂", address:"Centro" },
      { id:"osborne",    lat:36.595001, lng:-6.229006, title:"Bodegas Osborne", category:"gastro", icon:"🍷", address:"Centro" },
      { id:"aponiente",  lat:36.6031417, lng:-6.2164111, title:"Aponiente (3 Michelin)", category:"gastro", icon:"⭐", address:"Molino de mareas" },
      { id:"ribera",     lat:36.5991, lng:-6.2235, title:"Ribera del Marisco", category:"gastro", icon:"🦞", address:"Río Guadalete" },
      { id:"torotapas",  lat:36.5949591, lng:-6.2291652, title:"Toro Tapas", category:"gastro", icon:"🥘", address:"Bodegas Osborne" },
      { id:"ditaly",     lat:36.5977907, lng:-6.2246438, title:"DITALY", category:"gastro", icon:"🍕", address:"Centro" },
      { id:"romerijo",   lat:36.5986168, lng:-6.2238748, title:"Romerijo", category:"gastro", icon:"🦐", address:"Ribera del Marisco" },
      { id:"tren",       lat:36.6040121, lng:-6.2179023, title:"Estación de Tren", category:"transport", icon:"🚆", address:"Renfe" },
      { id:"catamaran",  lat:36.593651, lng:-6.226607, title:"Catamaran a Cádiz", category:"transport", icon:"⛵", address:"Estación Marítima" },
      { id:"torunos",    lat:36.572096, lng:-6.2162876, title:"Parque Los Toruños", category:"nature", icon:"🌿", address:"Marismas" },
      { id:"calita",     lat:36.583343, lng:-6.268132, title:"Playa la Calita", category:"beach", icon:"🏖️", address:"Puerto Sherry" },
      { id:"puertosherry",lat:36.5803, lng:-6.2552, title:"Puerto Sherry Marina", category:"nautica", icon:"⚓", address:"Marina" },
      { id:"home",       lat:36.59349385204667, lng:-6.239525249282576, title:"Sal y Mar", category:"home", icon:"🏠", address:"Tu Refugio" },
      { id:"iglesia",    lat:36.599946, lng:-6.228838, title:"Iglesia Mayor Prioral", category:"culture", icon:"⛪", address:"Plaza de España" },
      { id:"mercado",    lat:36.600665, lng:-6.226591, title:"Mercado de Abastos", category:"gastro", icon:"🛒", address:"C. Ganado, 31" },
      { id:"alberti",    lat:36.59807, lng:-6.228274, title:"Museo Rafael Alberti", category:"culture", icon:"🏛️", address:"Calle Santo Domingo" },
      { id:"leones",     lat:36.600152, lng:-6.226926, title:"Casa Palacio de los Leones", category:"culture", icon:"🦁", address:"Plaza de la Herrería" },
      { id:"victoria",   lat:36.605519, lng:-6.216851, title:"Monasterio de la Victoria", category:"culture", icon:"✝️", address:"Avenida del Monasterio" },
      { id:"colon",      lat:36.596686, lng:-6.225643, title:"Plaza de Cristóbal Colón", category:"culture", icon:"🧭", address:"Plaza Colón" }
    ];

    const categoryColors = {
      beach:     "#06b6d4",
      nightlife: "#7B2FBE",
      culture:   "#f59e0b",
      gastro:    "#e11d48",
      transport: "#10b981",
      nature:    "#10b981",
      nautica:   "#0284c7",
      home:      "#ef4444"
    };

    let markers = [];

    function makeIcon(emoji, color) {
      const html = `<div style="width:34px;height:34px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:16px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.2);">${emoji}</div>`;
      return L.divIcon({ html, className:'', iconSize:[34,34], iconAnchor:[17,17], popupAnchor:[0,-14] });
    }

    function renderMarkers(filterCategory) {
        // Clear existing markers
        markers.forEach(m => map.removeLayer(m));
        markers = [];

        places.forEach(p => {
            if (filterCategory === 'all' || p.category === filterCategory || p.category === 'home') {
                const icon = makeIcon(p.icon, categoryColors[p.category]);
                const marker = L.marker([p.lat, p.lng], { icon });
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;
                
                const popupHtml = `
                    <div style="font-family:'Outfit',sans-serif; text-align:center; padding-top:4px;">
                        <strong>${p.title}</strong><br>
                        <small style="color:#666;">${p.address}</small><br>
                        <a href="${mapsUrl}" target="_blank" style="display:inline-block; margin-top:10px; padding:10px 16px; background:var(--accent-blue, #06b6d4); color:white; text-decoration:none; border-radius:20px; font-size:14px; font-weight:600; text-align:center;">
                            📍 Google Maps
                        </a>
                    </div>
                `;
                marker.bindPopup(popupHtml);
                marker.addTo(map);
                markers.push(marker);
            }
        });
    }

    // Initial render
    renderMarkers('all');

    // Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            const clickedBtn = e.currentTarget;
            clickedBtn.classList.add('active');
            
            // Render filtered
            const filter = clickedBtn.getAttribute('data-filter');
            renderMarkers(filter);

            // Sync poi-sidebar visibility
            syncSidebarFilter(filter);
        });
    });

    // POI Sidebar interactivity
    function syncSidebarFilter(filterCategory) {
        const poiCards = document.querySelectorAll('.poi-card');
        poiCards.forEach(card => {
            const placeId = card.getAttribute('data-id');
            const place = places.find(p => p.id === placeId);
            if (!place) return;
            if (filterCategory === 'all' || place.category === filterCategory || place.category === 'home') {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
                card.classList.remove('active');
            }
        });
    }

    function activateSidebarCard(placeId) {
        document.querySelectorAll('.poi-card').forEach(c => c.classList.remove('active'));
        const targetCard = document.getElementById('card-' + placeId);
        if (targetCard) {
            targetCard.classList.add('active');
            // Scroll the card into view inside the sidebar
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
    }

    document.querySelectorAll('.poi-card').forEach(card => {
        card.addEventListener('click', () => {
            const placeId = card.getAttribute('data-id');
            const place = places.find(p => p.id === placeId);
            if (!place) return;

            // Activate card
            activateSidebarCard(placeId);

            // Find the marker for this place and open its popup
            const matchedMarker = markers.find(m => {
                const ll = m.getLatLng();
                return ll.lat === place.lat && ll.lng === place.lng;
            });

            if (matchedMarker) {
                map.setView([place.lat, place.lng], 16, { animate: true });
                matchedMarker.openPopup();
            } else {
                // If filtered away, render all and then open
                renderMarkers('all');
                syncSidebarFilter('all');
                filterBtns.forEach(b => b.classList.remove('active'));
                document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
                
                // Wait for render then open
                setTimeout(() => {
                    const m2 = markers.find(m => {
                        const ll = m.getLatLng();
                        return ll.lat === place.lat && ll.lng === place.lng;
                    });
                    if (m2) { map.setView([place.lat, place.lng], 16, { animate: true }); m2.openPopup(); }
                }, 50);
            }
        });
    });

    // 3.5 Slide Card map link logic
    const slideCards = document.querySelectorAll('.slide-card');
    slideCards.forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.getAttribute('data-filter');
            if (filter) {
                // Update active state of map filter buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                const matchedBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
                if (matchedBtn) matchedBtn.classList.add('active');
                
                // Render category on map
                renderMarkers(filter);
                
                // Smooth scroll down to map section
                document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Auto-scroll Amenities Slider
    const slider = document.querySelector('.slider-container');
    if (slider) {
        let isPaused = false;
        setInterval(() => {
            if (!isPaused) {
                const firstCard = slider.querySelector('.slide-card');
                if (firstCard) {
                    const gap = parseInt(window.getComputedStyle(slider).gap) || 24;
                    const cardWidth = firstCard.offsetWidth + gap;
                    let nextScroll = slider.scrollLeft + cardWidth;
                    
                    // Return to start if at the end (allowing 10px margin of error)
                    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                        nextScroll = 0;
                    }
                    
                    slider.scrollTo({ left: nextScroll, behavior: 'smooth' });
                }
            }
        }, 3500);

        // Pause automatically when user interacts
        slider.addEventListener('mouseenter', () => isPaused = true);
        slider.addEventListener('mouseleave', () => isPaused = false);
        slider.addEventListener('touchstart', () => isPaused = true, {passive: true});
        slider.addEventListener('touchend', () => setTimeout(() => isPaused = false, 2000), {passive: true});
    }

    // 5. Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navActions = document.getElementById('nav-actions');

    if (navToggle && navActions) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navActions.classList.toggle('active');
        });

        // Close menu when clicking a link
        navActions.querySelectorAll('a, .lang-btn').forEach(item => {
            item.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navActions.classList.remove('active');
            });
        });
    }
});
