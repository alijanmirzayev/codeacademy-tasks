const readline = require('readline-sync')

const options = ['Add Product', 'Get All Product', 'Get Product By Id', 'Get All Product by Price', 'Delete Product By Id']
let products = []

Main()

function Main() {
    let answer = readline.keyInSelect(options)
    answer++

    switch (answer) {
        case 1:
            addProduct()
            break;
        case 2:
            GetAllProduct(products)
            break;
        case 3:
            GetProductById(products)
            break;
        case 4:
            GetProductByPrice(products)
            break;
        case 5:
            DeleteProductById()
            break;
        default:
            console.log('Əməliyyatı düzgün seçin!');
            break;
    }
    if (answer != 0) {
        setTimeout(() => {
            Main()

        }, 3000)
    }

}
function addProduct() {

    let id = GenerateId(products)
    console.log("Let's create product!");
    let nameProduct = readline.question("Product name: ")
    let priceProduct = readline.question('Product price: ')
    let descriptionProduct = readline.question('Product description: ')
    let product = {
        id: id,
        name: nameProduct,
        price: priceProduct,
        description: descriptionProduct
    }
    products.push(product)
}

function GetAllProduct(array) {
    array.forEach(item => {
           console.log(`Id: ${item.id} Name: ${item.name}  Price: ${item.price}   Description: ${item.description} `)
    })
}

function GetProductById(array) {
    let id = readline.question("Enter product id (Example: 2): ")
    array.forEach(item => {
            if (item.id == id) {
                console.log(`Id: ${item.id} Name: ${item.name}  Price: ${item.price}   Description: ${item.description} `)
            }
    })
}

function GetProductByPrice(array) {
    let price = readline.question("Enter product price (Example: 50): ")
    array.forEach(item => {
            if (item.price > price) {
                console.log(`Id: ${item.id} Name: ${item.name}  Price: ${item.price}   Description: ${item.description} `)
            }
    })
}

function DeleteProductById() {
    let id = readline.question("Enter delete product id (Example: 1): ")
    if (readline.keyInYN()) {
        products = products.filter(elem => elem.id != id)
    }
}

function GenerateId(array) {

    if (array.length == 0) {
        return 1
    }
    let previousId = array[array.length - 1].id
    return previousId += 1

}