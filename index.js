let products = [
    {
        id: 1,
        name: "Gucci ",
        description: "Hand Bag, Top Quality",
        price: "190,000",
        inStock: true,
    },
    {
        id: 2,
        name: "Gucci",
        description: "Plain Tee",
        price: "90,000",
        inStock: false,
    },
    {
        id: 3,
        name: "Gucci",
        description: "Ripped Jeans Trouser",
        price: "50,000",
        inStock: true,
    },
    {
        id: 4,
        name: "Gucci",
        description: "Bralet for suit",
        price: "60,000",
        inStock: true,
    },
    {
        id: 5,
        name: "Fendi",
        description: "Face cap",
        price: "Free",
        inStock: true,
    },
    {
        id: 6,
        name: "Fendi",
        description: "Plain Trouser",
        price: "20,000",
        inStock: false,
    },
    {
        id: 7,
        name: "Dior",
        description: "Hand Bag",
        price: "900,000",
        inStock: true,
    },
    {
        id: 8,
        name: "Dior",
        description: "Glass Heel",
        price: "500,000",
        inStock: false,
    },
    {
        id: 9,
        name: "Dior",
        description: "Canvas",
        price: "300,000",
        inStock: true,
    },
    {
        id: 10,
        name: "Addidas",
        description: "White Canvas",
        price: "150,000",
        inStock: false,
    },
    {
        id: 11,
        name: "Nike",
        description: "Wrist Watch",
        price: "Free",
        inStock: false,
    },
    {
        id: 12,
        name: "Gucci",
        description: "Handkerchief",
        price: "92,000",
        inStock: false,
    },
    {
        id: 13,
        name: "Gucci",
        description: "Broom",
        price: "70,000",
        inStock: true,
    },
    {
        id: 14,
        name: "Gucci",
        description: "Packet Shirt",
        price: "90,000",
        inStock: false,
    },
    {
        id: 15,
        name: "Adidas",
        description: "Face Wipe",
        price: "15,000",
        inStock: true,
    },
]

products.map(product => console.log(product.name));

products.map(product => console.log(`Product name: ${product.name} - Price: ${product.price}`));

let inStock = products.filter(product => product.inStock === true);
console.log(inStock);

let notInStock = products.filter(product => product.inStock !== true);
console.log(notInStock);