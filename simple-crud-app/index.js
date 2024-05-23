const mongoose = require('mongoose');
const express = require('express');
const model = require('./models/product.model.js');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// home page
app.get('/', (req,res) => {
    res.send('hello');
});

// routes
app.use("/api/products", productRoute);

// connecting to mongodb
mongoose.connect('')
.then(() => {
    console.log('Conencted to database!')
})
.catch(() => {
    console.log('Connection failed')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
''  
