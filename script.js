const URL = 'https://api.mercadolibre.com/sites/MLB/search?category=117798#json';

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API');
    }
    return response.json();
  })
  .then((data) => {
    const products = data.results;

    const productList = document.createElement('ul');
    products.forEach((product) => {
      const item = document.createElement('li');
      item.textContent = `${product.title} - R$ ${product.price}`;
      productList.appendChild(item);
    });

    document.getElementById('product-list').appendChild(productList);
  })
  .catch((error) => {
    console.error('Erro ao obter os dados: ', error);
  });
