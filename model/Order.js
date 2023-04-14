import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cartID: {
    
  },
  method: {
    type: String,
    required: true,
  },
  storeID: {
    
  },
  deliveryStatus: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

orderSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
