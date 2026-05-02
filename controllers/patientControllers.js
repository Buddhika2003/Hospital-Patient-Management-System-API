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


export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();

    if (patients.length === 0) {
      return res.status(404).json({
        message: "No patient records found"
      });
    }

    res.status(200).json(patients);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

    if (!deletedPatient) {
      return res.status(404).json({
        message: "Patient not found"
      });
    }

    res.status(200).json({
      message: "Patient deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};