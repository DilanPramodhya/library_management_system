import "dotenv/config";
import express from "express";
import cors from "cors";
import colors from "colors";
import logger from "./utils/logger";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2>📚 Library Management System 📚</h2>");
  next();
});

app.listen(PORT, () => {
  logger.info("");
  console.log(
    "🚀" +
      "  " +
      `Server is up and running on PORT ${PORT}`.inverse +
      " " +
      "🔥"
  );
});
