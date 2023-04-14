import mongoose from "mongoose";

const storesSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  storeLocation: {
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

storesSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Stores = mongoose.model("Stores", storesSchema);

export default Stores;
