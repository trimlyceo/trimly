exports.createBooking = (req, res) => {
  const booking = req.body;
  console.log('New booking received:', booking);
  res.status(201).json({ message: 'Booking created', booking });
};

exports.getBookings = (req, res) => {
  res.status(200).json({ message: 'Bookings fetched', bookings: [] });
};
