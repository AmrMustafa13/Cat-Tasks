var products = [
    { type: 'A', price: 5, name: 'type A 1' },
    { type: 'B', price: 7.5, name: 'type B 1' },
    { type: 'C', price: 10, name: 'type C 1' },
    { type: 'A', price: 15, name: 'type A 2' },
    { type: 'A', price: 2, name: 'type A 3' },
];

function getTotalPrice(products, type) {
    const totalPrice = products
        .filter(product => product.type === type)
        .reduce((total, product) => total + product.price, 0);
    console.log(totalPrice);
}

getTotalPrice(products, 'A'); // 22
getTotalPrice(products, 'B'); // 7.5
getTotalPrice(products, 'C'); // 10