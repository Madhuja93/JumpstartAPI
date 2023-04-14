import mongoose from "mongoose";

const shoppingCartSchema = new mongoose.Schema({
  customerID: {
    
  },
  customerName: {
    
  },
  itemID: {
   
  },
  itemName: {
    
  },
  itemPrice: {
    
  },
  itemQuantity: {
    type: Number,
    required: true,
  },
  itemCost: {
    
  },
  cartTotal: {
    
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

shoppingCartSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);

export default ShoppingCart;
