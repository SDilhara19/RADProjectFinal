import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: { 
            type:String,
            required: true,
        },
        nic: {
            type: Number,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

export const User = mongoose.model('User', userSchema);