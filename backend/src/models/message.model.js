import mongoose from'mongoose';

const messageSchema = new mongoose.Schema({
    senderId: {type: String, required: true}, // Clerk user ID
    receiverId: {type: String, required: true}, // Clerk receiver ID
    content: {type:String, required: true},
}, {timestamp: true}
);

export const Message = mongoose.model("Message",messageSchema);