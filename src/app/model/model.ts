import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('test', userSchema);

export default User;