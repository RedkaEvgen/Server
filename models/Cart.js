import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    productId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true,
    },
    count: {
        type:Number,
        required: true,
    }
    },
    {
    timestamps:true,
 },
);

export default mongoose.model('Cart',CartSchema);
