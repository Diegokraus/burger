const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
]

const addedProducts = []

const ul = document.querySelector('ul')

function createCards(product) {

    const li = document.createElement('li')

    const img = document.createElement('img')
    img.src = product.src
    img.alt = product.name

    const productName = document.createElement('div')
    productName.classList.add('product-name')


    const p = document.createElement('p')
    p.textContent = product.name

    const price = document.createElement('p')
    price.classList.add('item-price')
    price.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`

    ul.appendChild(li)
    li.appendChild(img)
    li.appendChild(productName)
    productName.appendChild(p)
    productName.appendChild(price)
}

function showAllProducts() {
    clearCards()
    menuOptions.forEach((product) => createCards(product))
}

function clearCards() {
    const cardContainer = ul
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
}

function showProductsWithDescount() {
    const productsWithDesc = menuOptions.map((product) => {
        const discountedProduct = { ...product }; // Cria uma cópia do objeto product
        discountedProduct.price = product.price - (product.price / 10); // Aplica o desconto ao preço do produto
        return discountedProduct;
    });
    console.log(productsWithDesc)

    clearCards()

    productsWithDesc.forEach((item) => {
        createCards(item)
    })

}

