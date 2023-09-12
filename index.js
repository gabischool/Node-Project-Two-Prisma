// Import server here and start the application
import Server from "./api/server.js";

const port = 4000;

Server.listen(port, () => {
  console.log(`listening on ${port}`);
});
