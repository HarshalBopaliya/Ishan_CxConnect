const app = require("./app.ts");
const connectDB = require("./config/dbConnect.ts");
const dotenv = require("dotenv");

dotenv.config({ path: ".config" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    connectDB(process.env.MONGO_URI || "localhost:27017/CX_CONNECT");
    console.log(`Server is running on ${PORT}`);
  } catch (error) {
    console.error("Error starting the server: ", error);
    process.exit(1);
  }
});
