import mongoose from "mongoose";

const genreSchema = mongoose.Schema(
    {
        Genre: { 
            type:String,
            required: true,
        },
        Book: {
            type: Number,
            required: true,
        },
    },
    {
        timestamp: true,
    }
);

export const Genre = mongoose.model('Genre', genreSchema);