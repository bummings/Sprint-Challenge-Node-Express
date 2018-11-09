const express = require("express");
const server = express();
const port = 9000;

const projectRouter = require("./projects/projectRouter");
const actionRouter = require("./actions/actionRouter");

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("<h1>The <em>root directory</em></h1>");
});

server.use("/projects", projectRouter);
server.use("/actions", actionRouter);

server.listen(port, () => console.log(`Listening on port ${port}`));
