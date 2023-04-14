import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
  },
  adminRole: {
    type: String,
    required: true,
  },
  adminUsername: {
    type: String,
    default: "",
  },
  adminPassword: {
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

adminSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
