import "./App.css";
import Dashboard from "./Dashboard";
import PatientReport from "./PatientReport";
import Registration from "./Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import PatientScreen from "./PatientScreen";
import SearchCard from "./Searchcard";
import SearchPage from "./searchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/report" element={<PatientReport />} />
        <Route path="/patientScreen" element={<PatientScreen />} />
        <Route path="/search" element={<SearchPage />} />

        <Route
          path="/test"
          element={
            <SearchCard
              name="bilal"
              id="123"
              dob="12-10-200"
              visit="12-10-2000"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
//comment added
