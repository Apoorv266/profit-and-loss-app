var outputContainer = document.querySelector("#outputWindow");
var initialPrice = document.querySelector("#initialVal");
var currentPrice = document.querySelector("#currentVal");
var submitBtn = document.querySelector("#submitBtn");
var img = document.querySelector("#get-img")
var stockNo = document.querySelector("#noOfStocks");

function handleClick() {
    var initialPriceVal = Number(initialPrice.value);
    var stocksNo = Number(stockNo.value);
    var currentPriceVal = Number(currentPrice.value);

    profitLossFunc(initialPriceVal, stocksNo, currentPriceVal);
}


function profitLossFunc(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity
        let lossCent = (loss / initial) * 100

        outputContainer.innerText = `the loss is ${loss} and the percent is ${lossCent}%`
        outputContainer.style.color = "red"
        img.src = "./loss.jpg"
    }
    else if (current > initial) {
        let profit = (current - initial) * quantity
        let profitCent = (profit / current) * 100
        outputContainer.innerText = `the profit is ${profit} and the percent is ${profitCent.toFixed(2)}%`
        outputContainer.style.color = "green"
        img.src = "./profit.jpg"
    }
    else {
        outputContainer.innerText = `Enter a valid number !`
    }
}

submitBtn.addEventListener("click", handleClick)


