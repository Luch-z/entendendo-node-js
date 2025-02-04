const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to our home page");
    console.log("port 3000");
});

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            label: "Product 1",
        },
        {
            id: 2,
            label: "Product 2",
        },
        {
            id: 3,
            label: "Product 3",
        },
    ];
    res.json(products);
});

app.get("/products/:productId", (req, res) => {
    console.log("req.params", req.params);

    const productId = parseInt(req.params.productId);
    const products = [
        {
            id: 1,
            label: "Product 1",
        },
        {
            id: 2,
            label: "Product 2",
        },
        {
            id: 3,
            label: "Product 3",
        },
    ];

    const getSingleProduct = products.find(
        (product) => product.id === productId
    );

    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).send(
            "product is not found! please try with different id"
        );
    }
});

port = 3000;

app.listen(port, () => {
    console.log(`Server is now running at port ${port}`);
});
