import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sport",
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    startAt: {
        type: Date,
        default: null
    },
    endAt: {
        type: Date,
        default: null
    },
    venue: {
        name: String,
        address: String,
        url: String
    },
    status: {
        type: String,
        enum: ["upcoming", "live", "finished", "cancelled"],
        default: "upcoming",
    },
    custom: {type: Object, default: {}},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model("Event", EventSchema);
