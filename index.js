const express = require("express");
const server = express();
const port = 9000;
const cors = require("cors");

// E X P R E S S  R O U T E S
const projectRouter = require("./projects/projectRouter");
const actionRouter = require("./actions/actionRouter");

server.use(express.json());
server.use(cors());

// R O O T
server.get("/", (req, res) => {
  res.status(200).send("<h1>The <em>root directory</em></h1>");
});

// R O U T E S
server.use("/projects", projectRouter);
server.use("/actions", actionRouter);

// S E R V E R
server.listen(port, () => console.log(`Listening on port ${port}`));
