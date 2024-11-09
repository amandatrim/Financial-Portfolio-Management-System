// portfolio.js
// Import assets from asset.js file
import { assets } from './assets';

// Function to calculate and return the total value of all assets in the portfolio
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

// Function to calculate the percentage allocation of each asset
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue) * 100,
    }));
}
