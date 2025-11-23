import slugify from "slugify"
import Sport from '../models/Sport.js'
import {createError} from "../utils/createError.js";

export const getSports = async (req, res, next) => {
    try {
        const sports = await Sport.find();

        return res.status(200).json({
            success: true,
            message: "All sports fetched!",
            data: sports
        });

    } catch (err) {
        next(err);
    }
};

export const getSportBySlug = async (req, res, next) => {
    try {
        const {slug} = req.params;

        const sport = await Sport.findOne({slug});

        if (!sport) {
            return next(createError("Sport not found!", 404));
        }

        return res.status(200).json({
            success: true,
            message: "Sport fetched!",
            data: sport
        });

    } catch (err) {
        next(err);
    }
};

export const createSport = async (req, res, next) => {
    try {
        const {name, slug, description} = req.body;

        if (!name) return next(createError("Sport name is required", 400));

        let finalSlug = slug ? slug.toLowerCase() : slugify(name, {lower: true, strict: true});

        const nameExist = await Sport.findOne({name});

        if (nameExist) return next(createError("Sport name already exist!", 409));

        const slugExist = await Sport.findOne({slug: finalSlug});

        if (slugExist) return next(createError("Sport slug already exist!", 409));

        const sport = await Sport.create({
            name,
            slug: finalSlug,
            description: description || "",
            playerStats: [],
            matchStatus: [],
            teamStatus: [],
        });

        return res.status(200).json({success: true, message: "Sport created successfully!", data: sport});

    } catch (err) {
        return next(err);
    }
};

export default {getSportBySlug, getSports, createSport};
