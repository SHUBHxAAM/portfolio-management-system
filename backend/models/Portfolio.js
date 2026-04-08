const mongoose = require('mongoose');

// Create Portfolio Schema
const portfolioSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    investments: [{
        asset: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        dateInvested: {
            type: Date,
            default: Date.now,
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Middleware to update updatedAt field
portfolioSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Create Portfolio model
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;