const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv");
const records = require("./routes/record.mjs");

dotenv.config()

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records)

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
