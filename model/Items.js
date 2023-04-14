import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDesc: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    default: "",
  },
  itemCategory: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
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

itemsSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Items = mongoose.model("Items", itemsSchema);

export default Items;
