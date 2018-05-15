//03/05/2018
//By OLIBIE CHIDERA JENNIFER
//At GenesysTechHub,
//write a code representing an e-commerce store
//The store should be an array of products with name, price and quantity
//The cart should contain the name of the product and quantity to buy.
//the output should contain the total price and the new stock values

//declaring the stores array
var clothStore = [
    {name: 'shirt', price: 2000, quantity: 20},
    {name: 'T-shirt', price: 1000, quantity: 10},
    {name: 'trouser', price: 2400, quantity: 15},
    {name: 'skirt', price: 1500, quantity: 5},
    {name: 'gown', price: 4000, quantity: 7}
]

var foodStore = [
    {name: 'yam', price: 500, quantity: 80},
    {name: 'beans', price: 1400, quantity: 30},
    {name: 'rice', price: 3000, quantity: 15},
    {name: 'indomie', price: 2700, quantity: 17},
    {name: 'garri', price: 300, quantity: 20}
]

// declaring the products in the cart
var inCart = [
    {name: 'trouser', quantity: 5},
    {name: 'skirt', quantity: 2},
]

var output;

//function to buy from store with two parametes: 1 as the store, 2 as the things in d cart
function buyFromDera(store, inCart){    
    var newStore = [{totalPrice:0}, 
                    store];
    var availableProduct = 0
    var quantityIsEnough = true;    //item quantity is deemed enough
    
    //looping through each of the items in the cart
    for (var item of inCart){
        var itemAvailable = false;          //assume the item is not available
        store.forEach(function(product){ //checking if the item is in the store
            if (item.name == product.name){
                itemAvailable = true;           //items has been proven available
                availableProduct++;
                if (item.quantity <= product.quantity && item.quantity >= 0){
                    newStore[0].totalPrice += item.quantity * product.price;  //calculate the price
                    product.quantity -= item.quantity;  //calculate the quantity that'll remain in store
                }else{
                    quantityIsEnough = false;  //dummy variable to check when item quantity is not enough
                }
            }        
        })
        if (!itemAvailable){ //if item is not available, stop search
            break;
        }
    };

    if (availableProduct == inCart.length && quantityIsEnough==true){   //if all products r in store and good quantity
        console.log(newStore);
        output = newStore;
    }
    else if (availableProduct != inCart.length){  //if some are not in store
        output = 'Product/s is out of Store';
        console.log('Product/s is not in Store');  
    }
    else{ //if they are in store but not enough
        output = 'Quantity is not enough';
        console.log('Quantity is not enough');
    }
    return output;
}
buyFromDera(clothStore, inCart);
