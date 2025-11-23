import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sport",
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        default: null,
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }],
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }],
    playerStats: {
        type: Object,
        default: {},
    },
    matchStats: {
        type: Object,
        default: {},
    },
    status: {
        type: String,
        enum: ["scheduled", "ongoing", "finished", "cancelled"],
        default: "scheduled",
    },
    startedAt: {type: Date, default: null},
    endedAt: {type: Date, default: null},
    createdAt: {type: Date, default: Date.now}

});

export default mongoose.model("Match", MatchSchema);
