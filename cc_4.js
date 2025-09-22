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

console.log(inventory[0]);

