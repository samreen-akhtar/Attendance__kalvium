import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <h2>School Portal</h2>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
    </div>
  );
};

export default App;
