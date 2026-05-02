import Patient from "../models/patientModel.js";

export const createPatient = async (req, res) => {
  try {
    const { name, admittedDate } = req.body;

    const existingPatient = await Patient.findOne({
      name,
      admittedDate
    });

    if (existingPatient) {
      return res.status(409).json({
        message: "Patient already exists"
      });
    }

    const newPatient = await Patient.create(req.body);

    res.status(201).json({
      message: "Patient created successfully",
      data: newPatient
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


