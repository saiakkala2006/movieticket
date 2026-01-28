import "./Admin.css";

function AdminHome() {
  return (
    <div className="admin-container">
      <h1>Admin Dashboard 🛠️</h1>

      <div className="admin-cards">
        <div className="admin-card">Add Movie</div>
        <div className="admin-card">Manage Shows</div>
        <div className="admin-card">View Bookings</div>
      </div>
    </div>
  );
}

export default AdminHome;
