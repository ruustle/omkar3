const carInventory = [
    {
        id: 1,
        make: 'Mercedes-Benz',
        model: 'B180',
        year: 2011,
        price: '€4.900',
        mileage: '173.600 km',
        transmission: 'Manuale',
        engine: '80 kW Diesel',
        image: 'images/Mercedes-Benz B 180.png',
        alt: "Mercedes-Benz B180 del 2011, Nera",
        featured: true
    },
    {
        id: 2,
        make: 'Alfa Romeo',
        model: 'MiTo',
        year: 2009,
        price: '€4.900',
        mileage: '139.600 km',
        transmission: 'Manuale',
        engine: '99 kW Benzina',
        image: 'images/alfaromeo2009/1.png',
        alt: "Alfa Romeo MiTo del 2009, Rossa",
        featured: false
    },
    {
        id: 3,
        make: 'BMW',
        model: '118',
        year: 2017,
        price: '€14.900',
        mileage: '109.900 km',
        transmission: 'Manuale',
        engine: '110 kW Diesel',
        image: 'images/1BMW 118.png',
        alt: "BMW 118 del 2017, Nera",
        featured: true
    },
    {
        id: 4,
        make: 'Suzuki',
        model: 'SX4 S-Cross',
        year: 2022,
        price: '€19.900',
        mileage: '51.500 km',
        transmission: 'Manuale',
        engine: '95 kW Elettrica/Benzina',
        image: 'images/SuzukiSX42022.png',
        alt: "Suzuki SX4 S-Cross del 2022, Blu",
        featured: false
    },
    {
        id: 5,
        make: 'Fiat',
        model: 'Grande Punto',
        year: 2009,
        price: '€5.900',
        mileage: '91.500 km',
        transmission: 'Manuale',
        engine: '1.3 mjt 16v Speed 75cv',
        image: 'images/fiatgrandepunto2009/1.png',
        alt: "Fiat Grande Punto del 2009, Bianca",
        featured: false
    },
    {
        id: 6,
        make: 'Ford',
        model: 'Fiesta',
        year: 2016,
        price: '€7.450',
        mileage: '106.000 km',
        transmission: 'Manuale',
        engine: '1.0 Titanium 80cv E6',
        image: 'images/fordfiesta2016/1.png',
        alt: "Ford Fiesta del 2016, Grigia",
        featured: true
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
        image: 'images/audia12015/1.png',
        alt: "Audi A1 Sportback del 2015, Rossa",
        featured: false
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
        image: 'images/renaultscenic2017/1.png',
        alt: "Renault Scenic del 2017, Nera",
        featured: false
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
        image: 'images/toyotachr2020/1.png',
        alt: "Toyota C-HR del 2020, Bianca",
        featured: false
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
        image: 'images/renaultkadjar2016/1.png',
        alt: "Renault Kadjar del 2016, Nera",
        featured: false
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
        image: 'images/fiatpanda2013/1.png',
        alt: "Fiat Panda 4x4 del 2013, Nera",
        featured: false
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
        image: 'images/peugeot2062011/1.png',
        alt: "Peugeot 206 Plus del 2011, Blu",
        featured: false
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
        image: 'images/mercedesb1802017/1.png',
        alt: "Mercedes-Benz B180d del 2017, Bianca",
        featured: false
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
        image: 'images/lanciay2017/1.png',
        alt: "Lancia Ypsilon del 2017, Rossa",
        featured: false
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
        image: 'images/volksgolf2018/1.png',
        alt: "Volkswagen Golf del 2018, Bianca",
        featured: false
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
        image: 'images/citroenc42015/1.png',
        alt: "Citroen C4 Cactus del 2015, Grigia",
        featured: false
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
        image: 'images/Peugeot20082021/1.png',
        alt: "Peugeot 2008 del 2021, Grigia",
        featured: false
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
        image: 'images/Peugeot2072011/1.png',
        alt: "Peugeot 207 SW del 2011, Argento",
        featured: false
    }
];
// Get current page name from URL
const currentPage = window.location.pathname.split('/').pop();

// Get the car listings container
const carListingsContainer = document.getElementById('carListings');

// Function to create a car card
function createCarCard(car) {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');

    const carImage = document.createElement('img');
    carImage.src = car.image;
    carImage.alt = `${car.year} ${car.make} ${car.model}`;
    carImage.classList.add('car-image');

    const carDetails = document.createElement('div');
    carDetails.classList.add('car-details');

    const carTitle = document.createElement('h3');
    carTitle.classList.add('car-title');
    carTitle.textContent = `${car.year} ${car.make} ${car.model}`;

    const carPrice = document.createElement('p');
    carPrice.classList.add('car-price');
    carPrice.textContent = car.price;

    const carSpecs = document.createElement('div');
    carSpecs.classList.add('car-specs');
    carSpecs.innerHTML = `
        <span>${car.mileage}</span>
        <span>${car.transmission}</span>
        <span>${car.engine}</span>
    `;

    const viewDetailsButton = document.createElement('a');
    viewDetailsButton.href = `car-details-it.html?id=${car.id}`;
    viewDetailsButton.classList.add('btn');
    viewDetailsButton.textContent = 'Visualizza Dettagli';

    carDetails.appendChild(carTitle);
    carDetails.appendChild(carPrice);
    carDetails.appendChild(carSpecs);
    carDetails.appendChild(viewDetailsButton);

    carCard.appendChild(carImage);
    carCard.appendChild(carDetails);

    return carCard;
}

// Function to handle filtering and sorting
function displayCars(carsToDisplay) {
    // Clear existing cars
    carListingsContainer.innerHTML = '';

    // Display filtered/sorted cars
    carsToDisplay.forEach(car => {
        const carCard = createCarCard(car);
        carListingsContainer.appendChild(carCard);
    });
}

// Initialize the make filter on inventory page
function initializeFilters() {
    if (currentPage === 'inventory-it.html') {
        const filterMake = document.getElementById('filter-make');
        const sortBy = document.getElementById('sort-by');

        // Get unique makes for filter
        const makes = [...new Set(carInventory.map(car => car.make))];

        // Populate make filter
        makes.forEach(make => {
            const option = document.createElement('option');
            option.value = make;
            option.textContent = make;
            filterMake.appendChild(option);
        });

        // Add event listeners for filtering and sorting
        filterMake.addEventListener('change', filterAndSortCars);
        sortBy.addEventListener('change', filterAndSortCars);
    }
}

// Function to filter and sort cars
function filterAndSortCars() {
    if (currentPage === 'inventory-it.html') {
        const filterMake = document.getElementById('filter-make').value;
        const sortBy = document.getElementById('sort-by').value;

        // Filter cars by make
        let filteredCars = carInventory;
        if (filterMake !== 'all') {
            filteredCars = carInventory.filter(car => car.make === filterMake);
        }

        // Sort cars
        filteredCars.sort((a, b) => {
            // Helper function to extract numeric value from price
            const getNumericPrice = (price) => {
                // Handle both comma and period as thousands separators
                return parseFloat(price.replace('€', '').replace(',', '').replace('.', ''));
            };

            switch (sortBy) {
                case 'price-low-to-high':
                    return getNumericPrice(a.price) - getNumericPrice(b.price);
                case 'price-high-to-low':
                    return getNumericPrice(b.price) - getNumericPrice(a.price);
                case 'year-newest-to-oldest':
                    return b.year - a.year;
                case 'year-oldest-to-newest':
                    return a.year - b.year;
                default:
                    return 0;
            }
        });

        displayCars(filteredCars);
    }
}

// Initial display based on current page
function initializeDisplay() {
    // Check which page we're on
    if (currentPage === 'index-it.html' || currentPage === '') {
        // On homepage, only show featured cars
        const featuredCars = carInventory.filter(car => car.featured);
        displayCars(featuredCars);
    } else if (currentPage === 'inventory-it.html') {
        // On inventory page, show all cars and setup filtering
        displayCars(carInventory);
        initializeFilters();
        filterAndSortCars(); // Apply initial filtering/sorting
    }
}

// Run initialization
document.addEventListener('DOMContentLoaded', initializeDisplay);