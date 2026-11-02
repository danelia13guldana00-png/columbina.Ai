const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Columbina AI Server is running!");
});

// Чат хабарламасын қабылдау
app.post("/chat", (req, res) => {
  const message = req.body.message;

  if (!message || !message.trim()) {
    return res.status(400).json({
      error: "Сообщение пустое"
    });
  }

  const reply = "Хи-хи~ Привет! Я Коломбина. Рада тебя видеть!";

  res.json({
    reply: reply
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Columbina AI запущена на порту " + PORT);
});
