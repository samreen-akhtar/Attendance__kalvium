import "./sidebar.css";

const sidebar = ({ sidebarOpen, closebarOpen }) => {
  return (
    <div
      className={(sidebarOpen = sidebarOpen ? "sidebar-responsive" : " ")}
      id="sidebar"
    >
      <div className="sidebar__title">
        <div className="sidebar__img"></div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link ">
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar__link activelink">
          <a href="#">My Attendance</a>
        </div>
        <div className="sidebar__link ">
          <a href="#">Student details</a>
        </div>
        <div className="sidebar__link ">
          <a href="#">Class timetable</a>
        </div>
        <div className="sidebar__link ">
          <a href="#">Syllabus</a>
        </div>
        <div className="sidebar__link ">
          <a href="#">Events</a>
        </div>
        <div className="sidebar__link ">
          <a href="#">Results</a>
        </div>
        <div className="sidebar__link ">
          <a href="#">Logout & Acoount Settings</a>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
