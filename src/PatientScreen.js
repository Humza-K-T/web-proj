import Back from "./Back";
import Navbar from "./navbar";
import PatientHeader from "./PatientHeader";
import "./PatientScreen.css";
export default function PatientScreen() {
  return (
    <>
      <Navbar />

      <Back />

      <PatientHeader
        name="Afra Siyab"
        ID="12534"
        DOB="10-1-2000"
        VisitDate="10-1-2022"
        gender="female"
      />
      <div className="buttondiv">
        <button className="report--button">Add Recommendation</button>
        <button className="report--button">Add Lab Report</button>
      </div>
      <div>
        <div className="Heading">Patient History</div>
        <div className="table-div">
          <table>
            <tr>
              <th>Sr No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Visit Date</th>
            </tr>
            <tr>
              <td>1.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2.</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
