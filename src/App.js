import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <h2>School Portal</h2>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
