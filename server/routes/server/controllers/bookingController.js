const { addBooking, getBookings } = require('../models/Booking');

exports.createBooking = (req, res) => {
  const booking = addBooking(req.body);
  console.log('New booking:', booking);
  res.status(201).json({ message: 'Booking created', booking });
};

exports.getBookings = (req, res) => {
  const bookings = getBookings();
  res.status(200).json({ bookings });
};
