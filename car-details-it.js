const carInventory = [
    {
        id: 1,
        make: 'Mercedes-Benz',
        model: 'B180',
        year: 2011,
        price: '€4.900',
        mileage: '173.600 km',
        transmission: 'Manuale',
        engine: '80 kW',
        fuelType: 'Diesel',
        color: 'Nero',
        seats: 5,
        doors: 5,
        condition: 'Eccellenti',
        horsepower: '109 CV',
        description: 'Questa Mercedes-Benz B180 è in ottime condizioni con storico completo dei tagliandi. Gli interni spaziosi e il motore diesel efficiente la rendono perfetta sia per la guida in città che per i viaggi più lunghi.',
        features: [
            'Aria Condizionata', 'Servosterzo', 'Alzacristalli Elettrici',
            'ABS', 'ESP', 'Airbag', 'Radio/CD', 'Cerchi in Lega',
            'Cruise Control', 'Chiusura Centralizzata', 'Climatizzatore Automatico',
            'Bluetooth', 'Sensori di Parcheggio', 'Isofix', 'Fendinebbia'
        ],
        mainImage: 'images/Mercedes-Benz B 180.png',
        additionalImages: [
            'images/Mercedes-Benz B 180_interior.png',
            'images/Mercedes-Benz B 180_rear.png',
            'images/Mercedes-Benz B 180_side.png'
        ],
        alt: "Mercedes-Benz B180 del 2011, Argento"
    },
    {
        id: 2,
        make: 'Alfa Romeo',
        model: 'MiTo',
        year: 2009,
        price: '€4.900',
        mileage: '139.600 km',
        transmission: 'Manuale',
        engine: '99kw',
        fuelType: 'Benzina',
        color: 'Rosso',
        seats: 4,
        doors: 3,
        condition: 'Buone',
        horsepower: '155 CV',
        description: 'Questa Alfa Romeo MiTo offre il perfetto mix di stile italiano e prestazioni sportive. L\'inconfondibile esterno rosso e gli interni ben tenuti la rendono una scelta straordinaria. Dispone del selettore di modalità di guida Alfa DNA per un\'esperienza di guida personalizzabile.',
        features: [
            'Aria Condizionata', 'Servosterzo', 'Alzacristalli Elettrici',
            'ABS', 'ESP', 'Airbag', 'Radio/CD', 'Cerchi in Lega',
            'Cruise Control', 'Chiusura Centralizzata', 'Sistema DNA',
            'Bluetooth', 'Modalità Sport', 'Sedili in Pelle', 'Fendinebbia'
        ],
        mainImage: 'images/alfaromeo2009/1.png',
        additionalImages: [
            'images/alfaromeo2009/2.png',
            'images/alfaromeo2009/3.png',
            'images/alfaromeo2009/4.png'
        ],
        alt: "Alfa Romeo MiTo del 2009, Rosso"
    },
    {
        id: 3,
        make: 'BMW',
        model: '118',
        year: 2017,
        price: '€14.900',
        mileage: '109.900 km',
        transmission: 'Manuale',
        engine: '110kW',
        fuelType: 'Diesel',
        color: 'Nero',
        seats: 5,
        doors: 5,
        condition: 'Ottime',
        horsepower: '150 CV',
        description: 'Questa BMW 118 offre la rinomata esperienza di guida BMW con un\'ottima efficienza nei consumi.',
        features: [
            'Aria Condizionata', 'Servosterzo', 'Alzacristalli Elettrici',
            'ABS', 'ESP', 'Airbag', 'Sistema iDrive', 'Cerchi in Lega',
            'Cruise Control', 'Ingresso Senza Chiave', 'Climatizzatore Automatico',
            'Bluetooth', 'Sensori di Parcheggio', 'Sedili in Pelle', 'Navigatore'
        ],
        mainImage: 'images/BMW 118.png',
        additionalImages: [
            'images/bmw1182017/2.png',
            'images/bmw1182017/3.png',
            'images/bmw1182017/4.png',
        ],
        alt: "BMW 118 del 2017, Nero"
    },
    {
        id: 4,
        make: 'Suzuki',
        model: 'SX4 S-Cross',
        year: 2022,
        price: '€19.900',
        mileage: '51.500 km',
        transmission: 'Manuale',
        engine: 'Elettrica/Benzina 95kW',
        fuelType: 'Ibrida',
        color: 'Blu',
        seats: 5,
        doors: 5,
        condition: 'Eccellenti',
        horsepower: '129 CV',
        description: 'Questa Suzuki SX4 S-Cross, quasi nuova, è dotata di tecnologia ibrida avanzata per un\'eccellente economia di carburante e ridotte emissioni. La carrozzeria spaziosa del crossover offre versatilità sia per la guida urbana che per le avventure all\'aria aperta. Include il pacchetto di sicurezza completo Suzuki.',
        features: [
            'Sistema Ibrido', 'Climatizzatore Automatico', 'Alzacristalli Elettrici',
            'ABS', 'ESP', 'Airbag Multipli', 'Display Touchscreen', 'Cerchi in Lega',
            'Cruise Control Adattivo', 'Ingresso Senza Chiave', 'Assistenza di Corsia',
            'Bluetooth', 'Telecamera a 360°', 'Apple CarPlay/Android Auto', 'Fari a LED'
        ],
        mainImage: 'images/SuzukiSX42022.png',
        additionalImages: [
            'images/suzukisx42022/2.png',
            'images/suzukisx42022/3.png',
            'images/suzukisx42022/4.png'
        ],
        alt: "Suzuki SX4 S-Cross del 2022, Blu"
    },
    {
        id: 5,
        make: 'Fiat',
        model: 'Grande Punto',
        year: 2009,
        price: '€5.900',
        mileage: '91.500 km',
        transmission: 'Manuale',
        engine: '1.3 mjt 16v Speed 75cv Diesel',
        fuelType: 'Diesel',
        color: 'Bianco',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '75 CV',
        description: 'La Fiat Grande Punto è una hatchback pratica ed efficiente, perfetta per la guida in città. Offre una guida confortevole e una buona economia di carburante.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Chiusura Centralizzata',
            'Radio/CD'
        ],
        mainImage: 'images/fiatgrandepunto2009/1.png',
        additionalImages: ['images/fiatgrandepunto2009/2.png',
            'images/fiatgrandepunto2009/3.png',
            'images/fiatgrandepunto2009/4.png'
        ],
        alt: "Fiat Grande Punto del 2009, Bianco"
    },
    {
        id: 6,
        make: 'Ford',
        model: 'Fiesta',
        year: 2016,
        price: '€7.450',
        mileage: '106.000 km',
        transmission: 'Manuale',
        engine: '1.0 Titanium 80cv E6 Benzina',
        fuelType: 'Benzina',
        color: 'Grigio',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '80 CV',
        description: 'La Ford Fiesta è una hatchback elegante e divertente da guidare, nota per la sua maneggevolezza e l\'efficienza nei consumi. Questa edizione Titanium è dotata di funzionalità aggiuntive per comfort e praticità.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Cerchi in Lega',
            'Connettività Bluetooth'
        ],
        mainImage: 'images/fordfiesta2016/1.png',
        additionalImages: ['images/fordfiesta2016/2.png',
            'images/fordfiesta2016/3.png',
            'images/fordfiesta2016/4.png'
        ],
        alt: "Ford Fiesta del 2016, Grigio"
    },
    {
        id: 7,
        make: 'Audi',
        model: 'A1 Sportback 1.0 TFSI Ultra Design',
        year: 2015,
        price: '€10.450',
        mileage: '138.500 km',
        transmission: 'Manuale',
        engine: '1.0 TFSI Ultra 70 kW (95 CV)',
        fuelType: 'Benzina',
        color: 'Rosso',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '95 CV',
        description: 'L\'Audi A1 Sportback è una hatchback elegante e compatta, perfetta per la guida in città. Offre un mix di prestazioni ed efficienza.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Cerchi in Lega',
            'Chiusura Centralizzata'
        ],
        mainImage: 'images/audia12015/1.png',
        additionalImages: ['images/audia12015/2.png',
            'images/audia12015/3.png',
            'images/audia12015/4.png'
        ],
        alt: "Audi A1 Sportback del 2015, Rosso"
    },
    {
        id: 8,
        make: 'Renault',
        model: 'Scenic 1.5 dci Energy Intens',
        year: 2017,
        price: '€11.900',
        mileage: '117.400 km',
        transmission: 'Manuale',
        engine: '1.5 dci Energy Intens 81 kW (110 CV)',
        fuelType: 'Diesel',
        color: 'Nero',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '110 CV',
        description: 'La Renault Scenic è una MPV versatile e spaziosa, ideale per le famiglie. Offre una guida confortevole e molto spazio per passeggeri e bagagli.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Sistema di Navigazione',
            'Sensori di Parcheggio'
        ],
        mainImage: 'images/renaultscenic2017/1.png',
        additionalImages: ['images/renaultscenic2017/2.png',
            'images/renaultscenic2017/3.png',
            'images/renaultscenic2017/4.png'
        ],
        alt: "Renault Scenic del 2017, Nero"
    },
    {
        id: 9,
        make: 'Toyota',
        model: 'C-HR 1.8h Trend e-cvt',
        year: 2020,
        price: '€15.900',
        mileage: '123.500 km',
        transmission: 'Automatico',
        engine: '1.8h 72 kW (98 CV)',
        fuelType: 'Ibrida',
        color: 'Bianco',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '98 CV',
        description: 'La Toyota C-HR è un crossover ibrido elegante ed efficiente, noto per il suo design distintivo e l\'economia di carburante.',
        features: [
            'Sistema Ibrido',
            'Trasmissione Automatica',
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici'
        ],
        mainImage: 'images/toyotachr2020/1.png',
        additionalImages: ['images/toyotachr2020/2.png',
            'images/toyotachr2020/3.png',
            'images/toyotachr2020/4.png'
        ],
        alt: "Toyota C-HR del 2020, Bianco"
    },
    {
        id: 10,
        make: 'Renault',
        model: 'Kadjar 1.5 dci Energy Hypnotic 110cv edc',
        year: 2016,
        price: '€12.900',
        mileage: '126.800 km',
        transmission: 'Automatico',
        engine: '1.5 dci Energy Hypnotic 110cv edc 81 kW (110 CV)',
        fuelType: 'Diesel',
        color: 'Nero',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '110 CV',
        description: 'La Renault Kadjar è un SUV comodo e pratico, che offre una guida fluida e ampio spazio.',
        features: [
            'Trasmissione Automatica',
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Sistema di Navigazione'
        ],
        mainImage: 'images/renaultkadjar2016/1.png',
        additionalImages: ['images/renaultkadjar2016/2.png',
            'images/renaultkadjar2016/3.png',
            'images/renaultkadjar2016/4.png'
        ],
        alt: "Renault Kadjar del 2016, Nero"
    },
    {
        id: 11,
        make: 'Fiat',
        model: 'Panda 0.9 4x4 85cv Gancio',
        year: 2013,
        price: '€8.900',
        mileage: '133.400 km',
        transmission: 'Manuale',
        engine: '0.9 4x4 85cv Gancio 63 kW (86 CV)',
        fuelType: 'Benzina',
        color: 'Nero',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '86 CV',
        description: 'La Fiat Panda 4x4 è un\'auto compatta e versatile, ideale sia per la guida in città che per le avventure fuoristrada.',
        features: [
            'Trazione 4x4',
            'Aria Condizionata',
            'Servosterzo',
            'Chiusura Centralizzata'
        ],
        mainImage: 'images/fiatpanda2013/1.png',
        additionalImages: ['images/fiatpanda2013/2.png',
            'images/fiatpanda2013/3.png',
            'images/fiatpanda2013/4.png'
        ],
        alt: "Fiat Panda 4x4 del 2013, Nero"
    },
    {
        id: 12,
        make: 'Peugeot',
        model: '206 Plus 3p 1.1 Trendy',
        year: 2011,
        price: '€3.450',
        mileage: '157.400 km',
        transmission: 'Manuale',
        engine: '1.1 Trendy 44 kW (60 CV)',
        fuelType: 'Benzina',
        color: 'Blu',
        seats: 5,
        doors: 3,
        condition: 'Usato',
        horsepower: '60 CV',
        description: 'La Peugeot 206 Plus è una hatchback compatta ed economica, perfetta per la guida in città.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici'
        ],
        mainImage: 'images/peugeot2062011/1.png',
        additionalImages: ['images/peugeot2062011/2.png',
            'images/peugeot2062011/3.png',
            'images/peugeot2062011/4.png'
        ],
        alt: "Peugeot 206 Plus del 2011, Blu"
    },
    {
        id: 13,
        make: 'Mercedes-Benz',
        model: 'B 180 d (cdi) Premium auto FL E6',
        year: 2017,
        price: '€13.800',
        mileage: '124.800 km',
        transmission: 'Automatico',
        engine: 'B 180 d (cdi) Premium auto FL E6 80 kW (109 CV)',
        fuelType: 'Diesel',
        color: 'Bianco',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '109 CV',
        description: 'La Mercedes-Benz B 180 d è una MPV compatta pratica ed efficiente, che offre una guida confortevole e una buona economia di carburante.',
        features: [
            'Trasmissione Automatica',
            'Aria Condizionata',
            'Servosterzo',
            'Sistema di Navigazione'
        ],
        mainImage: 'images/mercedesb1802017/1.png',
        additionalImages: ['images/mercedesb1802017/2.png',
            'images/mercedesb1802017/3.png',
            'images/mercedesb1802017/4.png'
        ],
        alt: "Mercedes-Benz B180d del 2017, Bianco"
    },
    {
        id: 14,
        make: 'Lancia',
        model: 'Ypsilon 0.9 t.air Platinum Automatica',
        year: 2017,
        price: '€8.900',
        mileage: '109.900 km',
        transmission: 'Automatica',
        engine: 'Ypsilon 0.9 t.air Platinum Automatica 63 kW (86 CV)',
        fuelType: 'Benzina',
        color: 'Rosso',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '86 CV',
        description: 'La Lancia Ypsilon è un\'auto da città elegante e compatta, nota per il suo caratteristico design italiano.',
        features: [
            'Trasmissione Automatica',
            'Aria Condizionata',
            'Servosterzo',
            'Chiusura Centralizzata'
        ],
        mainImage: 'images/lanciay2017/1.png',
        additionalImages: ['images/lanciay2017/2.png',
            'images/lanciay2017/3.png',
            'images/lanciay2017/4.png'
        ],
        alt: "Lancia Ypsilon del 2017, Rosso"
    },
    {
        id: 15,
        make: 'Volkswagen',
        model: 'Golf 5p 1.0 tsi Business 110cv',
        year: 2018,
        price: '€11.900',
        mileage: '155.900 km',
        transmission: 'Manuale',
        engine: 'Golf 5p 1.0 tsi Business 110cv 81 kW (110 CV)',
        fuelType: 'Benzina',
        color: 'Bianco',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '110 CV',
        description: 'La Volkswagen Golf è una hatchback versatile e popolare, nota per la sua affidabilità e la guida confortevole.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Connettività Bluetooth'
        ],
        mainImage: 'images/volksgolf2018/1.png',
        additionalImages: ['images/volksgolf2018/2.png',
            'images/volksgolf2018/3.png',
            'images/volksgolf2018/4.png'
        ],
        alt: "Volkswagen Golf del 2018, Bianco"
    },
    {
        id: 16,
        make: 'Citroen',
        model: 'C4 Cactus 1.6 bluehdi Shine s',
        year: 2015,
        price: '€8.900',
        mileage: '149.999 km',
        transmission: 'Manuale',
        engine: 'C4 Cactus 1.6 bluehdi Shine s 73 kW (99 CV)',
        fuelType: 'Diesel',
        color: 'Grigio',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '99 CV',
        description: 'La Citroen C4 Cactus è un crossover distintivo ed efficiente, noto per il suo stile unico e l\'economia di carburante.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Cruise Control'
        ],
        mainImage: 'images/citroenc42015/1.png',
        additionalImages: ['images/citroenc42015/2.png',
            'images/citroenc42015/3.png',
            'images/citroenc42015/4.png'
        ],
        alt: "Citroen C4 Cactus del 2015, Grigio"
    },
    {
        id: 17,
        make: 'Peugeot',
        model: '2008 1.2 puretech GT s',
        year: 2021,
        price: '€19.900',
        mileage: '28.650 km',
        transmission: 'Manuale',
        engine: '2008 1.2 puretech GT s 96 kW (131 CV)',
        fuelType: 'Benzina',
        color: 'Grigio',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '131 CV',
        description: 'La Peugeot 2008 è un SUV elegante e moderno, che offre un mix di prestazioni e comfort.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Sistema di Navigazione'
        ],
        mainImage: 'images/Peugeot20082021/1.png',
        additionalImages: ['images/Peugeot20082021/2.png',
            'images/Peugeot20082021/3.png',
            'images/Peugeot20082021/4.png'
        ],
        alt: "Peugeot 2008 del 2021, Grigio"
    },
    {
        id: 18,
        make: 'Peugeot',
        model: '207 SW 1.4 vti 16v Active 95cv',
        year: 2011,
        price: '€4.350',
        mileage: '146.700 km',
        transmission: 'Manuale',
        engine: '207 SW 1.4 vti 16v Active 95cv 70 kW (95 CV)',
        fuelType: 'Benzina',
        color: 'Argento',
        seats: 5,
        doors: 5,
        condition: 'Usato',
        horsepower: '95 CV',
        description: 'La Peugeot 207 SW è una pratica e compatta station wagon, ideale per chi ha bisogno di spazio extra.',
        features: [
            'Aria Condizionata',
            'Servosterzo',
            'Alzacristalli Elettrici',
            'Chiusura Centralizzata'
        ],
        mainImage: 'images/Peugeot2072011/1.png',
        additionalImages: ['images/Peugeot2072011/2.png',
            'images/Peugeot2072011/3.png',
            'images/Peugeot2072011/4.png'
        ],
        alt: "Peugeot 207 SW del 2011, Argento"
    }
];
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'));
const car = carInventory.find(c => c.id === carId);
const carDetailsContainer = document.getElementById('carDetailsContainer');

if (car) {

    // Creating thumbnail elements
    let thumbnailsHTML = '';
    const allImages = [car.mainImage, ...car.additionalImages.filter(img => img)];

    allImages.forEach((img, index) => {
        thumbnailsHTML += `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${img}" alt="${car.alt} - View ${index + 1}">
            </div>
        `;
    });

    // Creating feature items
    let featuresHTML = '';
    if (car.features && car.features.length > 0) {
        car.features.forEach(feature => {
            featuresHTML += `
                <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>${feature}</span>
                </div>
            `;
        });
    }

    carDetailsContainer.innerHTML = `
    <div class="car-details-page">
        <div class="car-left-column">
            <div class="car-gallery">
                <div class="main-image-container">
                    <button class="gallery-nav prev-btn"><i class="fas fa-chevron-left"></i></button>
                    <img src="${car.mainImage}" alt="${car.alt}" class="main-image" id="mainImage">
                    <button class="gallery-nav next-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="thumbnail-container">
                    ${thumbnailsHTML}
                </div>
            </div>
            
            <div class="car-actions">
               <a href="#contact" class="action-btn primary">
    <i class="fas fa-envelope"></i> Contattaci
</a>
            </div>
        </div>
        
        <div class="car-right-column">
            <div class="car-header">
                <div class="car-title">
                    <h1>${car.year} ${car.make} ${car.model}</h1>
                    <div class="car-subtitle">
                        <span class="subtitle-item"><i class="fas fa-tachometer-alt"></i> ${car.mileage}</span>
                        <span class="subtitle-item"><i class="fas fa-gas-pump"></i> ${car.fuelType}</span>
                        <span class="subtitle-item"><i class="fas fa-cog"></i> ${car.transmission}</span>
                        <span class="verified-badge"><i class="fas fa-shield-alt"></i> Certificato</span>
                    </div>
                </div>
                <div class="car-price-wrapper">
                    <div class="car-price">${car.price}</div>
                    <div class="price-note">All taxes included</div>
                </div>
            </div>
            
            <div class="car-details-tabs">
                <div class="tabs-header">
                    <button class="tab-btn active" data-tab="specs">Specifiche</button>
                    <button class="tab-btn" data-tab="description">Descrizione</button>
                    <button class="tab-btn" data-tab="features">Caratteristiche</button>
                </div>
                
                <div class="tab-content active" id="specs-tab">
                    <div class="specs-grid">
                        <div class="specs-section">
                            <h3 class="section-title">Informazioni di Base</h3>
                            <div class="spec-group">
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-car"></i></span>
                                    <span class="spec-label">Condizione</span>
                                    <span class="spec-value">${car.condition}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-calendar-alt"></i></span>
                                    <span class="spec-label">Anno</span>
                                    <span class="spec-value">${car.year}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-tag"></i></span>
                                    <span class="spec-label">Marca</span>
                                    <span class="spec-value">${car.make}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-tag"></i></span>
                                    <span class="spec-label">Modello</span>
                                    <span class="spec-value">${car.model}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="specs-section">
                            <h3 class="section-title">Prestazioni</h3>
                            <div class="spec-group">
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-tachometer-alt"></i></span>
                                    <span class="spec-label">Motore</span>
                                    <span class="spec-value">${car.engine}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-horse"></i></span>
                                    <span class="spec-label">Potenza</span>
                                    <span class="spec-value">${car.horsepower}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-gas-pump"></i></span>
                                    <span class="spec-label">Tipo di Carburante</span>
                                    <span class="spec-value">${car.fuelType}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-cog"></i></span>
                                    <span class="spec-label">Transmissione</span>
                                    <span class="spec-value">${car.transmission}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="specs-section">
                            <h3 class="section-title">Caratteristiche</h3>
                            <div class="spec-group">
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-palette"></i></span>
                                    <span class="spec-label">Colore</span>
                                    <span class="spec-value">${car.color}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-chair"></i></span>
                                    <span class="spec-label">Posti</span>
                                    <span class="spec-value">${car.seats}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-door-open"></i></span>
                                    <span class="spec-label">Porte</span>
                                    <span class="spec-value">${car.doors}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-road"></i></span>
                                    <span class="spec-label">Chilometraggio</span>
                                    <span class="spec-value">${car.mileage}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tab-content" id="description-tab">
                    <div class="car-description">
                        <p>${car.description}</p>
                    </div>
                </div>
                
                <div class="tab-content" id="features-tab">
                    <div class="feature-list">
                        ${featuresHTML}
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="contact-button-container">
    <a href="#contact" class="btn btn-primary contact-button">Contattaci</a>
</div>
</div>
        `;
    // Thumbnail click event listener
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = allImages[index];
            currentImageIndex = index; // Update current index
        });
    });

    // Gallery navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        updateGallery();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % allImages.length;
        updateGallery();
    });

    function updateGallery() {
        mainImage.src = allImages[currentIndex];
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[currentIndex].classList.add('active');
    }
} else {
    carDetailsContainer.innerHTML = '<p>Auto non trovata.</p>';
}

// Lightbox functionality (after car details are loaded)
document.addEventListener('DOMContentLoaded', function () {
    if (car) {
        const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.style.display = 'none';
        lightbox.style.position = 'fixed';
        lightbox.style.zIndex = '1000';
        lightbox.style.paddingTop = '100px';
        lightbox.style.left = '0';
        lightbox.style.top = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.overflow = 'auto';
        lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';

        // Create lightbox content
        lightbox.innerHTML = `
            <span class="close-lightbox" style="position: absolute; top: 15px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;">&times;</span>
            <img class="lightbox-content" id="lightbox-img" style="margin: auto; display: block; width: 80%; max-width: 900px; max-height: 80%;">
            <a class="lightbox-prev" id="lightbox-prev" style="cursor: pointer; position: absolute; top: 50%; left: 20px; color: white; font-size: 30px; font-weight: bold; transition: 0.6s ease; user-select: none;">&#10094;</a>
            <a class="lightbox-next" id="lightbox-next" style="cursor: pointer; position: absolute; top: 50%; right: 20px; color: white; font-size: 30px; font-weight: bold; transition: 0.6s ease; user-select: none;">&#10095;</a>
        `;

        document.body.appendChild(lightbox);

        // Get all images for the gallery
        const allImages = [car.mainImage, ...car.additionalImages.filter(img => img)];
        let currentImageIndex = 0;

        // Main image click opens lightbox
        mainImage.addEventListener('click', function () {
            lightbox.style.display = 'block';
            document.getElementById('lightbox-img').src = mainImage.src;
            currentImageIndex = allImages.indexOf(mainImage.src);
            if (currentImageIndex === -1) currentImageIndex = 0;
        });

        // Close lightbox
        document.querySelector('.close-lightbox').addEventListener('click', function () {
            lightbox.style.display = 'none';
        });

        // Previous image
        document.getElementById('lightbox-prev').addEventListener('click', function () {
            currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
            document.getElementById('lightbox-img').src = allImages[currentImageIndex];
        });

        // Next image
        document.getElementById('lightbox-next').addEventListener('click', function () {
            currentImageIndex = (currentImageIndex + 1) % allImages.length;
            document.getElementById('lightbox-img').src = allImages[currentImageIndex];
        });

        // Close on ESC key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                lightbox.style.display = 'none';
            }
        });
    }
});

// Tab functionality
document.addEventListener('DOMContentLoaded', function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding tab content
            const tabId = btn.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
});