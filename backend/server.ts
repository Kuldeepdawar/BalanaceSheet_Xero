import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/api.xro/2.0/Reports/BalanceSheet", async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api.xro/2.0/Reports/BalanceSheet"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching balance sheet:", error);
    res.status(500).json({ error: "Failed to fetch balance sheet" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
