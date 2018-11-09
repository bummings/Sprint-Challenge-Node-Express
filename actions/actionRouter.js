const express = require("express");
const router = express.Router();

const actionDB = require("../data/helpers/actionModel");

// G E T  A L L  A C T I O N S
router.get("/", (req, res) => {
  actionDB
    .get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => res.status(500).json({ message: "Cannot retrieve action." }));
});

// G E T   A C T I O N  by  I D
router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionDB.get(id).then(action => {
    res.status(200).json(action);
  });
});

// C R E A T E   A C T I O N
router.post("/", (req, res) => {
  if (!req.body.notes || !req.body.description) {
    return res
      .status(400)
      .json({ message: "Must have notes, description and a project ID." });
  }
  actionDB
    .insert(req.body)
    .then(actionData => {
      res.status(201).json(actionData);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error creating the action." });
    });
});

// U P D A T E  A C T I O N  by  I D
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  actionDB
    .update(id, changes)
    .then(action => {
      res.status(200).json({ message: "Action updated successfully." });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error modifying your action.", err });
    });
});

// D E L E T E   P O S T  by  I D
router.delete("/:id", (req, res) => {
  actionDB.remove(req.params.id).then(action => {
    res.status(200).json({ message: "Action deleted successfully." });
  });
});

module.exports = router;
