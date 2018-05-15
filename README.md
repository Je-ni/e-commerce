# e-commerce
Code on my mini e-commerce backend built during Genesys Internship.
This code searches a store for items in the cart and returns the total price of items in the cart and also what is remaining in the store. If one item is not found or is not enough, it stops the whole search and tells you that the item is not in store or that the quantity is not enough.

# Usage
1. You can create your own store as an array of objects with the name of item, price of item, and quantity in store.
2. Also create an array that contains the items you want to buy, each as an object with the name and quantity you want.
See example in code.
3. Call the function buyFromDera(), with two arguments: first one is the store you want to buy from while the second one is the cart containing items you ordered.
eg. buyFromDera(clothStore, inCart);

# Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
