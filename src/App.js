import "./App.css";
import Dashboard from "./Dashboard";
import PatientReport from "./PatientReport";
import Registration from "./Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import PatientScreen from "./PatientScreen";
import SearchCard from "./Searchcard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/report" element={<PatientReport />} />
        <Route path="/patientScreen" element={<PatientScreen />} />
        <Route path="/test" element={<SearchCard />} />

      
      </Routes>
    </Router>
  );
}

export default App;
//comment added
