import mongoose from "mongoose"

const connectDb = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("✅ Database connected successfully!");
    } catch (err) {
        console.error('❌ Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
}
export default connectDb;
