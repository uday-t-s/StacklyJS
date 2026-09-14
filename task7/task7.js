//Day 7 TASKS 


//  task1.   Fetch the API

let a = fetch("https://fakestoreapi.com/products");

var jsonForm = a.then((data) => {

    return(data.json());

});


jsonForm.then((products) => {

    // Display product title, price and category

    console.log("\n------ Product Details : -------\n");

    products.forEach((currentElement, indexNum) => {

        console.log("Title:", currentElement.title);
        console.log("Price: $", currentElement.price);
        console.log("Category:", currentElement.category);

    });


    // Use map() to create new array containing title and price

    console.log("\n------ Titles and Prices : -------\n");

    var newArray = products.map((currentElement, indexNum) => {

        return {
            title: currentElement.title,
            price: currentElement.price
        };

    });

    console.log(newArray);


    // Use filter() to find products with price greater than $100

    console.log("\n------ Products Above $100 : -------\n");

    var priceAbove100 = products.filter((currentElement, indexNum) => {

        return currentElement.price > 100;

    });

    console.log(priceAbove100);


    // Use find() to find first electronics product

    console.log("\n------ First Electronics Product : -------\n");

    var firstElectronics = products.find((currentElement, indexNum) => {

        return currentElement.category == "electronics";

    });

    console.log(firstElectronics);


    // Use reduce() to calculate total price

    console.log("\n------ Total Price : -------\n");

    var totalPrice = products.reduce((accumulator, currentElement) => {

        return accumulator + currentElement.price;

    }, 0);

    console.log("Total Price: $", totalPrice);


    // Use sort() to arrange highest price to lowest

    console.log("\n------ Highest Price to Lowest : -------\n");

    var highToLow = products.sort((a, b) => {

        return b.price - a.price;

    });

    console.log(highToLow);

})


.catch((error) => {

    console.warn(error);

})


.finally(() => {

    console.log("\nTask 1 completed");

});


////////////////////////////////////////////////////////////////
//task 2.    Product Category Dashboard

let b = fetch("https://fakestoreapi.com/products");

var jsonFor = b.then((data) => {

    return data.json();

});


function productDashboard(products) {

    var electronics = products.filter((currentElement, indexNum) => {

        return currentElement.category == "electronics";

    });


    var jewelery = products.filter((currentElement, indexNum) => {

        return currentElement.category == "jewelery";

    });


    var mensClothing = products.filter((currentElement, indexNum) => {

        return currentElement.category == "men's clothing";

    });


    var womensClothing = products.filter((currentElement, indexNum) => {

        return currentElement.category == "women's clothing";

    });


    var prices = products.map((currentElement, indexNum) => {

        return currentElement.price;

    });


    prices.sort((a, b) => {

        return a - b;

    });


    var lowestPrice = prices[0];

    var highestPrice = prices[prices.length - 1];


    var totalPrice = products.reduce((accumulator, currentElement) => {

        return accumulator + currentElement.price;

    }, 0);


    var averagePrice = totalPrice / products.length;


    console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${products.length}

Electronics: ${electronics.length}
Jewelery: ${jewelery.length}
Men's Clothing: ${mensClothing.length}
Women's Clothing: ${womensClothing.length}

Highest Price: $${highestPrice}
Lowest Price: $${lowestPrice}
Average Price: $${averagePrice.toFixed(2)}
`);

}


jsonFor.then((products) => {

    productDashboard(products);

});


/////////////////////////////////////////////////////////////


// Task3 User API 

var usersApi = fetch("https://jsonplaceholder.typicode.com/users");

var jsonUsers = usersApi.then((data) => {

    return data.json();

});


// Display all user names

jsonUsers.then((users) => {

    console.log("\n------ All User Names : ---------");

    users.forEach((currentElement, indexNum) => {

        console.log(currentElement.name);

    });

});


// Display user name and email

jsonUsers.then((users) => {

    console.log("\n------ User Names with Emails : -------");

    users.forEach((currentElement, indexNum) => {

        console.log(
            currentElement.name,
            "--- Email:",
            currentElement.email
        );

    });

});


// Find user with ID 5

jsonUsers.then((users) => {

    console.log("\n------ User with ID 5 : -------");

    var userFive = users.find((currentElement, indexNum) => {

        return currentElement.id == 5;

    });

    console.log(userFive);

});


// Filter users from a particular city

jsonUsers.then((users) => {

    console.log("\n------ Users in Gwenborough City : -------");

    var cityUsers = users.filter((currentElement, indexNum) => {

        return currentElement.address.city == "Gwenborough";

    });

    console.log(cityUsers);

});


// Posts API

var postsApi = fetch("https://jsonplaceholder.typicode.com/posts");

var jsonPosts = postsApi.then((data) => {

    return data.json();

});


// Display posts written by user ID 1

jsonPosts.then((posts) => {

    console.log("\n------ Posts by User ID 1 : -------");

    var postsByUser1 = posts.filter((currentElement, indexNum) => {

        return currentElement.userId == 1;

    });

    console.log(postsByUser1);

});


// Count posts by user ID 1

jsonPosts.then((posts) => {

    console.log("\n------ Total Posts by User ID 1 : -------");

    var postsByUser1 = posts.filter((currentElement, indexNum) => {

        return currentElement.userId == 1;

    });

    console.log("Total Posts:", postsByUser1.length);

});


// Find first post with more than 50 characters in title

jsonPosts.then((posts) => {

    console.log("\n------ First Post with Title > 50 Characters : -------");

    var longTitlePost = posts.find((currentElement, indexNum) => {

        return currentElement.title.length > 50;

    });

    console.log(longTitlePost);

});


////////////////////////////////////////////////////////////////


// task4  API + Search

let e = fetch("https://fakestoreapi.com/products");

let jsonE = e.then((data) => {

    return data.json();

});


jsonE.then((products) => {

    var categ = prompt("Enter product category:");

    var pric = Number(prompt("Enter maximum price:"));


    function searchProduct(category, price) {

        var result = products.filter((currentElement, indexNum) => {

            return currentElement.category == category &&
                   currentElement.price <= price;

        });

        console.log("\n------ Matching Products : -------");

        console.log(result);

    }


    searchProduct(categ, pric);

});

// Task5  API Shopping Cart

var f = fetch("https://fakestoreapi.com/products");

var jsonF = f.then((data) => {

    return data.json();

});


jsonF.then((products) => {

    // Display available products

    console.log("\n\n========== AVAILABLE PRODUCTS ==========");

    products.forEach((currentElement, indexNum) => {

        console.log(
            "ID:", currentElement.id,
            "Title:", currentElement.title,
            "Price: $", currentElement.price
        );

    });


    // Add selected products to array

    var selectedProductsArray = [];


    // Select products using their IDs

    for(let i = 0; i < 3; i++) {

        var productId = Number(prompt("Enter product ID:"));


        var selectedProduct = products.find((currentElement, indexNum) => {

            return currentElement.id == productId;

        });


        if(selectedProduct) {

            selectedProductsArray.push(selectedProduct);

        }

    }


    // Display cart

    console.log("\n============= CART =============");

    selectedProductsArray.forEach((currentElement, indexNum) => {

        console.log(
            "Product", indexNum + 1,
            ":", currentElement.title
        );

        console.log("Price: $", currentElement.price);

    });


    // Calculate cart total

    var cartTotal = selectedProductsArray.reduce((accumulator, currentElement) => {

        return accumulator + currentElement.price;

    }, 0);


    console.log("Total: $", cartTotal);


    // Apply discount

    var discount = 0;

    if(cartTotal > 200) {

        discount = cartTotal * 20 / 100;

        console.log("Discount: 20%");

    }

    else if(cartTotal > 100) {

        discount = cartTotal * 10 / 100;

        console.log("Discount: 10%");

    }

    else {

        console.log("Discount: 0%");

    }


    var finalAmount = cartTotal - discount;

    console.log("Final Amount: $", finalAmount);

});

///////////////////////////////////////////////////////////
// Task6  FakeStore Product Report

var g = fetch("https://fakestoreapi.com/products");

var jsonG = g.then((data) => {

    return data.json();

});


jsonG.then((products) => {

    console.log("\n\n========== PRODUCT REPORT ==========");


    // Display all products

    console.log("Total Products:", products.length);

    console.log("\nProduct Names:");

    products.forEach((currentElement, indexNum) => {

        console.log("-", currentElement.title);

    });


    // Create product names array

    var productNames = products.map((currentElement, indexNum) => {

        return currentElement.title;

    });

    console.log("\nProduct Names Array:");

    console.log(productNames);


    // Filter products above $100

    var priceAbove100 = products.filter((currentElement, indexNum) => {

        return currentElement.price > 100;

    });

    console.log("\nProducts Above $100:");

    console.log(priceAbove100);


    // Find electronics product

    var electronicsProduct = products.find((currentElement, indexNum) => {

        return currentElement.category == "electronics";

    });

    console.log("\nElectronics Product:");

    console.log(electronicsProduct);


    // Calculate total price

    var totalValue = products.reduce((accumulator, currentElement) => {

        return accumulator + currentElement.price;

    }, 0);

    console.log("\nTotal Product Value:");

    console.log("$" + totalValue);


    // Check any product above $500

    var anyAbove500 = products.some((currentElement, indexNum) => {

        return currentElement.price > 500;

    });

    console.log("\nAny Product Above $500:", anyAbove500);


    // Check all products above $1

    var allAbove1 = products.every((currentElement, indexNum) => {

        return currentElement.price > 1;

    });

    console.log("All Products Above $1:", allAbove1);


    // Sort highest price to lowest

    var highToLow = products.sort((a, b) => {

        return b.price - a.price;

    });

    console.log("\nHighest → Lowest:");

    console.log(highToLow);

})


.catch((error) => {

    console.warn(error);

})


.finally(() => {

    console.log("\nProduct Report Completed");

});
