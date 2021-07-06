const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const doctors = [];

app.post("/doctor", (req, res) => {
  req.body.id = uuidv4();
  doctors.push(req.body);
  res.send(doctors);
});

app.get("/doctors", (req, res) => {
  const specialties = req.query.specialties;
  if (specialties) {
    const doctorsBySpecialization = doctors.filter(
      (doctor) => doctor.specialties === specialties
    );
    res.send(doctorsBySpecialization);
    return;
  }

  res.send(doctors);
});

app.get("/doctor/:id", (req, res) => {
  const searchDoctorId = req.params.id;
  const doctor = doctors.find((doctor) => doctor.id === searchDoctorId);
  res.send(doctor);
});

app.listen(3000, () => {
  console.log("server is running on port 3000 ");
});
