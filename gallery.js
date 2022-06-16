function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('nothing is for free! please supply a price');
    }
    const vat = 1.17; //maam
    const total = (price * vat).toFixed(2);
    return total;

}
9
const pictures = [{


        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'a new picture',
        artist: 'bruno brave',
        price: 15,
        inStock: true,
    },
    {

        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'another pictures',
        artist: 'bruno brave',
        price: 200,
        inStock: false,
    },
];

function displayPictures() {

    let html = '';
    let stockStatus = '';

    pictures.forEach(pic => {
        if (pic.inStock === true) {
            stockStatus = '';
        } else {
            stockStatus = 'Not available';
        }

        html +=
            `<div class="col" id="card-{id}" style="width: 18rem;">
                <div class="card">
                <img src="${pic.image}" class="card-img-top" alt="${pic.description}">
                    <div class="card-body">
                     <h5 class="card-title">${pic.name}</h5>
                            <p class="card-text">$
                                ${addTax(pic.artist)}
                            </p>
                            <p class="card-text">$
                                ${pic.price}
                            </p>
                            <span class="text-danger">Not available</span>
                        <a href="#" class="btn btn-primary">view ditails</a>
                    </div>
                </div>
            </div>`;
    })
    const container = document.getElementById('pics-container');
    container.innerHTML = html;

}

displayPictures();