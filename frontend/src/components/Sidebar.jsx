import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown,IoIosArrowForward } from "react-icons/io";


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">gogaga</h2>
        <IoMenuOutline className="menu-icon" />
      </div>
      <nav>
        <p className="section">Menu</p>
        <ul>
          <li>Dashboard</li>
          <li><span>Leads</span><IoIosArrowDown className="arrow-icon" /></li>
          <li>Itineraries <IoIosArrowForward className="arrow-icon" /></li>
          <li>Reports</li>
        </ul>

        <p className="section">Google Reviews</p>
        <ul>
          <li>Vouchers <IoIosArrowForward className="arrow-icon" /></li>
          <li>Accounts <IoIosArrowForward className="arrow-icon" /></li>
          <li>Reports <IoIosArrowForward className="arrow-icon" /></li>
          <li>Customer Support</li>
        </ul>
        <p className="section">USER CONTROL</p>
        <ul>
          <li>User Settings <IoIosArrowForward className="arrow-icon" /></li>
          <li>Masters Settings <IoIosArrowForward className="arrow-icon" /></li>
          <li>HRM <IoIosArrowForward className="arrow-icon" /></li>
          <li>Asset Management <IoIosArrowForward className="arrow-icon" /></li>
        </ul>

        <p className="section">PARTICIPANTS</p>
        <ul>
          <li>Itinerary Customers</li>
          <li>Partners</li>
          <li>Suppliers <IoIosArrowForward className="arrow-icon" /></li>
        </ul>
        <p className="section">MISCLLANEOUS</p>
      </nav>
    </aside>
  );
}

export default Sidebar;
