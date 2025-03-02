// Task 1 - Created Revenue Metric Card

const dashboard1 = document.getElementById("dashboard");
const dashboard2 = document.querySelector("#dashboard");

const revenueCard = document.createElement(`div`);

revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

dashboard1.appendChild(revenueCard);


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
