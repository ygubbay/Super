import axios from "axios";

//let config;

//if (process.env.NODE_ENV === 'development')
//    config = require('../config.js');
//else 
//    config = require('..config.production.js');

function productsAll()
{
    return [
        {id: "1000", name: "Milk", category: "Fridge"},
        {id: "1003", name: "Cottage Cheese", category: "Fridge"},
        {id: "1004", name: "Bulgari Cheese", category: "Fridge"},
        {id: "1005", name: "Eggs", category: "Fridge"},
        {id: "1006", name: "Grated Cheese", category: "Fridge"},
        {id: "1007", name: "Almond Milk", category: "Fridge"},

        {id: "1001", name: "Brown bread", category: "Bakery"},
        {id: "1002", name: "Pita", category: "Bakery"},

        {id: "1006", name: "Onion", category: "Fruits & Vegies"},
        {id: "1007", name: "Red Onion", category: "Fruits & Vegies"},
        {id: "1007", name: "Carrots", category: "Fruits & Vegies"},
        {id: "1007", name: "Mushrooms", category: "Fruits & Vegies"},
        {id: "1007", name: "Cucumber", category: "Fruits & Vegies"},
        {id: "1007", name: "Sweet Potato", category: "Fruits & Vegies"},
        {id: "1007", name: "Potatoes", category: "Fruits & Vegies"}
        
    ];
}

const categoriesAll = () => 
{
    return [

        {id: "1000", name: "Fridge"},
        {id: "1001", name: "Bakery"},
        {id: "1001", name: "Fruits & Vegies"}
    ];
}




const productsByCategory = () => 
{
    const products = productsAll();

    let cats = [];
    products.map((product) => { 
        
        let category = cats.find(val => val.name == product.category);
        if (category == null)
        {
            const c = categoriesAll().find(p => p.name == product.category);
            if (c == null)
            {
                throw new Error('Invalid category [' + product.category + '] in product list.');
            }
            category = c;
            category["products"] = [];
            cats.push(category);
        }
        category.products.push({ id: product.id, name: product.name, category: product.category });

    })

    return cats;
}


export { categoriesAll, productsByCategory };