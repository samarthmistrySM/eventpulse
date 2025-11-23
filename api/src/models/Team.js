import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    logo: {
        type: String,
        default: ""
    },
    banner: {
        type: String,
        default: ""
    },
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sport",
        required: true,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
    }],
    stats: {
        type: Object,
        default: {},
    },
    meta: {
        type: Object,
        default: {},
    },
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model("Team", TeamSchema);
