import express from "express";
import cors from "cors";
import 'dotenv/config'
import records from "./routes/record.mjs";
import sessions from "./routes/session.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);
app.use("/session", sessions);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
