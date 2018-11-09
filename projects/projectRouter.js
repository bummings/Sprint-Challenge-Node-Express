const express = require("express");
const router = express.Router();

const projectDB = require("../data/helpers/projectModel");

// G E T  A L L  P R O J E C T S
router.get("/", (req, res) => {
  projectDB
    .get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: "Cannot retrieve project." })
    );
});

module.exports = router;
