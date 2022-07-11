// //This is out API 

// const express = require('express');
// const request = require('request-promise');

// const app = express();
// const PORT = process.env.PORT || 5000;

// //require public to get their own apiKey
// // const  = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

// app.use(express.json());
// app.get('/', (req,res) =>{
//     res.send('Welcome to Amazon Scraper Eureka API!')
// });

// //GET Product Details - dynamic endpoint 1
// app.get('/products/:productId', async(req,res) =>{
//     const { productId } = req.params; //get productId from parameters
//     const {api_key} = req.query; //this is where we get the entered API key into the form 
//     try{
//         const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`)

//         res.json(JSON.parse(response));
//     } catch(error){
//         res.json(error);
//     }
// })

// //GET Product Reviews - dynamic endpoint 2
// app.get('/products/:productId/reviews', async(req,res) =>{
//     const { productId } = req.params; //get productId from parameters
//     const {api_key} = req.query; //this is where we get the entered API key into the form 

//     try{
//         const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`)

//         res.json(JSON.parse(response));
//     } catch(error){
//         res.json(error);
//     }
// })
// //GET Product Offers - dynamic endpoint 3
// app.get('/products/:productId/offers', async(req,res) =>{
//     const { productId } = req.params; //get productId from URL parameters
//     const {api_key} = req.query; //this is where we get the entered API key into the form 

//     try{
//         const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`)

//         res.json(JSON.parse(response));
//     } catch(error){
//         res.json(error);
//     }
// })

// //GET Search Results - dynamic endpoint 4
// app.get('/search/:searchQuery', async(req,res) =>{
//     const { searchQuery } = req.params; //get searchQuery from URL parameters
//     try{
//         const response = await request(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/s?k=${searchQuery}`)

//         res.json(JSON.parse(response));
//     } catch(error){
//         res.json(error);
//     }
// })


// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))


const express = require('express');
const request = require('request-promise');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

const returnScraperApiUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// Welcome route
app.get('/', async (req, res) => {
    res.send('Welcome to Amazon Scraper API!');
});

// Get product details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// Get product reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;
    
    try {
        const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);
        
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// Get product offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;
    
    try {
        const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// Get search results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;
    
    try {
        const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
