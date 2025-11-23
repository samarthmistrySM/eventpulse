import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: {
        type: String,
        default: "",
    },
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sport",
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        default: null,
    },
    role: {
        type: String,
        enum: [
            "player",
            "manager",
            "coach",
            "analyst",
            "owner",
            "founder",
            "staff",
            "substitute",
            "trial",
            "captain",
            "none"
        ],
        default: "player",
    },
    pastTeams: [
        {
            team: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Team",
                required: true
            },
            from: {type: Date, required: true},
            to: {type: Date, default: null},
            reason: {type: String, default: ""}
        }
    ],
    stats: {
        type: Object,
        default: {}
    },
    meta: {
        type: Object,
        default: {}
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Player", PlayerSchema);
