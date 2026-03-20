let input = prompt ("$100");
let priceWithoutDollar= input.replace("$", "").trim();
let priceNumber = parseFloat (priceWithoutDollar);
let discountPrice= priceNumber * 0.9;
console.log(`Your new price is: $${discountPrice.toFixed(2)}`);