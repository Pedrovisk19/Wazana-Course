const products = [
	{
		id: "1",
		name: "camisa branca",
		description: "branca",
		source:
			"https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		price: "37$",
	},
	{
		id: "2",
		name: "blusa branca",
		description: "branca",
		source:
			"https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		price: "37$",
	},
	{
		id: "3",
		name: "regata",
		description: "preta",
		source:
			"https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		price: "37$",
	},
	{
		id: "4",
		name: "manga longa",
		description: "preta",
		source:
			"https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		price: "37$",
	},
	{
		id: "5",
		name: "azul",
		description: "colorida",
		source:
			"https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		price: "37$",
	},
	{
		id: "6",
		name: "amarelo",
		description: "colorida",
		source:
			"https://images.unsplash.com/photo-1589902860314-e910697dea18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		price: "37$",
	},
];

const product = document.querySelector(".products");

const showProducts = (findProducts) => {
	product.innerHTML = findProducts
		.map(
			(product) =>
				`
            <div class="product">
                <img src="${product.source}" alt="">
                <span class="name">${product.name}</span>
                <span class="name">${product.price}</span>
            </div>
        `
		)
		.join("");
};

showProducts(products);

const inputValue = document.querySelector(".input");

inputValue.addEventListener("keyup", (e) => {
	const filteredProducts = products.filter(
		(prod) => prod.name.indexOf(e.target.value) !== -1
	);
	// console.log(filteredProducts);
	showProducts(filteredProducts);
});

const category = document.querySelectorAll(".categories");

const todas = (categories) => {
	this.addEventListener("click", {});
};
