const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    address: { type: String, requrired: true },
    amount: { type: number, required: true },
    status: { type: String, default: pending, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model('Order', OrderSchema);
