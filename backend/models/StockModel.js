import mongoose from "mongoose";

const stockSchema = mongoose.Schema(
    { 
        BookId: {
            type: Number,
            required: true,
        },
        AvailableStock: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamp: true,
    }
);

export const Stock = mongoose.model('Stock', stockSchema);