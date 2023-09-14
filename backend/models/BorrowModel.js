import mongoose from "mongoose";

const borrowSchema = mongoose.Schema(
    {
        User: { 
            type:String,
            required: true,
        },
        Book: {
            type: String,
            required: true,
        },
       ReturneDate: {
            type: Number,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

export const Borrow = mongoose.model('Borrow', borrowSchema);