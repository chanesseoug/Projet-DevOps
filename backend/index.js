const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); 

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(' Backend is running!');
});


app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
  console.error(' Unexpected error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});


app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
