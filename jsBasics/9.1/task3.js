const car1 = {
    brand: 'Hyundai ',
    model: 'Accent',
    year: 2008
};

const car2 = {
    brand: 'Hyundai ',
    model: 'Sonata',
    owner: 'Anna'
};

const car3 = {...car1, ...car2};

console.log (car3);