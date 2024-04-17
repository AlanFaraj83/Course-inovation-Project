// Essa função é executado quando o todo HTML é carregado pelo navegador.

document.addEventListener("DOMContentLoaded", function () {

    // Array de objetos com todos os produtos
    const products = [
        { id: 1, name: "Smartphone", category: "eletronics", price: 1500 },
        { id: 2, name: "Laptop", category: "eletronics", price: 3500 },
        { id: 3, name: "Book of javascript", category: "books", price: 150 },
        { id: 4, name: "Shirt", category: "clothing", price: 1500 },
    ];


    // Array (lita) que armazena os produtos adicionados ao carrinho
    let cart = [];
    // Elementos DOM
    const filterCategory = document.getElementById("filterCategory");
    const renderListProducts = document.getElementById("listProducts");
    const totalCart = document.querySelector("#totalCart");


    // Funçao que renderiza a lista de produtos
    function listProducts(categorySelected) {
        // filtra a lista de produtos com base na categoria recebido por parametro
        const productsToCategory = products.filter(product => {
            // Se a categoria selecionada for all retorna todos os produtos
            if (categorySelected === "all") {
                return product;
            }

            //Se a categoria do produto for igual a categoria recebida por parametro retorna o produto
            if (product.category === categorySelected) {
                return product;
            }
        });

        // percorre a lista de produtos filtrados e incluir os produtos na tela
        productsToCategory.forEach((product) => {
            const itemLi = document.createElement("li");
            itemLi.textContent = `${product.name} - US$ ${product.price}`;

            // Cria um botão e vincula o evento de click no botão criado
            const buttonAddCart = document.createElement("button");
            buttonAddCart.textContent = "Add to Cart";
            buttonAddCart.onclick = function () {
                addProductToCart(product);

            }



            //Adiciona o <button></button criado ao <li></li>
            itemLi.appendChild(buttonAddCart);

            //Adiciona o <li></li> que foi criado dentro do <ul></ul>

            renderListProducts.appendChild(itemLi);
        });


    }

    // função que adiciona o produto no carrinho
    function addProductToCart(product) {
        cart.push(product);
        calculateTotalCart();
    }

    function calculateTotalCart() {

        const total = cart.reduce((accumulator, current) => accumulator + current.price, 0);

        totalCart.textContent = total;
    }

    // function compare(a,b) {

    //        return -1;
    //     if (a.name > b.name)
    //       return 1;
    //     return 0;
    //   }

    //   products.sort(compare);

    listProducts("all");



});
