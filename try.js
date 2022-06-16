function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('nothing is for free! please supply a price');
    }
    const vat = 1.17; //maam
    const total = (price * vat).toFixed(2);
    return total;

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
        price: 505,
        name: 'yoni kahalany',
        image: '2012/03/03/23/54/animal-21668_960_720.jpg',
        description: 'great product really!',
    },
    {
        Id: generateId(),
        price: 665,
        name: 'bruno mark',
        image: '2022/01/22/09/42/animal-6956681_960_720.jpg',
        description: 'be carful - very cold!',
    },
    {
        Id: generateId(),
        price: 305,
        name: 'yoni kahalany',
        image: '2022/05/01/11/17/vineyard-7167324_960_720.jpg',
        description: 'great product really!',
    },
    {
        Id: generateId(),
        price: 465,
        name: 'bruno mark',
        image: '2022/03/08/07/08/water-7055153_960_720.jpg',
        description: 'be carful - very cold!',
    },
    {
        Id: generateId(),
        price: 505,
        name: 'yoni kahalany',
        image: '2012/03/03/23/54/animal-21668_960_720.jpg',
        description: 'great product really!',
    },
    {
        Id: generateId(),
        price: 665,
        name: 'bruno mark',
        image: '2022/01/22/09/42/animal-6956681_960_720.jpg',
        description: 'be carful - very cold!',
    },
    {
        Id: generateId(),
        price: 305,
        name: 'yoni kahalany',
        image: '2022/05/01/11/17/vineyard-7167324_960_720.jpg',
        description: 'great product really!',
    },
    {
        Id: generateId(),
        price: 465,
        name: 'bruno mark',
        image: '2022/03/08/07/08/water-7055153_960_720.jpg',
        description: 'be carful - very cold!',
    },
];

function getProductsTemplate() {
    const IMG_PATH = 'https://cdn.pixabay.com/photo/'; //configuration of the project
    let html = '';


    products.forEach(product => {
        html +=
            `<div class="col" id="card-{id}" style="width: 18rem;">
                <div class="card">
                <img src="${IMG_PATH}${product.image}" class="card-img-top" alt="${product.description}">
                    <div class="card-body">
                     <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$
                                ${addTax(product.price)}
                            </p>
                        <a href="#" class="btn btn-primary">view ditails</a>
                    </div>
                </div>
            </div>`;
    })
    return html;
}

function displayProduct() {
    const container = document.getElementById('products-container')
    const html = getProductsTemplate();
    container.innerHTML = html;

}


displayProduct();