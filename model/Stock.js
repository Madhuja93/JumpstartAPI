import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  itemID: {
    
  },
  storeID: {
    
  },
  itemStock: {
    type: Number,
    default: "",
  },
  itemRestockCount: {
    type: Number,
  },
  minimumStock: {
    
  },
  itemtrendy: {
    type: Boolean,
    default: "",
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

stockSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;
