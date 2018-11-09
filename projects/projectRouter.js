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

// G E T   P R O J E C T  by  I D
router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDB.get(id).then(project => {
    res.status(200).json(project);
  });
});

// C R E A T E   P R O J E C T
router.post("/", (req, res) => {
  projectDB
    .insert(req.body)
    .then(projectData => {
      res.status(201).json(projectData);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error creating the project." });
    });
});

// U P D A T E  P R O J E C T  by  I D
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  projectDB
    .update(id, changes)
    .then(project => {
      res.status(200).json({ message: "Project updated successfully." });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error modifying your project.", err });
    });
});

// D E L E T E   P O S T  by  I D
router.delete("/:id", (req, res) => {
  projectDB.remove(req.params.id).then(project => {
    res.status(200).json({ message: "Project deleted successfully." });
  });
});

module.exports = router;
