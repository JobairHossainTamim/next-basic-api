import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const mongoURL = process.env.MONGO_URL || 'default_connection_string'; // Provide a default connection string here
        await mongoose.connect(mongoURL);
    } catch (error) {
        console.log(error);
    }
}

export default dbConnection;