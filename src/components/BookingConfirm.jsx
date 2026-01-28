import "./BookingConfirm.css";

function BookingConfirm() {
  return (
    <div className="confirm-container">
      <h1>Booking Confirmed ✅</h1>

      <p>Your tickets have been successfully booked.</p>

      <div className="summary">
        <p><strong>Movie:</strong> Interstellar</p>
        <p><strong>Seats:</strong> A1, A2</p>
        <p><strong>Show Time:</strong> 7:30 PM</p>
      </div>

      <p className="note">
        Enjoy the show 🍿
      </p>
    </div>
  );
}

export default BookingConfirm;
