fetch('https://fakestoreapi.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });

