const carInventory = [
    {
        id: 1,
        make: 'Mercedes-Benz',
        model: 'B180',
        year: 2011,
        price: '€4.900',
        mileage: '173,600 km',
        transmission: 'Manual',
        engine: '80 kW',
        fuelType: 'Diesel',
        color: 'Black',
        seats: 5,
        doors: 5,
        condition: 'Excellent',
        horsepower: '109 HP',
        description: 'This Mercedes-Benz B180 is in excellent condition with full service history. The spacious interior and efficient diesel engine make it perfect for both city driving and longer journeys. Recently serviced with new brakes and tires.',
        features: [
            'Air Conditioning', 'Power Steering', 'Electric Windows', 
            'ABS', 'ESP', 'Airbags', 'Radio/CD', 'Alloy Wheels',
            'Cruise Control', 'Central Locking', 'Climate Control',
            'Bluetooth', 'Parking Sensors', 'Isofix', 'Fog Lights'
        ],
        mainImage: 'images/Mercedes-Benz B 180.png',
        additionalImages: [
            'images/Mercedes-Benz B 180_interior.png',
            'images/Mercedes-Benz B 180_rear.png',
            'images/Mercedes-Benz B 180_side.png'
        ],
        alt: "2011 Mercedes-Benz B180, Silver"
    },
    {
        id: 2,
        make: 'Alfa Romeo',
        model: 'MiTo',
        year: 2009,
        price: '€4.900',
        mileage: '139,600 km',
        transmission: 'Manual',
        engine: '99kw',
        fuelType: 'Petrol',
        color: 'Red',
        seats: 4,
        doors: 3,
        condition: 'Good',
        horsepower: '155 HP',
        description: 'This Alfa Romeo MiTo offers the perfect blend of Italian style and sporty performance. The distinctive red exterior and well-maintained interior make this a standout choice. Features Alfa\'s DNA driving mode selector for a customizable driving experience.',
        features: [
            'Air Conditioning', 'Power Steering', 'Electric Windows', 
            'ABS', 'ESP', 'Airbags', 'Radio/CD', 'Alloy Wheels',
            'Cruise Control', 'Central Locking', 'DNA System',
            'Bluetooth', 'Sport Mode', 'Leather Seats', 'Fog Lights'
        ],
        mainImage: 'images/alfaromeo2009/1.png',
        additionalImages: [
            'images/alfaromeo2009/2.png',
            'images/alfaromeo2009/3.png',
            'images/alfaromeo2009/4.png'
        ],
        alt: "2009 Alfa Romeo MiTo, Red"
    },
    {
        id: 3,
        make: 'BMW',
        model: '118',
        year: 2017,
        price: '€14.900',
        mileage: '109,900 km',
        transmission: 'Manual',
        engine: '110kW',
        fuelType: 'Diesel',
        color: 'Black',
        seats: 5,
        doors: 5,
        condition: 'Very Good',
        horsepower: '150 HP',
        description: 'This BMW 118 offers the renowned BMW driving experience with excellent fuel efficiency. The sleek black exterior and premium interior finishes make this a sophisticated choice. Includes the BMW iDrive system with navigation and premium audio.',
        features: [
            'Air Conditioning', 'Power Steering', 'Electric Windows', 
            'ABS', 'ESP', 'Airbags', 'iDrive System', 'Alloy Wheels',
            'Cruise Control', 'Keyless Entry', 'Climate Control',
            'Bluetooth', 'Parking Sensors', 'Leather Seats', 'Navigation'
        ],
        mainImage: 'images/BMW 118.png',
        additionalImages: [
            'images/bmw1182017/2.png',
            'images/bmw1182017/3.png',
            'images/bmw1182017/4.png',
        ],
        alt: "2017 BMW 118, Black"
    },
    {
        id: 4,
        make: 'Suzuki',
        model: 'SX4 S-Cross',
        year: 2022,
        price: '€19.900',
        mileage: '51,500 km',
        transmission: 'Manual',
        engine: 'Electric/Petrol 95kW',
        fuelType: 'Hybrid',
        color: 'Blue',
        seats: 5,
        doors: 5,
        condition: 'Excellent',
        horsepower: '129 HP',
        description: 'This nearly new Suzuki SX4 S-Cross features advanced hybrid technology for excellent fuel economy and reduced emissions. The spacious crossover design offers versatility for both urban driving and outdoor adventures. Includes Suzuki\'s comprehensive safety package.',
        features: [
            'Hybrid System', 'Climate Control', 'Electric Windows', 
            'ABS', 'ESP', 'Multiple Airbags', 'Touchscreen Display', 'Alloy Wheels',
            'Adaptive Cruise Control', 'Keyless Entry', 'Lane Assist',
            'Bluetooth', '360° Camera', 'Apple CarPlay/Android Auto', 'LED Headlights'
        ],
        mainImage: 'images/SuzukiSX42022.png',
        additionalImages: [
            'images/suzukisx42022/2.png',
            'images/suzukisx42022/3.png',
            'images/suzukisx42022/4.png'
        ],
        alt: "2022 Suzuki SX4 S-Cross, Blue"
    },
    {
        id: 5,
        make: 'Fiat',
        model: 'Grande Punto',
        year: 2009,
        price: '€5.900',
        mileage: '91,500 km',
        transmission: 'Manual',
        engine: '1.3 mjt 16v Speed 75cv Diesel',
        fuelType: 'Diesel',
        color: 'White', // Assuming the color is white from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Used',
        horsepower: '75 HP', // From the engine details (75cv)
        description: 'The Fiat Grande Punto is a practical and efficient hatchback, perfect for city driving. It offers a comfortable ride and good fuel economy.', // Add a relevant description
        features: [ // Add relevant features based on standard Punto features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Central Locking',
            'Radio/CD'
        ],
        mainImage: 'images/fiatgrandepunto2009/1.png', // Use the same image path as in cars.js
        additionalImages:['images/fiatgrandepunto2009/2.png',
            'images/fiatgrandepunto2009/3.png',
            'images/fiatgrandepunto2009/4.png'
        ], // Add more image paths if available
        alt: "2009 Fiat Grande Punto, White"
    },
    {
        id: 6,
        make: 'Ford',
        model: 'Fiesta',
        year: 2016,
        price: '€7.450',
        mileage: '106,000 km',
        transmission: 'Manual',
        engine: '1.0 Titanium 80cv E6 Benzina',
        fuelType: 'Benzina',
        color: 'Gray', // Assuming the color is gray from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Used',
        horsepower: '80 HP', // From the engine details (80cv)
        description: 'The Ford Fiesta is a stylish and fun-to-drive hatchback, known for its agile handling and fuel efficiency. This Titanium edition comes with added features for comfort and convenience.', // Add a relevant description
        features: [ // Add relevant features based on standard Fiesta Titanium features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Alloy Wheels',
            'Bluetooth Connectivity'
        ],
        mainImage: 'images/fordfiesta2016/1.png', // Use the same image path as in cars.js
        additionalImages:['images/fordfiesta2016/2.png',
                        'images/fordfiesta2016/3.png',
                        'images/fordfiesta2016/4.png'
        ], // Add more image paths if available
        alt: "2016 Ford Fiesta, Gray"
    },
    {
        id: 7,
        make: 'Audi',
        model: 'A1 Sportback 1.0 TFSI Ultra Design',
        year: 2015,
        price: '€10.450',
        mileage: '138.500 km',
        transmission: 'Manual',
        engine: '1.0 TFSI Ultra 70 kW (95 CV)',
        fuelType: 'Benzina',
        color: 'Red', // Assuming the color is red from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '95 HP', // From the engine details (95 CV)
        description: 'The Audi A1 Sportback is a stylish and compact hatchback, perfect for city driving. It offers a blend of performance and efficiency.', // Add a relevant description
        features: [ // Add relevant features based on standard A1 features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Alloy Wheels',
            'Central Locking'
        ],
        mainImage: 'images/audia12015/1.png', // Use the same image path as in cars.js
        additionalImages:['images/audia12015/2.png',
                            'images/audia12015/3.png',
                            'images/audia12015/4.png'
        ], // Add more image paths if available
        alt: "2015 Audi A1 Sportback, Red"
    },
    {
        id: 8,
        make: 'Renault',
        model: 'Scenic 1.5 dci Energy Intens',
        year: 2017,
        price: '€11.900',
        mileage: '117.400 km',
        transmission: 'Manual',
        engine: '1.5 dci Energy Intens 81 kW (110 CV)',
        fuelType: 'Diesel',
        color: 'Black', // Assuming the color is black from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '110 HP', // From the engine details (110 CV)
        description: 'The Renault Scenic is a versatile and spacious MPV, ideal for families. It offers a comfortable ride and plenty of room for passengers and cargo.', // Add a relevant description
        features: [ // Add relevant features based on standard Scenic features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Navigation System',
            'Parking Sensors'
        ],
        mainImage: 'images/renaultscenic2017/1.png', // Use the same image path as in cars.js
        additionalImages:['images/renaultscenic2017/2.png',
                            'images/renaultscenic2017/3.png',
                            'images/renaultscenic2017/4.png'
        ], // Add more image paths if available
        alt: "2017 Renault Scenic, Black"
    },{
        id: 9, // Make sure this ID is correct and doesn't conflict
        make: 'Toyota',
        model: 'C-HR 1.8h Trend e-cvt',
        year: 2020, // Using the year from the image 11/2020
        price: '€15.900',
        mileage: '123.500 km',
        transmission: 'Automatic',
        engine: '1.8h 72 kW (98 CV)',
        fuelType: 'Hybrid',
        color: 'White', // Assuming the color is white from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '98 HP', // From the engine details (98 CV)
        description: 'The Toyota C-HR is a stylish and efficient hybrid crossover, known for its distinctive design and fuel economy.', // Add a relevant description
        features: [ // Add relevant features based on standard C-HR features or the image
            'Hybrid System',
            'Automatic Transmission',
            'Air Conditioning',
            'Power Steering',
            'Electric Windows'
        ],
        mainImage: 'images/toyotachr2020/1.png', // You will need to add this image to your images folder
        additionalImages:['images/toyotachr2020/2.png',
            'images/toyotachr2020/3.png',
            'images/toyotachr2020/4.png'
        ], // Add more image paths if available
        alt: "2020 Toyota C-HR, White"
    },
    {
        id: 10, // Make sure this ID is correct and doesn't conflict
        make: 'Renault',
        model: 'Kadjar 1.5 dci Energy Hypnotic 110cv edc',
        year: 2016, // Using the year from the image 12/2016
        price: '€12.900',
        mileage: '126.800 km',
        transmission: 'Automatic',
        engine: '1.5 dci Energy Hypnotic 110cv edc 81 kW (110 CV)',
        fuelType: 'Diesel',
        color: 'Black', // Assuming the color is black from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '110 HP', // From the engine details (110 CV)
        description: 'The Renault Kadjar is a comfortable and practical SUV, offering a smooth ride and ample space.', // Add a relevant description
        features: [ // Add relevant features based on standard Kadjar features or the image
            'Automatic Transmission',
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Navigation System'
        ],
        mainImage: 'images/renaultkadjar2016/1.png', // You will need to add this image to your images folder
        additionalImages:['images/renaultkadjar2016/2.png',
            'images/renaultkadjar2016/3.png',
            'images/renaultkadjar2016/4.png'
        ], // Add more image paths if available
        alt: "2016 Renault Kadjar, Black"
    },
    {
        id: 11, // Make sure this ID is correct and doesn't conflict
        make: 'Fiat',
        model: 'Panda 0.9 4x4 85cv Gancio',
        year: 2013, // Using the year from the image 06/2013
        price: '€8.900',
        mileage: '133.400 km',
        transmission: 'Manual',
        engine: '0.9 4x4 85cv Gancio 63 kW (86 CV)',
        fuelType: 'Benzina',
        color: 'Black', // Assuming the color is black from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '86 HP', // From the engine details (86 CV)
        description: 'The Fiat Panda 4x4 is a compact and versatile car, ideal for both city driving and off-road adventures.', // Add a relevant description
        features: [ // Add relevant features based on standard Panda features or the image
            '4x4 Drive',
            'Air Conditioning',
            'Power Steering',
            'Central Locking'
        ],
        mainImage: 'images/fiatpanda2013/1.png', // You will need to add this image to your images folder
        additionalImages:['images/fiatpanda2013/2.png',
            'images/fiatpanda2013/3.png',
            'images/fiatpanda2013/4.png'
        ], // Add more image paths if available
        alt: "2013 Fiat Panda 4x4, Black"
    },
    {
        id: 12, // Make sure this ID is correct and doesn't conflict
        make: 'Peugeot',
        model: '206 Plus 3p 1.1 Trendy',
        year: 2011, // Using the year from the image 09/2011
        price: '€3.450',
        mileage: '157.400 km',
        transmission: 'Manual',
        engine: '1.1 Trendy 44 kW (60 CV)',
        fuelType: 'Benzina',
        color: 'Blue', // Assuming the color is blue from the image
        seats: 5, // Assuming 5 seats
        doors: 3, // Assuming 3 doors
        condition: 'Usato', // From the image
        horsepower: '60 HP', // From the engine details (60 CV)
        description: 'The Peugeot 206 Plus is a compact and economical hatchback, perfect for city driving.', // Add a relevant description
        features: [ // Add relevant features based on standard 206 features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows'
        ],
        mainImage: 'images/peugeot2062011/1.png', // You will need to add this image to your images folder
        additionalImages:['images/peugeot2062011/2.png',
            'images/peugeot2062011/3.png',
            'images/peugeot2062011/4.png'
        ], // Add more image paths if available
        alt: "2011 Peugeot 206 Plus, Blue"
    },
    {
        id: 13, // Make sure this ID is correct and doesn't conflict
        make: 'Mercedes-Benz',
        model: 'B 180 d (cdi) Premium auto FL E6',
        year: 2017, // Using the year from the image 10/2017
        price: '€13.800',
        mileage: '124.800 km',
        transmission: 'Automatico',
        engine: 'B 180 d (cdi) Premium auto FL E6 80 kW (109 CV)',
        fuelType: 'Diesel',
        color: 'White', // Assuming the color is white from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '109 HP', // From the engine details (109 CV)
        description: 'The Mercedes-Benz B 180 d is a practical and efficient compact MPV, offering a comfortable ride and good fuel economy.', // Add a relevant description
        features: [ // Add relevant features based on standard B-Class features or the image
            'Automatic Transmission',
            'Air Conditioning',
            'Power Steering',
            'Navigation System'
        ],
        mainImage: 'images/mercedesb1802017/1.png', // You will need to add this image to your images folder
        additionalImages:['images/mercedesb1802017/2.png',
            'images/mercedesb1802017/3.png',
            'images/mercedesb1802017/4.png'
        ], // Add more image paths if available
        alt: "2017 Mercedes-Benz B180d, White"
    },
    {
        id: 14, // Make sure this ID is correct and doesn't conflict
        make: 'Lancia',
        model: 'Ypsilon 0.9 t.air Platinum Automatica',
        year: 2017, // Using the year from the image 04/2017
        price: '€8.900',
        mileage: '109.900 km',
        transmission: 'Automatica',
        engine: 'Ypsilon 0.9 t.air Platinum Automatica 63 kW (86 CV)',
        fuelType: 'Benzina',
        color: 'Red', // Assuming the color is red from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '86 HP', // From the engine details (86 CV)
        description: 'The Lancia Ypsilon is a stylish and compact city car, known for its distinctive Italian design.', // Add a relevant description
        features: [ // Add relevant features based on standard Ypsilon features or the image
            'Automatic Transmission',
            'Air Conditioning',
            'Power Steering',
            'Central Locking'
        ],
        mainImage: 'images/lanciay2017/1.png', // You will need to add this image to your images folder
        additionalImages:['images/lanciay2017/2.png',
            'images/lanciay2017/3.png',
            'images/lanciay2017/4.png'
        ], // Add more image paths if available
        alt: "2017 Lancia Ypsilon, Red"
    },
    {
        id: 15, // Make sure this ID is correct and doesn't conflict
        make: 'Volkswagen',
        model: 'Golf 5p 1.0 tsi Business 110cv',
        year: 2018, // Using the year from the image 05/2018
        price: '€11.900',
        mileage: '155.900 km',
        transmission: 'Manual',
        engine: 'Golf 5p 1.0 tsi Business 110cv 81 kW (110 CV)',
        fuelType: 'Benzina',
        color: 'White', // Assuming the color is white from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '110 HP', // From the engine details (110 CV)
        description: 'The Volkswagen Golf is a versatile and popular hatchback, known for its reliability and comfortable ride.', // Add a relevant description
        features: [ // Add relevant features based on standard Golf features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Bluetooth Connectivity'
        ],
        mainImage: 'images/volksgolf2018/1.png', // You will need to add this image to your images folder
        additionalImages:['images/volksgolf2018/2.png',
            'images/volksgolf2018/3.png',
            'images/volksgolf2018/4.png'
        ], // Add more image paths if available
        alt: "2018 Volkswagen Golf, White"
    },
    {
        id: 16, // Make sure this ID is correct and doesn't conflict
        make: 'Citroen',
        model: 'C4 Cactus 1.6 bluehdi Shine s',
        year: 2015, // Using the year from the image 05/2015
        price: '€8.900',
        mileage: '149.999 km',
        transmission: 'Manual',
        engine: 'C4 Cactus 1.6 bluehdi Shine s 73 kW (99 CV)',
        fuelType: 'Diesel',
        color: 'Gray', // Assuming the color is gray from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '99 HP', // From the engine details (99 CV)
        description: 'The Citroen C4 Cactus is a distinctive and efficient crossover, known for its unique styling and fuel economy.', // Add a relevant description
        features: [ // Add relevant features based on standard C4 Cactus features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Cruise Control'
        ],
        mainImage: 'images/citroenc42015/1.png', // You will need to add this image to your images folder
        additionalImages:['images/citroenc42015/2.png',
            'images/citroenc42015/3.png',
            'images/citroenc42015/4.png'
        ], // Add more image paths if available
        alt: "2015 Citroen C4 Cactus, Gray"
    },
    {
        id: 17, // Make sure this ID is correct and doesn't conflict
        make: 'Peugeot',
        model: '2008 1.2 puretech GT s',
        year: 2021, // Using the year from the image 02/2021
        price: '€19.900',
        mileage: '28.650 km',
        transmission: 'Manual',
        engine: '2008 1.2 puretech GT s 96 kW (131 CV)',
        fuelType: 'Benzina',
        color: 'Gray', // Assuming the color is gray from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '131 HP', // From the engine details (131 CV)
        description: 'The Peugeot 2008 is a stylish and modern SUV, offering a blend of performance and comfort.', // Add a relevant description
        features: [ // Add relevant features based on standard 2008 features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Navigation System'
        ],
        mainImage: 'images/Peugeot20082021/1.png', // You will need to add this image to your images folder
        additionalImages:['images/Peugeot20082021/2.png',
            'images/Peugeot20082021/3.png',
            'images/Peugeot20082021/4.png'
        ], // Add more image paths if available
        alt: "2021 Peugeot 2008, Gray"
    },
    {
        id: 18, // Make sure this ID is correct and doesn't conflict
        make: 'Peugeot',
        model: '207 SW 1.4 vti 16v Active 95cv',
        year: 2011, // Using the year from the image 12/2011
        price: '€4.350',
        mileage: '146.700 km',
        transmission: 'Manual',
        engine: '207 SW 1.4 vti 16v Active 95cv 70 kW (95 CV)',
        fuelType: 'Benzina',
        color: 'Silver', // Assuming the color is silver from the image
        seats: 5, // Assuming 5 seats
        doors: 5, // Assuming 5 doors
        condition: 'Usato', // From the image
        horsepower: '95 HP', // From the engine details (95 CV)
        description: 'The Peugeot 207 SW is a practical and compact estate car, ideal for those needing extra space.', // Add a relevant description
        features: [ // Add relevant features based on standard 207 features or the image
            'Air Conditioning',
            'Power Steering',
            'Electric Windows',
            'Central Locking'
        ],
        mainImage: 'images/Peugeot2072011/1.png', // You will need to add this image to your images folder
        additionalImages:['images/Peugeot2072011/2.png',
                            'images/Peugeot2072011/3.png',
                            'images/Peugeot2072011/4.png'
        ], // Add more image paths if available
        alt: "2011 Peugeot 207 SW, Silver"
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
    <i class="fas fa-envelope"></i> Contact Us
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
                        <span class="verified-badge"><i class="fas fa-shield-alt"></i> Verified</span>
                    </div>
                </div>
                <div class="car-price-wrapper">
                    <div class="car-price">${car.price}</div>
                    <div class="price-note">All taxes included</div>
                </div>
            </div>
            
            <div class="car-details-tabs">
                <div class="tabs-header">
                    <button class="tab-btn active" data-tab="specs">Specifications</button>
                    <button class="tab-btn" data-tab="description">Description</button>
                    <button class="tab-btn" data-tab="features">Features</button>
                </div>
                
                <div class="tab-content active" id="specs-tab">
                    <div class="specs-grid">
                        <div class="specs-section">
                            <h3 class="section-title">Basic Information</h3>
                            <div class="spec-group">
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-car"></i></span>
                                    <span class="spec-label">Condition</span>
                                    <span class="spec-value">${car.condition}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-calendar-alt"></i></span>
                                    <span class="spec-label">Year</span>
                                    <span class="spec-value">${car.year}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-tag"></i></span>
                                    <span class="spec-label">Make</span>
                                    <span class="spec-value">${car.make}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-tag"></i></span>
                                    <span class="spec-label">Model</span>
                                    <span class="spec-value">${car.model}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="specs-section">
                            <h3 class="section-title">Performance</h3>
                            <div class="spec-group">
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-tachometer-alt"></i></span>
                                    <span class="spec-label">Engine</span>
                                    <span class="spec-value">${car.engine}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-horse"></i></span>
                                    <span class="spec-label">Horsepower</span>
                                    <span class="spec-value">${car.horsepower}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-gas-pump"></i></span>
                                    <span class="spec-label">Fuel Type</span>
                                    <span class="spec-value">${car.fuelType}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-cog"></i></span>
                                    <span class="spec-label">Transmission</span>
                                    <span class="spec-value">${car.transmission}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="specs-section">
                            <h3 class="section-title">Features</h3>
                            <div class="spec-group">
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-palette"></i></span>
                                    <span class="spec-label">Color</span>
                                    <span class="spec-value">${car.color}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-chair"></i></span>
                                    <span class="spec-label">Seats</span>
                                    <span class="spec-value">${car.seats}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-door-open"></i></span>
                                    <span class="spec-label">Doors</span>
                                    <span class="spec-value">${car.doors}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-icon"><i class="fas fa-road"></i></span>
                                    <span class="spec-label">Mileage</span>
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
    <a href="#contact" class="btn btn-primary contact-button">Contact Us</a>
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
    carDetailsContainer.innerHTML = '<p>Car not found.</p>';
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