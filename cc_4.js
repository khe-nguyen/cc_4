// Coding Challenge 4 - Retail Discount Engine: Dynamic Pricing Rules and Inventory Cycling

// Step 2: Product inventory
let inventory = [
    { name: "Canon EOS Rebel T7", category: "electronics", price: 450, inventory: 5 },
    { name: "Jeans", category: "apparel", price: 40, inventory: 10 },
    { name: "Mochi Ice Cream", category: "groceries", price: 8, inventory: 20 },
    { name: "Stickers Pack", category: "household", price: 5, inventory: 50 },
    { name: "Kodak PixPro Camera", category: "electronics", price: 150, inventory: 7 }
];

// Step 3: Apply discounts on each category
for (let product of inventory) {
    switch (product.category) {
        case "electronics":
            product.discountedPrice = product.price * 0.8; // 20% off for electronics
            break;
        case "apparel":
            product.discountedPrice = product.price * 0.85; // 15% off for appareal
            break;
        case "groceries":
        case "household":
            product.discountedPrice = product.price * 0.9; // 10% off for groceries and household
            break;
        default:
            product.discountedPrice = product.price; // no discount
    }
}

// Testing if the code works on console
console.log(inventory[0]);

// Step 4: Apply extra discount based on customer type
let customerType = "senior";

let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05; // 5% off
} else if (customerType === "senior") {
    extraDiscount = 0.07; // 7% off
} else {
    extraDiscount = 0; // no discount
}

// Testing on console
console.log("Customer type:", customerType);
console.log("Extra discount:", (extraDiscount * 100).toFixed(0) + "%"); // Making sure no floats

// Step 5: Simulate checkout for 3 customers
for (let i = 1; i <= 3; i++) {
    let cartTotal = 0;

    // loop through products
    for (let product of inventory) {
        if (product.inventory > 0) {
            // apply category discount (already in discountedPrice from Step 3)
            let finalPrice = product.discountedPrice;

            // apply extra discount (from Step 4)
            finalPrice = finalPrice - (finalPrice * extraDiscount);

            // add to cart total
            cartTotal += finalPrice;

            // reduce inventory by 1 (customer buys one of each available item)
            product.inventory -= 1;
        }
    }

    console.log("Customer #" + i + " total cost: $" + cartTotal.toFixed(2));
}

// Step 6: Log key/value pairs of one product
let firstProduct = inventory[0];

console.log("Details of first product after discounts:");
for (let key in firstProduct) {
    console.log(key + ": " + firstProduct[key]);
}

// Step 7: Use Object.entries() and destructuring
console.log("Updated inventory after checkout:");

for (let product of inventory) {
    for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
    console.log("-----"); // separator between products
}