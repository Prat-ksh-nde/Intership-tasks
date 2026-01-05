const express = require('express');
const cors = require('cors');
require('dotenv').config();

const postRoutes = require('./src/routes/postRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// 👇 DO NOT ADD ()
app.use('/api/posts', postRoutes);

// 👇 error middleware must be LAST
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
