const express = require("express");
const server = express();

const projectDB = require("./data/helpers/projectModel");
const actionDB = require("./data/helpers/actionModel");

const projectRouter = require("./projects/projectRouter");
const actionRouter = require("./actions/actionRouter");
const port = 9000;

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("<h1>Here's the <em>root directory</em></h1>");
});

server.use("/projects", projectRouter);

// // G E T  A L L  P R O J E C T S
// server.get("/projects", (req, res) => {
//   projectDB
//     .get()
//     .then(project => {
//       res.status(200).json(project);
//     })
//     .catch(err =>
//       res.status(500).json({ message: "Cannot retrieve project." })
//     );
// });

server.listen(port, () => console.log(`Listening on port ${port}`));
