import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeatSelection.css";

function SeatSelection() {
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    const toggleSeat = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    return (
        <div className="seat-container">
            <h1>Select Seats</h1>

            <div className="screen">SCREEN</div>

            <div className="seats">
                {rows.map(row => (
                    <div key={row} className="seat-row">
                        {cols.map(col => {
                            const seat = `${row}${col}`;
                            const isSelected = selectedSeats.includes(seat);

                            return (
                                <div
                                    key={seat}
                                    className={`seat ${isSelected ? "selected" : ""}`}
                                    onClick={() => toggleSeat(seat)}
                                >
                                    {seat}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <p>
                Selected Seats: {selectedSeats.join(", ") || "None"}
            </p>

            <button
                disabled={selectedSeats.length === 0}
                onClick={() => navigate("/confirm")}
            >
                Confirm Booking
            </button>
        </div>
    );
}

export default SeatSelection;
