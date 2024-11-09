// main.js
// Import portfolio functions and Transaction class
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function to display portfolio value and asset allocations
function displayPortfolioDetails() {
    const totalValue = calculatePortfolioValue();
    console.log("Total Portfolio Value: $" + totalValue);

    const allocations = getPortfolioAllocation();
    allocations.forEach(asset => {
        console.log(`${asset.name}: ${asset.allocation.toFixed(2)}%`);
    });
}

// Function to create and execute sample transactions
function simulateTransactions() {
    try {
        new Transaction(1, "buy", 5);   // Buy 5 shares of Apple
        new Transaction(2, "sell", 2);  // Sell 2 US Treasury Bonds
        new Transaction(3, "sell", 3);  // Sell 3 shares of Tesla
        console.log("Transactions completed successfully.");
    } catch (error) {
        console.error(error.message);
    }
}

// Display initial portfolio
console.log("Initial Portfolio:");
displayPortfolioDetails();

// Simulate transactions and display updated portfolio
simulateTransactions();

console.log("\nUpdated Portfolio:");
displayPortfolioDetails();
