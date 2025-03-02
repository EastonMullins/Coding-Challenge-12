// Task 1 Created Revenue Metric Card

const dashboard1 = document.getElementById("dashboard");
const dashboard2 = document.querySelector("#dashboard");

const revenueCard = document.createElement(`div`);

revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

dashboard1.appendChild(revenueCard);

