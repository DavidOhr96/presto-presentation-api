import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(express.json())

const corsOptions = {
  origin: ['http://127.0.0.1:3000',
    'http://localhost:3000'
  ],
  credentials:true
}
app.use(cors(corsOptions))


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});