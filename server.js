const express = require('express'); // Require express correctly
const app = express();
const hotelRouter=require('../Airbnd/Routes/Hotels.route.js')
app.use(express.json());
app.use('/api/hotels',hotelRouter);
const PORT = 3900; // Define PORT as a constant

app.get('/', (req, res) => {
  res.send('hello israr'); // Send the response string
});

app.listen(process.env.PORT || PORT, () => { // Start the server and handle potential errors
  console.log(`Server listening on port ${PORT}`); // Log the port for clarity
});
