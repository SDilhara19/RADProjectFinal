import mongoose from "mongoose";

const borrowSchema = mongoose.Schema(
    {
        UserId: { 
            type:Number,
            required: true,
        },
        BookId: {
            type: Number,
            required: true,
        },
       ReturneDate: {
            type: Date,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

export const Borrow = mongoose.model('Borrow', borrowSchema);