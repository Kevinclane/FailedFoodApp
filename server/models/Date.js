import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Date = new Schema(
  {
    date: { type: String, required: true },
    food: { type: Array, required: true },
    creatorEmail: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Date.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Date;
