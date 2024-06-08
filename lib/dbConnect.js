import mongoose from 'mongoose';

const connection = { isConnected: false };

async function connectToDb() {
    if (connection.isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL);

        connection.isConnected = db.connection.readyState;

        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

export default connectToDb;
