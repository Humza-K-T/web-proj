import "./App.css";
import Dashboard from "./Dashboard";
import PatientReport from "./PatientReport";
import Registration from "./Registration";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import LoginScreen from "./LoginScreen";

function App() {
  const navigate = useNavigate();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/report" element={<PatientReport />} />
      </Routes>
    </Router>
  );
}

export default App;
//comment added
