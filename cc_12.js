// Task 1 - Created Revenue Metric Card

const dashboard1 = document.getElementById("dashboard");
const dashboard2 = document.querySelector("#dashboard");

const revenueCard = document.createElement(`div`);
const profitCard = document.createElement("div");
const expensesCard = document.createElement("div");

revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

profitCard.setAttribute("class","metric-card");
profitCard.setAttribute("id", "profitCard");

expensesCard.setAttribute("class","metric-card");
expensesCard.setAttribute("id", "expensesCard");

revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";
profitCard.innerHTML = "<h3>Profit</h3><p>$0</p>"
expensesCard.innerHTML = "<h3>Expenses</h3><p>$0</p>"

dashboard1.appendChild(revenueCard);
dashboard1.appendChild(profitCard);
dashboard1.appendChild(expensesCard);


// Task 2 - Updated Metric Cards Via Array Conversion

const metricCards = document.querySelectorAll(".metric-card");

const metricCardsArray = Array.from(metricCards);

metricCardsArray.forEach(card => {
    card.innerHTML += " - Updated";
    card.style.backgroundColor = "cyan"
});

// Task 3 - Implemented Dynamic Inventory List

const inventoryList = document.getElementById("inventoryList");
function addInventoryItem(productName) {
    const li = document.createElement("li");
    li.setAttribute("class", "product-item");
    li.setAttribute("data-name", productName);
    li.onclick = function() {
        inventoryList.removeChild(li)
    }
    li.innerHTML = `${productName}`;
    inventoryList.appendChild(li);
}

// Task 4 - Demonstrated Event Bubbling in Customer Section

const customerSection = document.getElementById("customerSection");

customerSection.addEventListener("click", () => {
    console.log("Customer Section Clicked");
});

const customerCards = document.querySelectorAll(".customer-card");

customerCards.forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("Customer Card Clicked");

        event.stopPropagation();
    });
});
