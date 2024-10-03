fetch('https//fakestoreapi.com/products/1')
    .then((res) => { return res.json() })
    .then((products) => { console.log(products) })