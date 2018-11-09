const express = require("express");
const router = express.Router();

const actionDB = require("../data/helpers/actionModel");

// G E T  A L L  P R O J E C T S
router.get("/", (req, res) => {
  actionDB
    .get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json({ message: "Cannot retrieve action." }));
});

module.exports = router;
