import mongoose from "mongoose";

const SportSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: "",
    },
    playerStats: {
        type: [String],
        default: [],
    },
    matchStats: {
        type: [String],
        default: [],
    },
    teamStats: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Sport", SportSchema);
