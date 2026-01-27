function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">TravelCo</h2>

      <nav>
        <p className="section">Main</p>
        <ul>
          <li>Dashboard</li>
          <li>Leads</li>
          <li>Itineraries</li>
          <li>Reports</li>
        </ul>

        <p className="section">User Control</p>
        <ul>
          <li>Participants</li>
          <li>Roles</li>
        </ul>

        <p className="section">Misc</p>
        <ul>
          <li>Settings</li>
          <li>Support</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
