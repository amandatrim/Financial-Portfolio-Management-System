// asset.js
// This is the array of  all assets, with id, name, type etc
export const assets = [
    { id: 1, name: "Paystack Inc", type: "stock", price: 200, quantity: 24 },
    { id: 2, name: "Dell Inc", type: "bond", price: 3000, quantity: 15 },
    { id: 3, name: "FlutterwaveInc.", type: "stock", price: 400, quantity: 12 },
    { id: 4, name: "Cisco Inc.", type: "stock", price: 630, quantity: 15 },
];

// Function to get asset details by ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
