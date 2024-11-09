// transaction.js
// Import getAssetById from asset.js to retrieve individual asset data
import { getAssetById } from './asset.js';

// Class to handle buy and sell transactions
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.executeTransaction();
    }

    executeTransaction() {
        const asset = getAssetById(this.assetId);
        if (!asset) throw new Error("Asset not found");

        if (this.type === "buy") {
            asset.quantity += this.quantity; // Increase asset quantity for a buy
        } else if (this.type === "sell") {
            if (asset.quantity < this.quantity) {
                // Throw error if selling quantity exceeds available
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }
            asset.quantity -= this.quantity; // Decrease asset quantity for a sale
        } else {
            throw new Error("Invalid transaction type");
        }
    }
}
