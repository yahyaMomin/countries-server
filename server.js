import app from "./src/app.js";
import connect from "./src/db/connect.js";
import uploadData from "./src/db/uploadData.js";

const startServer = () => {
   connect();
   // uploadData();
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
      console.log("server running on port ");
   });
};
startServer();
