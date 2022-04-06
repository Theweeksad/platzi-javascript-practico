//const originalPrice = 120;
//const discount = 18;


function calculateDiscountedPrice(price, discount) {
    const percentageDiscountedPrice = 100 - discount;
    const discountedPrice = (price * percentageDiscountedPrice) / 100;

    return discountedPrice;
}

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const discountedPrice = calculateDiscountedPrice(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "The discounted prices are: $" + discountedPrice;
}



//console.log({
//    originalPrice,
//    discount,
//    percentageDiscountedPrice,
//    discountedPrice,
//});
