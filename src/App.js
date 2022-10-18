import { CssBaseline } from "@mui/material";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Power from "./components/Power";
import Sidebar from "./components/Sidebar";



function App() {
  return (

    <div style={{ backgroundColor: "rgb(0,0,0)", color: "white" }} >
      <CssBaseline />
      <Navbar />
      <div style={{ display: "flex", gap: "100px" }}>
        <Chart />
        <Sidebar />
      </div>
      <br />
      <Power />
      <Footer />
    </div>
  );
}

export default App;
