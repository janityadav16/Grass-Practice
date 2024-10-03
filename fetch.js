fetch('https//fakestoreapi.com/products')
    .then((res) => { return res.json() })
    .then((products) => { console.log(products) })