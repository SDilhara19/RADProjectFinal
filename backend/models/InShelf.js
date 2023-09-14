import mongoose from "mongoose";

const inShelfSchema = mongoose.Schema(
    { 
        Book: {
            type: String,
            required: true,
        },
        AvailableInShelf: {
            type: Boolean,
            required: true,
        }
        ShelfNo: {
            type: Number,
            required: true,
        }
    },
    {
        timestamp: true,
    }
);

export const InShelf = mongoose.model('InShelf', inShelfSchema);