let bookings = [];

function addBooking(data) {
  const newBooking = {
    id: bookings.length + 1,
    ...data,
    status: 'pending'
  };
  bookings.push(newBooking);
  return newBooking;
}

function getBookings() {
  return bookings;
}

module.exports = { addBooking, getBookings };
