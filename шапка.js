let promotion = [
 
    {
        name: "Bitcoin",
        category: "Cryptocurrency",
        price: "2,000 сом",
        sizes: [37, 38, 39, 40, 41],
        image: "img/Bonnet Bombardier Kosta en coton - homme - Gris.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1"
        
    },
    
   
];

const productList = document.getElementById('product-list');


function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    productCard.innerHTML = `
        <img class="img" src="${product.image}" alt="${product.name}">
        <div class="textBox">
            <p class="text">${product.name}</p>
            <span class="text">${product.category}</span>
            <div class="size">
                <span>#1</span>
                <ul class="list-size">
                    ${product.sizes.map(size => `<li class="item-list"><button class="item-list-button">${size}</button></li>`).join('')}
                </ul>
            </div>
            <p class="text price">${product.price}</p>
            <a href="${product.link}">
                <button class="cart-button">
                    <svg class="cart-icon" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                    <span>Заказать</span>
                </button>
            </a>
        </div>
    `;

    productList.appendChild(productCard);
}


promotion.forEach(createProductCard);
  