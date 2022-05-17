import "./PatientHeader.css";

export default function PatientHeader(props) {
  return (
    // name="Bilal"
    // ID="1234"
    // DOB="10-1-2000"
    // Visit-date="10-1-2022"
    // gender="male"
    <>
      <div className="PatientHeader-Main-Div">
        <div className="PatientImageDiv">
          {props.gender === "male" && (
            <img
              className="PatientImage"
              src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
              alt=""
            />
          )}
          {props.gender === "female" && (
            <img
              className="PatientImage"
              src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-female-student-icon-png-image_326761.jpg"
              alt=""
            />
          )}
        </div>
        <div className="Patient-details-div">
          <div className="Patient-details-field">
            <div className="Patient-details-field-l">Name : </div>
            <div className="Patient-details-field-r">{props.name}</div>
          </div>
          <div className="Patient-details-field">
            <div className="Patient-details-field-l">ID : </div>
            <div className="Patient-details-field-r">{props.ID}</div>
          </div>
          <div className="Patient-details-field">
            <div className="Patient-details-field-l">DOB : </div>
            <div className="Patient-details-field-r">{props.DOB}</div>
          </div>
          <div className="Patient-details-field">
            <div className="Patient-details-field-l">Visit Date : </div>
            <div className="Patient-details-field-r">{props.VisitDate}</div>
          </div>
        </div>
      </div>
    </>
  );
}
