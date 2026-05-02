import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    age: {
      type: Number,
      required: true
    },

    disease: {
      type: String,
      required: true,
      trim: true
    },

    doctor: {
      type: String,
      default: "Not Assigned"
    },

    admittedDate: {
      type: Date,
      default: Date.now
    }
  },

);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;