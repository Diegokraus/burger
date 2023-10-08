const addedProducts = []

const ul = document.querySelector('ul')
function showAllProducts() {
    menuOptions.forEach((product) => {
        if(!addedProducts.includes(product)){
            const li = document.createElement('li')
    
            const img = document.createElement('img')
            img.src = product.src
            img.alt = product.name

            const productName = document.createElement('div')
            productName.classList.add('product-name')
            
        
            const p = document.createElement('p')
            p.textContent =  product.name
        
            const price = document.createElement('p')
            price.classList.add('item-price')
            price.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`
        
            ul.appendChild(li)
            li.appendChild(img)
            li.appendChild(productName)
            productName.appendChild(p)
            productName.appendChild(price)

            addedProducts.push(product)
        }
    })       
}