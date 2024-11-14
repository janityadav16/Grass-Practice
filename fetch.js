fetch('https://fakestoreapi.com/products')
    .then(response => {
        // Check if the response was successful
        if (response.ok) {
            // If the response was successful, return the response as JSON
            return response.json();
        } else {
            // If the response was not successful, throw an error
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    })
    .then(products => {
        // Log the products to the console
        console.log(products);
    })
    .catch(error => {
        // Log any errors to the console
        console.error('Error fetching products:', error);
    });

