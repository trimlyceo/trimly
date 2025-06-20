const express = require('express');
const cors = require('cors');
const app = express();
const bookingRoutes = require('./routes/bookingRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Trimly backend running on port ${PORT}`);
});
