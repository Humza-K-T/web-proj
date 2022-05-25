import "./App.css";
import Dashboard from "./Dashboard";
import PatientReport from "./PatientReport";
import Registration from "./Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import PatientScreen from "./PatientScreen";
import SearchCard from "./Searchcard";
import SearchPage from "./searchPage";
import Recommendation from "./Recommendation";
import ProtectedRoutes from "./ProtectedRoutes";
import { createContext, useState } from "react";
import ErrorScreen from "./ErrorScreen";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false, name: "afra" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/reg" element={<Registration />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/report" element={<PatientReport />} />
            <Route path="/patientScreen" element={<PatientScreen />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/recommendation" element={<Recommendation />} />
          </Route>
          <Route path="*" element={<ErrorScreen />} />
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
    </UserContext.Provider>
  );
}

export default App;
//comment added
