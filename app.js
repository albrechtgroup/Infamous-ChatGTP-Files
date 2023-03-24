// Print the numbers 1-15 on each line, excluding
// 5, 10, 12:
let excludedNums = [];

for (let i = 1; i < 15; i++) {
    if(i === 5 || i === 10 || i === 12) {
        excludedNums.push(i);
    } else {
        console.log(`# ${i}`)
    }
}

console.log(excludedNums)


console.log("=== Shopping List ===")
// PART 1:
// Write a Javascript function that will help you 
// figure out whether you have enough money to buy
// all items in a shopping list. The function 
// should take in: a list of numbers of the cost 
// of every item in your shopping list. and a 
// number of the amount of money you have to spend. The function should return true if you have enough money to buy all of the items in your shopping list(otherwise, it should return false. For example: [4, 3, 5] 9  => False.
// Function should return true if you have enough
// money to buy all the items in your shopping list,
// otherwise, return false.
let groceries = [11, 7, 3, 13, 23];
let cash = 50;

function buyFood(groceries, cash) {
    let total = 0;
    for(let i = 0; i < groceries.length; i++) {
        total += groceries[i];
    }
    console.log(`Your total comes to: $${total}`)
    return cash >= total;
}

console.log(buyFood(groceries, cash));
// returns false. I do Not have enough cash :(



// PART 2:
// Now your function should take discounts into 
// consideration. Edit your function to take in an
// additional arguement of a list of discounts. 
// Each discount corresponds with an item in your
// shopping list, in order.
// Edit your function to print out the new price of
// each item you want to buy(don't worry about the
// return value for now).
// *For Example:  [4, 3, 5], 9, [1, 2, 1]
//  the cost of 4 is now 3
//  the cost of 3 is now 1
//  the cost of 5 is now 4
console.log("=== Discount ===");
let food = [11, 7, 3, 13, 23];
let totalCash = 50;
let discounts = [9, 6, 2.5, 11, 17];

function afterSale(food, totalCash, discounts) {
    let total = 0;
    for (let i = 0; i < food.length; i++){
        let salePrice = food[i] - discounts[i];
        total += salePrice;
    }
    console.log(`Your total savings are: $ ${total}`);
    console.log(`Your total cash on hand is: $ ${totalCash}`)
    console.log(`Can I afford food list after the Sale? ${totalCash >= total}`)
    return totalCash >= total;
}

console.log(afterSale(food, totalCash, discounts));
// returns 'true'  (Yes, I have enough cash!)



// PART 3: 
// If there's time, edit the return value of the 
// function so it returns true if you can buy all
// the items AFTER discounts have been applied.*
