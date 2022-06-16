function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('nothing is for free! please supply a price');
    }
    const vat = 1.17; //maam
    const total = (price * vat).toFixed(2);
    return total;

}

function getTotalProducts() {
    const total = document.getElementById('total-products');
    total.innerHTML = products.length

    let totalProducts = products.length;
    document.getElementById('total-products').innerHTML = totalProducts;
}

function generateId() {
    // const rand = Math.random(); //0.3493483949
    // console.log(`rand: ${rand}`);
    // const num = rand * 100000; //34934.83949
    // console.log(`num: ${num}`);
    // const floor = Math.floor(num);
    // console.log(`floor: ${floor}`);
    // return floor;

    const time = new Date().getTime();
    return Math.floor(Math.random() * time);

}


const products = [{
        Id: generateId(),
        price: 15,
        name: 'yellow cheese',
        image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        description: 'great product really!',
    },
    {
        Id: generateId(),
        price: 5,
        name: 'ice cream',
        image: '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        description: 'be carful - very cold!',
    },
    {
        Id: generateId(),
        price: 55,
        name: 'aaa',
        image: '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        description: 'be carful - very cold!',
    },
];


function sortProducts() {
    const sortField = document.querySelector('#sort-field');
    const sortDiredtion = sortField.ariaValueMax;

    // sort array of products

}


function getProductsTemplate() {
    const IMG_PATH = 'https://cdn.pixabay.com/photo/'; //configuration of the project
    let html = '';


    products.forEach(product => {
        html +=
            `<div class="card" id="card-{id}" style="width: 18rem;">
                <img src="${IMG_PATH}${product.image}" class="card-img-top" alt="${product.description}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$
                        ${addTax(product.price)}</p>
                    <a href="#" class="btn btn-primary">view ditails</a>
                </div>
            </div>`;
    })
    return html;
}

function displayProduct() {
    const container = document.getElementById('products-container')
    const html = getProductsTemplate();
    container.innerHTML = html;
    getTotalProducts();
}


displayProduct();